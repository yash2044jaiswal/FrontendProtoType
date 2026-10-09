import { useEffect, useRef, useState } from "react";

import {
  Viewer,
  Ion,
  createWorldTerrainAsync,
  createOsmBuildingsAsync,
  Cartesian3,
  Color,
  HeightReference,
  IonWorldImageryStyle,
  createWorldImageryAsync,
  ScreenSpaceEventType,
} from "cesium";

import "cesium/Build/Cesium/Widgets/widgets.css";

const expeditions = [
  {
    id: 1,
    name: "Antarctic Research Station",
    lat: -70.77,
    lng: 11.73,
    year: "2025",
    description: "Scientific research in Antarctica.",
  },
  {
    id: 2,
    name: "Arctic Research Expedition",
    lat: 78.22,
    lng: 15.63,
    year: "2024",
    description: "Polar climate and environmental research.",
  },
  {
    id: 3,
    name: "Indian Research Expedition",
    lat: -69.0,
    lng: 39.58,
    year: "2025",
    description: "Indian scientific research in Antarctica.",
  },
];

export default function GlobalView() {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const entitiesRef = useRef([]);

  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    let viewer;

    async function initializeGlobe() {
      try {
        const token = import.meta.env.VITE_CESIUM_ION_TOKEN;

        if (!token) {
          throw new Error(
            "Cesium token missing. Add VITE_CESIUM_ION_TOKEN to .env"
          );
        }

        Ion.defaultAccessToken = token;

        // Create Cesium Viewer
        const terrainProvider = await createWorldTerrainAsync();

        if (cancelled) return;

        viewer = new Viewer(containerRef.current, {
          animation: false,
          timeline: false,
          baseLayerPicker: false,

          // Cesium search bar
          geocoder: true,

          homeButton: true,
          sceneModePicker: false,
          navigationHelpButton: true,
          fullscreenButton: true,

          infoBox: false,
          selectionIndicator: false,

          terrainProvider,
          scene3DOnly: true,
          requestRenderMode: false,
        });

        if (cancelled) {
          viewer.destroy();
          return;
        }

        viewerRef.current = viewer;

        // ==========================================
        // ENABLE MANUAL MOUSE AND CAMERA CONTROLS
        // ==========================================

        const controller =
          viewer.scene.screenSpaceCameraController;

        controller.enableRotate = true;
        controller.enableTranslate = true;
        controller.enableZoom = true;
        controller.enableTilt = true;
        controller.enableLook = true;

        controller.enableInputs = true;

        // Smooth camera movement
        controller.inertiaSpin = 0.9;
        controller.inertiaTranslate = 0.9;
        controller.inertiaZoom = 0.8;

        // Camera zoom limits
        controller.minimumZoomDistance = 50;
        controller.maximumZoomDistance = 30000000;

        // Globe settings
        viewer.scene.globe.enableLighting = true;
        viewer.scene.globe.depthTestAgainstTerrain = false;

        // ==========================================
        // SATELLITE IMAGERY
        // ==========================================

        const imagery = await createWorldImageryAsync({
          style: IonWorldImageryStyle.AERIAL,
        });

        if (cancelled) {
          viewer.destroy();
          return;
        }

        viewer.imageryLayers.removeAll();
        viewer.imageryLayers.addImageryProvider(imagery);

        // ==========================================
        // 3D BUILDINGS
        // ==========================================

        try {
          const buildings = await createOsmBuildingsAsync();

          if (!cancelled) {
            viewer.scene.primitives.add(buildings);
          }
        } catch (buildingError) {
          console.warn(
            "3D buildings unavailable:",
            buildingError
          );
        }

        if (cancelled) {
          viewer.destroy();
          return;
        }

        // ==========================================
        // EXPEDITION MARKERS
        // ==========================================

        entitiesRef.current = expeditions.map((expedition) =>
          viewer.entities.add({
            name: expedition.name,

            position: Cartesian3.fromDegrees(
              expedition.lng,
              expedition.lat,
              100
            ),

            point: {
              pixelSize: 12,
              color: Color.ORANGE,
              outlineColor: Color.WHITE,
              outlineWidth: 2,
              heightReference: HeightReference.NONE,
              disableDepthTestDistance:
                Number.POSITIVE_INFINITY,
            },

            label: {
              text: expedition.name,
              font: "14px sans-serif",
              fillColor: Color.WHITE,
              outlineColor: Color.BLACK,
              outlineWidth: 3,
              style: 2,
              pixelOffset: { x: 0, y: -22 },
              disableDepthTestDistance:
                Number.POSITIVE_INFINITY,
            },

            properties: {
              expeditionId: expedition.id,
            },
          })
        );

        // ==========================================
        // INITIAL CAMERA POSITION
        // ==========================================

        await viewer.camera.flyTo({
          destination: Cartesian3.fromDegrees(
            78,
            22,
            18000000
          ),
          duration: 2,
        });

        if (cancelled) return;

        // ==========================================
        // CLICK EXPEDITION MARKERS
        // ==========================================

        viewer.screenSpaceEventHandler.setInputAction(
          (event) => {
            const picked = viewer.scene.pick(event.position);

            const id = picked?.id;

            const expeditionId =
              id?.properties?.expeditionId?.getValue();

            const expedition = expeditions.find(
              (item) => item.id === expeditionId
            );

            if (!expedition) return;

            setSelected(expedition);

            viewer.camera.flyTo({
              destination: Cartesian3.fromDegrees(
                expedition.lng,
                expedition.lat,
                900000
              ),
              duration: 2,
            });
          },
          ScreenSpaceEventType.LEFT_CLICK
        );
      } catch (err) {
        console.error("Cesium initialization failed:", err);

        if (!cancelled) {
          setError(
            err.message || "Unable to load the 3D globe."
          );
        }
      }
    }

    initializeGlobe();

    return () => {
      cancelled = true;

      if (viewer && !viewer.isDestroyed()) {
        viewer.destroy();
      }

      viewerRef.current = null;
      entitiesRef.current = [];
    };
  }, []);

  // ==========================================
  // FLY TO EXPEDITION
  // ==========================================

  const focusLocation = (expedition) => {
    setSelected(expedition);

    viewerRef.current?.camera.flyTo({
      destination: Cartesian3.fromDegrees(
        expedition.lng,
        expedition.lat,
        900000
      ),
      duration: 2,
    });
  };

  // ==========================================
  // RETURN UI
  // ==========================================

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Cesium Globe */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      />

      {/* Header and Expedition List */}
      <div className="absolute left-5 top-5 z-10 max-w-sm rounded-2xl border border-white/10 bg-slate-950/85 p-5 text-white shadow-2xl backdrop-blur-xl">
        <h2 className="text-2xl font-bold">
          Explore the Earth
        </h2>

        <p className="mt-2 text-sm text-slate-300">
          Discover polar expeditions worldwide
        </p>

        {error && (
          <p className="mt-3 break-words text-sm text-red-300">
            {error}
          </p>
        )}

        <div className="mt-4 border-t border-white/10 pt-3">
          <p className="mb-2 text-xs uppercase tracking-widest text-cyan-300">
            Expeditions
          </p>

          <div className="space-y-2">
            {expeditions.map((expedition) => (
              <button
                key={expedition.id}
                type="button"
                onClick={() => focusLocation(expedition)}
                className="block w-full rounded-lg bg-white/5 px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-cyan-400/15 hover:text-cyan-200"
              >
                {expedition.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Expedition Details */}
      {selected && (
        <div className="absolute bottom-5 left-5 z-10 w-[calc(100%-40px)] max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="float-right rounded-lg px-3 py-1 text-xl text-slate-500 transition hover:bg-slate-100"
            aria-label="Close expedition details"
          >
            ×
          </button>

          <h3 className="pr-8 text-lg font-bold">
            {selected.name}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {selected.description}
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Coordinates: {selected.lat}, {selected.lng}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Year: {selected.year}
          </p>

          <button
            type="button"
            onClick={() => {
              viewerRef.current?.camera.flyTo({
                destination: Cartesian3.fromDegrees(
                  selected.lng,
                  selected.lat,
                  50000
                ),
                duration: 2,
              });
            }}
            className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan-800"
          >
            Zoom into location
          </button>
        </div>
      )}
    </div>
  );
}