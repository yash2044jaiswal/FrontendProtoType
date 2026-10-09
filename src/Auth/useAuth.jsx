import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const readUser = () => {
  try { return JSON.parse(sessionStorage.getItem('polaris.user')); } catch { return null; }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser());

  // Demo mode: any email + chosen role. Replace with your real API call later.
  const login = (email, role = 'user') => {
    const u = { name: email.split('@')[0], email, role };
    setUser(u);
    try { sessionStorage.setItem('polaris.user', JSON.stringify(u)); } catch { /* ignore */ }
  };

  const logout = () => {
    setUser(null);
    try { sessionStorage.removeItem('polaris.user'); } catch { /* ignore */ }
  };

  const value = { user, role: user?.role || 'guest', login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
};