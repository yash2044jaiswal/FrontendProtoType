import { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ROUTES, ALIASES } from './routes/routes.jsx';
import { getSession, ADMIN_ONLY } from './lib/auth';
import Bridge from './components/Bridge.jsx';
import NotFound from './components/NotFound.jsx';
import DemoIndex from './components/DemoIndex.jsx';

// Demo-only guard: /admin/* needs the demo sign-in; users/rights/analytics are admin-role only.
function Guard({ path, children }) {
  const loc = useLocation();
  const s = getSession();
  if (!s) return <Navigate to="/admin/login" replace state={{ from: loc.pathname }} />;
  if (ADMIN_ONLY.includes(path) && s.role !== 'admin') return <Navigate to="/admin" replace />;
  return children;
}

export default function App() {
  const byPath = Object.fromEntries(ROUTES.map((r) => [r.path, r]));
  const render = (r, path) => (r.admin ? <Guard path={path}><r.Component /></Guard> : <r.Component />);
  return (
    <>
      <Bridge />
      <Suspense fallback={<div className="min-h-screen" style={{ background: '#f9f9ff' }} />}>
        <Routes>
          {ROUTES.map((r) => <Route key={r.path} path={r.path} element={render(r, r.path)} />)}
          {Object.entries(ALIASES).map(([alias, target]) => <Route key={alias} path={alias} element={render(byPath[target], alias)} />)}
          <Route path="/demo-index" element={<DemoIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
