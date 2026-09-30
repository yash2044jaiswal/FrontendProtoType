import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login, logout } from '../lib/auth';

// Exposes navigation/demo-auth helpers to the migrated screens' inline handlers.
export default function Bridge() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    window.__polaris = {
      go: (to) => navigate(to),
      login: () => { const el = document.getElementById('login-email'); login(el ? el.value.trim() : ''); navigate('/admin'); },
      logout: () => { logout(); navigate('/admin/login'); },
    };
    return () => { delete window.__polaris; };
  }, [navigate]);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
