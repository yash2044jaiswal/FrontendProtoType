import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { geoOrthographic, geoPath, geoGraticule10, geoDistance } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/land-110m.json'; // Natural Earth, public domain, bundled locally

const land = feature(world, world.objects.land);
const grid = geoGraticule10();
// Sample pins. Only the Southern Ocean 2006 report is a real record; the rest are placeholders.
const PINS = [
	{ lat: -69.4, lon: 76.2, live: true }, { lat: 78.9, lon: 11.9, live: true },
	{ lat: -70.8, lon: 11.7 }, { lat: 30.9, lon: 79.1 }, { lat: -55, lon: 60 },
];
const SIZE = 340;

function Globe() {
	const ref = useRef(null);
	useEffect(() => {
		const cv = ref.current, ctx = cv.getContext('2d'), dpr = window.devicePixelRatio || 1;
		cv.width = cv.height = SIZE * dpr; ctx.scale(dpr, dpr);
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const rot = { x: 60, y: -20 }; let vx = reduce ? 0 : 0.25, vy = 0, drag = null, raf, t = 0;
		const proj = geoOrthographic().translate([SIZE / 2, SIZE / 2]).scale(SIZE / 2 - 6).clipAngle(90);
		const path = geoPath(proj, ctx);
		const draw = () => {
			t += 0.05;
			if (!drag) { rot.x += vx; rot.y += vy; vy *= 0.95; if (!reduce && Math.abs(vx) < 0.25) vx += (0.25 - vx) * 0.02; else vx *= 0.97; }
			proj.rotate([rot.x, rot.y]); ctx.clearRect(0, 0, SIZE, SIZE);
			const g = ctx.createRadialGradient(SIZE * 0.35, SIZE * 0.3, 20, SIZE / 2, SIZE / 2, SIZE / 2);
			g.addColorStop(0, '#1F7A8C'); g.addColorStop(1, '#0B1F3A');
			ctx.beginPath(); path({ type: 'Sphere' }); ctx.fillStyle = g; ctx.fill();
			ctx.beginPath(); path(grid); ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 0.6; ctx.stroke();
			ctx.beginPath(); path(land); ctx.fillStyle = '#E3ECF3'; ctx.fill();
			PINS.forEach((p) => {
				if (geoDistance([p.lon, p.lat], [-rot.x, -rot.y]) > Math.PI / 2) return;
				const [x, y] = proj([p.lon, p.lat]);
				if (p.live) { ctx.beginPath(); ctx.arc(x, y, 6 + Math.sin(t) * 3 + 3, 0, 7); ctx.fillStyle = 'rgba(245,166,35,.30)'; ctx.fill(); }
				ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fillStyle = p.live ? '#F5A623' : '#fff'; ctx.fill();
				ctx.strokeStyle = '#0B1F3A'; ctx.lineWidth = 1.5; ctx.stroke();
			});
			raf = requestAnimationFrame(draw);
		};
		draw();
		const down = (e) => { drag = { x: e.clientX, y: e.clientY }; cv.setPointerCapture(e.pointerId); };
		const move = (e) => { if (!drag) return; vx = (e.clientX - drag.x) * 0.4; vy = (drag.y - e.clientY) * 0.3;
			rot.x += vx; rot.y = Math.max(-70, Math.min(70, rot.y + vy)); drag = { x: e.clientX, y: e.clientY }; };
		const up = () => { drag = null; };
		cv.addEventListener('pointerdown', down); cv.addEventListener('pointermove', move); cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
		return () => { cancelAnimationFrame(raf); cv.removeEventListener('pointerdown', down); cv.removeEventListener('pointermove', move); cv.removeEventListener('pointerup', up); cv.removeEventListener('pointercancel', up); };
	}, []);
	return <canvas ref={ref} style={{ width: SIZE, height: SIZE, touchAction: 'none' }} role="img" aria-label="Rotating globe with expedition locations. Drag to spin."
		className="max-w-full cursor-grab rounded-full shadow-[0_0_60px_rgba(31,122,140,0.35)] active:cursor-grabbing" />;
}

export default function GlobeSection() {
	return (
		<section aria-labelledby="globe-title" className="mt-10 grid items-center gap-8 rounded-card border border-neutral-200 bg-neutral-100 p-6 md:p-8 lg:grid-cols-[auto_1fr]">
			<div className="flex flex-col items-center gap-3">
				<Globe />
				<p className="text-sm text-neutral-600">Drag to spin. <span className="inline-block h-2.5 w-2.5 rounded-full bg-live align-middle" /> Live expedition</p>
			</div>
			<div className="rounded-card border border-neutral-200 bg-white p-8 shadow-card">
				<h2 id="globe-title" className="font-serif text-3xl font-black text-ink md:text-4xl">Every expedition, on one spinning Earth</h2>
				<p className="mt-4 max-w-xl text-neutral-600">Spin the globe, pick a pin and see photos, a source-linked summary, latitude and longitude, and hear it read aloud. Live, completed and upcoming expeditions all in one place.</p>
				<ul className="mt-5 space-y-2 text-neutral-700">
					{['Click any point for images and an AI summary', 'Filter by region, year and status', 'Listen to narration in your language'].map((t) => (
						<li key={t} className="flex gap-2"><span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink" />{t}</li>))}
				</ul>
				<Link to="/globe" className="mt-7 inline-block rounded-lg bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">Explore the globe</Link>
			</div>
		</section>
	);
}