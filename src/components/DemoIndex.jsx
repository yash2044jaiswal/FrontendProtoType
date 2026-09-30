import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.jsx';
// Presenter helper for the SIH demo: lists every migrated screen.
export default function DemoIndex() {
  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#071c36] p-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h1 className="text-2xl mb-1" style={{ fontFamily: 'Merriweather, serif' }}>Polaris · all {ROUTES.length} screens</h1>
      <p className="text-sm text-[#3f484b] mb-6">Presenter index. Admin screens need the demo sign-in at /admin/login.</p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {ROUTES.map((r) => (
          <Link key={r.path} to={r.path} className="flex justify-between rounded-lg border border-[#bec8cb] bg-white px-4 py-2 text-sm hover:border-[#006070]">
            <span>{r.name.replace(/Page$/, '')}</span><code className="text-[#41636e]">{r.path}</code>
          </Link>
        ))}
      </div>
    </div>
  );
}
