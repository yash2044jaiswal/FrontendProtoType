// DEMO-ONLY frontend authentication (no real security). Stored in sessionStorage.
const KEY = 'polaris_demo_session';
export const DEMO_USERS = {
  'sec.chief@ncpor.res.in': 'admin',
  'dr.anand.cryo@ncpor.res.in': 'reviewer',
  's.verma@ncpor.res.in': 'contributor',
  'media.cell@ncpor.res.in': 'editor',
};
export const ADMIN_ONLY = ["/admin/users", "/admin/rights", "/admin/integrations", "/admin/analytics", "/admin/audit-logs"];
export function getSession() { try { return JSON.parse(sessionStorage.getItem(KEY)); } catch { return null; } }
export function login(email) { const s = { email, role: DEMO_USERS[email] || 'contributor' }; try { sessionStorage.setItem(KEY, JSON.stringify(s)); } catch {} return s; }
export function logout() { try { sessionStorage.removeItem(KEY); } catch {} }
