import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-[#f9f9ff] px-6 text-center text-[#071c36]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <span className="material-symbols-outlined text-[56px] text-[#1f7a8c]">
        ac_unit
      </span>

      <h1
        className="mt-4 text-3xl font-bold"
        style={{ fontFamily: "Merriweather, serif" }}
      >
        404 · Page not found
      </h1>

      <p className="mt-2 text-[#3f484b]">
        This address is not part of the Polaris portal.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-lg bg-[#006070] px-5 py-2.5 font-semibold text-white transition-colors duration-200 hover:bg-[#004c59]"
        >
          Home
        </Link>

        <Link
          to="/demo-index"
          className="rounded-lg border border-[#bec8cb] px-5 py-2.5 transition-colors duration-200 hover:bg-[#e8edf0]"
        >
          All 43 screens
        </Link>
      </div>
    </div>
  );
}