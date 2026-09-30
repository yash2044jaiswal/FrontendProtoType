import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const PAGE_CSS = `
  body {
    background-color: #F6F9FC;
    color: #071c36;
    font-family: 'Inter', sans-serif;
  }
  .font-serif-merriweather {
    font-family: 'Merriweather', serif;
  }
`;

export default function AdminLoginPage() {
  // Role & Login State
  const [selectedRole, setSelectedRole] = useState('admin');
  const [email, setEmail] = useState('sec.chief@ncpor.res.in');
  const [password, setPassword] = useState('Polaris#MoES9910Arctic');
  const [showPassword, setShowPassword] = useState(false);

  // 2FA State
  const [tokenDigits, setTokenDigits] = useState(['8', '3', '9', '4', '', '']);
  const [trustWorkstation, setTrustWorkstation] = useState(true);
  const [resendTimer, setResendTimer] = useState(42);

  // Search filter states for interactive mock shells
  const [searchQueryA, setSearchQueryA] = useState('');
  const [searchQueryB, setSearchQueryB] = useState('');

  // Refs for 2FA digit inputs
  const digitRefs = useRef([]);

  const roles = [
    {
      key: 'contributor',
      id: '1',
      title: '1. Contributor',
      sub: 'Scientific Data Officer',
      icon: 'biotech',
      email: 's.verma@ncpor.res.in',
    },
    {
      key: 'reviewer',
      id: '2',
      title: '2. Scientist Reviewer',
      sub: 'Senior Cadre / PI',
      icon: 'fact_check',
      email: 'dr.anand.cryo@ncpor.res.in',
    },
    {
      key: 'editor',
      id: '3',
      title: '3. Comm Cell Editor',
      sub: 'Outreach & Media Lead',
      icon: 'campaign',
      email: 'media.cell@ncpor.res.in',
    },
    {
      key: 'admin',
      id: '4',
      title: '4. Admin',
      sub: 'Chief Systems & Security',
      icon: 'admin_panel_settings',
      email: 'sec.chief@ncpor.res.in',
    },
  ];

  const handleRoleSelect = (roleKey, roleEmail) => {
    setSelectedRole(roleKey);
    setEmail(roleEmail);
  };

  const handleDigitChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newDigits = [...tokenDigits];
    newDigits[index] = value.slice(-1);
    setTokenDigits(newDigits);

    if (value && index < 5) {
      digitRefs.current[index + 1]?.focus();
    }
  };

  const handleDigitKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !tokenDigits[index] && index > 0) {
      digitRefs.current[index - 1]?.focus();
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const frame2 = document.getElementById('frame-2-section');
    if (frame2) {
      frame2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVerify2FA = (e) => {
    e.preventDefault();
    const frame3 = document.getElementById('frame-3-section');
    if (frame3) {
      frame3.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{PAGE_CSS}</style>
      <main className="w-full max-w-[1440px] mx-auto space-y-12 p-4 md:p-8 bg-[#F6F9FC] min-h-screen text-[#071C36] antialiased">
        <header className="bg-white rounded-card p-6 md:p-8 shadow-[0_2px_12px_rgba(7,28,54,0.06)] border border-[#E2E8F0]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7EEFF] text-[#1F7A8C] font-mono text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#006448]" />
                  SECURITY CLEARANCE L4 • NIC ACCREDITED
                </span>
                <span className="text-[#41636E] text-xs font-mono tracking-wider uppercase font-medium">
                  MoES / NCPOR POLARIS PORTAL
                </span>
                <span className="bg-[#E0F2FE] text-[#0369A1] font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                  ROUTE: /admin/login
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif-merriweather font-normal text-[#071C36]">
                POLARIS - Admin Login, Two-Factor Authentication & Staff Shell Showcase
              </h1>
              <p className="text-sm md:text-base text-[#41636E]">
                National Centre for Polar and Ocean Research • Authentication Pipeline & Role-Adaptive Workspace Showcase (1440px Standard Display)
              </p>
            </div>
            <nav aria-label="Frame Anchors" className="inline-flex flex-wrap p-1.5 rounded-xl bg-[#F0F3FF] border border-[#D6E3FF] self-start lg:self-center gap-1">
              <a className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-150 bg-white text-[#1F7A8C] shadow-sm hover:text-[#165A68] flex items-center gap-1.5" href="#frame-1-section">
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Frame 1: Admin Login</span>
              </a>
              <a className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-150 text-[#41636E] hover:bg-white/80 hover:text-[#071C36] flex items-center gap-1.5" href="#frame-2-section">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Frame 2: 2FA Verification</span>
              </a>
              <a className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-150 text-[#41636E] hover:bg-white/80 hover:text-[#071C36] flex items-center gap-1.5" href="#frame-3-section">
                <span className="material-symbols-outlined text-[18px]">splitscreen</span>
                <span>Frame 3: Contributor vs Admin Shell</span>
              </a>
            </nav>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-[#41636E] gap-4">
            <div className="flex items-center gap-4">
              <span>Target Width: <strong className="text-[#071C36]">1440px Grid</strong></span>
              <span>Theme Accent: <strong className="text-[#1F7A8C]">#1F7A8C (Deep Teal)</strong></span>
              <span>Background: <strong className="text-[#071C36]">#F6F9FC</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[#006448]">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>NKN Dedicated Node: 10.42.0.12 (Live TLS 1.3)</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Frame 1 Section */}
          <section className="lg:col-span-7 bg-white rounded-card p-6 md:p-8 shadow-[0_2px_16px_rgba(7,28,54,0.06)] border border-[#E2E8F0] space-y-6" id="frame-1-section">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#E0F2FE] text-[#006070] font-mono text-xs font-bold uppercase tracking-wider">
                  Frame 1
                </span>
                <h2 className="text-lg font-serif-merriweather font-bold text-[#071C36]">
                  Admin Login Card
                </h2>
              </div>
              <span className="text-xs font-mono text-[#41636E]">ROUTE: /admin/login</span>
            </div>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E0F2FE] text-[#1F7A8C] flex items-center justify-center shadow-inner border border-[#BAE6FD]">
                <span className="material-symbols-outlined text-[36px]">ac_unit</span>
              </div>
              <h3 className="text-2xl font-serif-merriweather text-[#071C36] font-normal">
                POLARIS Staff Portal
              </h3>
              <p className="text-sm text-[#41636E] max-w-md mx-auto">
                MoES / NCPOR Institutional Administrative Access • Indian Polar Programme Arctic & Antarctic Scientific Data Repositories
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#006448] font-mono text-xs font-semibold">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                NIC Level 4 Clearance • NKN Node 10.42.0.12
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-[#41636E] uppercase tracking-wider">
                  Select Clearance Role
                </label>
                <span className="text-xs text-[#1F7A8C] font-mono">Dynamic Shell Profile</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="role-selector-group">
                {roles.map((role) => {
                  const isSelected = selectedRole === role.key;
                  return (
                    <button
                      key={role.key}
                      type="button"
                      onClick={() => handleRoleSelect(role.key, role.email)}
                      className={`role-btn text-left p-3.5 rounded-xl transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-2 border-[#1F7A8C] bg-[#E0F2FE] text-[#071C36] shadow-sm ring-2 ring-[#1F7A8C]/20'
                          : 'border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9]'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] mt-0.5 ${
                          isSelected ? 'text-[#1F7A8C]' : 'text-[#41636E]'
                        }`}
                      >
                        {role.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-xs text-[#071C36] flex items-center justify-between">
                          <span>{role.title}</span>
                          {isSelected && (
                            <span className="material-symbols-outlined text-[16px] text-[#1F7A8C]">
                              check_circle
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#41636E] truncate">{role.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <label className="block text-xs font-semibold text-[#071C36] mb-1.5" htmlFor="login-email">
                  Official NKN / NCPOR Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#41636E] text-[18px]">
                    alternate_email
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-sm text-[#071C36] focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent transition-all shadow-sm font-sans"
                    id="login-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-[#071C36]" htmlFor="login-password">
                    Password
                  </label>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#006448] bg-[#DCFCE7] px-2 py-0.5 rounded font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006448]" />
                    Hardware Token Synced
                  </span>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#41636E] text-[18px]">
                    lock
                  </span>
                  <input
                    className="w-full pl-10 pr-11 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-sm text-[#071C36] focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent transition-all shadow-sm font-sans"
                    id="login-password"
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    aria-label="Toggle password view"
                    className="absolute right-3 top-2.5 text-[#41636E] hover:text-[#071C36] p-0.5 cursor-pointer"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[19px]" id="toggle-icon">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <button
                className="w-full py-2.5 px-4 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#071C36] text-xs font-semibold border border-[#CBD5E1] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1F7A8C]">
                  badge
                </span>
                <span>Authenticate via NKN Gov SSO / DigiLocker Identity</span>
              </button>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-lg bg-[#1F7A8C] hover:bg-[#165A68] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <span>Proceed to Two-Factor Verification →</span>
              </button>
            </form>

            <div className="pt-4 border-t border-[#E2E8F0] text-center">
              <p className="text-[11px] font-mono text-[#64748B] tracking-tight uppercase">
                DPDP Act 2023 Compliant • Restricted to Authorized Indian Polar Programme Personnel
              </p>
            </div>
          </section>

          {/* Frame 2 Section */}
          <section className="lg:col-span-5 bg-white rounded-card p-6 md:p-8 shadow-[0_2px_16px_rgba(7,28,54,0.06)] border border-[#E2E8F0] space-y-6" id="frame-2-section">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#E0F2FE] text-[#006070] font-mono text-xs font-bold uppercase tracking-wider">
                  Frame 2
                </span>
                <h2 className="text-lg font-serif-merriweather font-bold text-[#071C36]">
                  2FA Verification
                </h2>
              </div>
              <span className="text-xs font-mono text-[#41636E]">ROUTE: /verify-2fa</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-[#41636E]">
                <span className="font-semibold text-[#1F7A8C]">STEP 2 OF 2</span>
                <span>Cryptographic 2FA</span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#1F7A8C] h-full w-full rounded-full" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E0F2FE] text-[#1F7A8C] flex items-center justify-center shadow-inner border border-[#BAE6FD]">
                <span className="material-symbols-outlined text-[32px]">shield_lock</span>
              </div>
              <h3 className="text-xl font-serif-merriweather text-[#071C36]">
                Cryptographic Verification
              </h3>
              <p className="text-xs text-[#41636E] leading-relaxed">
                Enter the 6-digit one-time cryptographic token generated by your MoES Gov Authenticator app or hardware token.
              </p>
            </div>

            <form className="space-y-3" onSubmit={handleVerify2FA}>
              <div className="flex justify-between items-center">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#41636E]">
                  6-Digit Authenticator Token
                </label>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#006448]">
                  <span className="w-2 h-2 rounded-full bg-[#006448] animate-pulse" />
                  Live Sync
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
                {tokenDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (digitRefs.current[idx] = el)}
                    className={`w-full h-13 py-3 text-center text-xl font-serif-merriweather font-bold rounded-lg focus:outline-none transition-all ${
                      idx === 3
                        ? 'bg-white border-2 border-[#1F7A8C] ring-2 ring-[#1F7A8C] text-[#1F7A8C] shadow-sm'
                        : 'bg-[#F8FAFC] border border-[#CBD5E1] text-[#071C36] focus:border-[#1F7A8C] focus:ring-1 focus:ring-[#1F7A8C]'
                    }`}
                    maxLength={1}
                    type="text"
                    value={digit}
                    onChange={(e) => handleDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleDigitKeyDown(idx, e)}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#006448] bg-[#F0FDF4] py-1.5 rounded-lg border border-[#BBF7D0]">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>
                  Token refreshes in <strong>{resendTimer}s</strong>
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
                <input
                  checked={trustWorkstation}
                  onChange={(e) => setTrustWorkstation(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-[#1F7A8C] focus:ring-[#1F7A8C] accent-[#1F7A8C] cursor-pointer"
                  id="trust-workstation"
                  type="checkbox"
                />
                <label className="text-xs text-[#071C36] cursor-pointer" htmlFor="trust-workstation">
                  <span className="font-semibold block text-[#071C36]">
                    Trust this NCPOR workstation for 12 hours
                  </span>
                  <span className="text-[#64748B] text-[11px] block mt-0.5">
                    Enforces encrypted session token pinned to current NIC subnet IP
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-[#1F7A8C] hover:bg-[#165A68] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Verify Code & Enter Admin Console →</span>
              </button>
            </form>

            <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
              <button
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#41636E] hover:text-[#071C36] hover:bg-[#F1F5F9] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                type="button"
                onClick={() => setResendTimer(60)}
              >
                <span className="material-symbols-outlined text-[16px]">sms</span>
                <span>Resend Code via Emergency SMS</span>
              </button>
              <button
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#1F7A8C] hover:bg-[#E0F2FE] transition-colors flex items-center justify-center gap-1.5 border border-[#BAE6FD] cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">key</span>
                <span>Use Hardware FIDO2 Security Key</span>
              </button>
            </div>
          </section>
        </div>

        {/* Frame 3 Section */}
        <section className="space-y-6 pt-6" id="frame-3-section">
          <div className="bg-white rounded-card p-6 shadow-[0_2px_12px_rgba(7,28,54,0.06)] border border-[#E2E8F0]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded bg-[#E0F2FE] text-[#006070] font-mono text-xs font-bold uppercase tracking-wider">
                    Frame 3
                  </span>
                  <h2 className="text-xl md:text-2xl font-serif-merriweather font-normal text-[#071C36]">
                    Staff Shell Showcase: Contributor vs. Admin Workspace
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-[#41636E]">
                  Demonstrates 240px white sidebar, top chrome telemetry, and role-adaptive content workspaces on #F6F9FC canvas.
                </p>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#41636E] bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-[#E2E8F0]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1F7A8C]" />
                  SIDEBAR: 240px
                </span>
                <span className="text-[#CBD5E1]">|</span>
                <span>ROLE-ADAPTIVE ACCESS CONTROL</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Variant A: Contributor Shell */}
            <div className="bg-white rounded-card shadow-[0_2px_16px_rgba(7,28,54,0.08)] border border-[#E2E8F0] overflow-hidden flex flex-col">
              <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#41636E]" />
                  <h3 className="text-sm font-semibold text-[#071C36]">
                    Variant A: Contributor Shell
                  </h3>
                </div>
                <span className="text-[11px] font-mono bg-[#E2E8F0] text-[#071C36] px-2.5 py-0.5 rounded-full font-medium">
                  6 Scoped Modules
                </span>
              </div>

              <div className="bg-white px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 flex-1 max-w-sm">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#64748B] text-[16px]">
                      search
                    </span>
                    <input
                      className="w-full pl-8 pr-8 py-1.5 text-xs bg-[#F1F5F9] rounded-lg border-none text-[#071C36] focus:outline-none"
                      placeholder="Search... ⌘K"
                      type="text"
                      value={searchQueryA}
                      onChange={(e) => setSearchQueryA(e.target.value)}
                    />
                    <span className="absolute right-2 top-1.5 px-1 py-0.5 text-[9px] font-mono bg-white rounded border border-[#CBD5E1] text-[#64748B]">
                      ⌘K
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F0FDF4] text-[#006448] border border-[#BBF7D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006448]" />
                    Maitri: -18.4°C
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                    Himadri: -6.8°C
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button aria-label="Notifications" className="relative p-1.5 text-[#64748B] hover:text-[#071C36] cursor-pointer">
                    <span className="material-symbols-outlined text-[19px]">notifications</span>
                    <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#1F7A8C] text-white text-[9px] flex items-center justify-center font-bold">
                      2
                    </span>
                  </button>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#E0F2FE] text-[#006070] font-semibold">
                    Contributor
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#1F7A8C] text-white font-bold text-xs flex items-center justify-center">
                    SV
                  </div>
                </div>
              </div>

              <div className="flex flex-1 min-h-[580px] bg-[#F6F9FC]">
                <aside className="w-[240px] bg-white border-r border-[#E2E8F0] p-3.5 flex flex-col justify-between shrink-0">
                  <div className="space-y-4">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                        Field Researcher
                      </div>
                      <div className="text-xs font-bold text-[#071C36] truncate">
                        Dr. Sneha Verma
                      </div>
                      <div className="text-[11px] text-[#41636E]">Cryosphere Division</div>
                    </div>
                    <nav className="space-y-1">
                      <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#E0F2FE] text-[#006070] font-semibold text-xs" to="/account">
                        <span className="material-symbols-outlined text-[18px]">dashboard</span>
                        <span>Dashboard</span>
                      </Link>
                      <a className="flex items-center justify-between px-3 py-2 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[18px]">folder_shared</span>
                          <span>My Submissions</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-mono font-bold">3</span>
                      </a>
                      <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs transition-colors" to="/data">
                        <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                        <span>Upload Datasets</span>
                      </Link>
                      <a className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[18px]">edit_note</span>
                        <span>Field Log Editor</span>
                      </a>
                      <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs transition-colors" to="/stories/overwintering-in-the-schirmacher-oasis">
                        <span className="material-symbols-outlined text-[18px]">article</span>
                        <span>Draft Dispatches</span>
                      </Link>
                      <a className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[18px]">help_center</span>
                        <span>Support & Docs</span>
                      </a>
                    </nav>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] space-y-1">
                    <div className="text-[10px] font-mono text-[#64748B]">BASE: HIMADRI • NY-ÅLESUND</div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#006448]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006448]" />
                      Telemetry: 4.2 MB/s
                    </div>
                  </div>
                </aside>

                <main className="flex-1 p-5 space-y-4 overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-serif-merriweather font-bold text-[#071C36]">
                        Contributor Workspace
                      </h4>
                      <p className="text-xs text-[#41636E]">
                        Scientific data uploads and pending peer review queues
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-[#1F7A8C] text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm hover:bg-[#165A68] cursor-pointer">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      <span>New Dataset</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">Submitted</div>
                      <div className="text-lg font-bold text-[#071C36] mt-0.5">24</div>
                      <div className="text-[10px] text-[#006448]">All NetCDF verified</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">In Review</div>
                      <div className="text-lg font-bold text-[#1F7A8C] mt-0.5">3</div>
                      <div className="text-[10px] text-[#92400E]">Senior Cadre PI</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">Drafts</div>
                      <div className="text-lg font-bold text-[#41636E] mt-0.5">2</div>
                      <div className="text-[10px] text-[#64748B]">Auto-saved local</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#E0F2FE] text-[#006070] font-mono text-[10px] font-bold">
                          DRAFT-ARC-104
                        </span>
                        <h5 className="text-xs font-bold text-[#071C36]">
                          Kongsfjorden Fjordic Glacial Melt Dynamics
                        </h5>
                      </div>
                      <span className="text-[10px] text-[#006448] font-mono">Synced 8m ago</span>
                    </div>
                    <p className="text-[11px] text-[#41636E] line-clamp-2">
                      CTD casts from transects 1 to 4 recorded notable salinity depletion at upper 15m. Calibrated sensor tables attached for review committee.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] border-t border-[#F1F5F9]">
                      <span className="text-[#64748B]">Author: Dr. Sneha Verma</span>
                      <a className="text-[#1F7A8C] font-semibold hover:underline" href="#" onClick={(e) => e.preventDefault()}>
                        Resume Draft →
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#071C36]">
                        Recent Submissions Status
                      </span>
                      <span className="text-[11px] text-[#1F7A8C] font-mono font-medium">
                        View All (24)
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                        <div>
                          <div className="font-medium text-[#071C36]">
                            Larsemann Hills Aerosol Mass Spectrometry
                          </div>
                          <div className="text-[10px] text-[#64748B] font-mono">
                            ID: NKN-2024-MS-091 • Bharati Station
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-semibold">
                          Under Review
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                        <div>
                          <div className="font-medium text-[#071C36]">
                            Maitri Ground-Penetrating Radar Ice Bed Survey
                          </div>
                          <div className="text-[10px] text-[#64748B] font-mono">
                            ID: NKN-2024-GPR-042 • Schirmacher Oasis
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#006448] text-[10px] font-semibold">
                          Approved
                        </span>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            {/* Variant B: Admin Shell */}
            <div className="bg-white rounded-card shadow-[0_2px_16px_rgba(7,28,54,0.08)] border border-[#E2E8F0] overflow-hidden flex flex-col">
              <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#1F7A8C]" />
                  <h3 className="text-sm font-semibold text-[#071C36]">Variant B: Admin Shell</h3>
                </div>
                <span className="text-[11px] font-mono bg-[#E0F2FE] text-[#006070] px-2.5 py-0.5 rounded-full font-bold">
                  Full 12-Module Suite
                </span>
              </div>

              <div className="bg-white px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 flex-1 max-w-sm">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#64748B] text-[16px]">
                      search
                    </span>
                    <input
                      className="w-full pl-8 pr-8 py-1.5 text-xs bg-[#F1F5F9] rounded-lg border-none text-[#071C36] focus:outline-none"
                      placeholder="Global search... ⌘K"
                      type="text"
                      value={searchQueryB}
                      onChange={(e) => setSearchQueryB(e.target.value)}
                    />
                    <span className="absolute right-2 top-1.5 px-1 py-0.5 text-[9px] font-mono bg-white rounded border border-[#CBD5E1] text-[#64748B]">
                      ⌘K
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F0FDF4] text-[#006448] border border-[#BBF7D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006448]" />
                    Maitri: -18.4°C
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                    Himadri: -6.8°C
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button aria-label="Notifications" className="relative p-1.5 text-[#64748B] hover:text-[#071C36] cursor-pointer">
                    <span className="material-symbols-outlined text-[19px]">notifications</span>
                    <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#BA1A1A] text-white text-[9px] flex items-center justify-center font-bold">
                      5
                    </span>
                  </button>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#1F7A8C] text-white font-semibold">
                    Admin
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#071C36] text-white font-bold text-xs flex items-center justify-center">
                    SC
                  </div>
                </div>
              </div>

              <div className="flex flex-1 min-h-[580px] bg-[#F6F9FC]">
                <aside className="w-[240px] bg-white border-r border-[#E2E8F0] p-3 flex flex-col justify-between shrink-0">
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-[#071C36] text-white">
                      <div className="text-[9px] font-mono text-[#94A3B8] uppercase tracking-wider">
                        Superuser Access
                      </div>
                      <div className="text-xs font-bold truncate">Sec. Chief / Gov Admin</div>
                      <div className="text-[10px] text-[#93C5FD]">Security Operations Center</div>
                    </div>
                    <nav className="space-y-0.5 max-h-[460px] overflow-y-auto pr-1">
                      <Link className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#E0F2FE] text-[#006070] font-semibold text-xs" to="/account">
                        <span className="material-symbols-outlined text-[17px]">dashboard</span>
                        <span>1. Dashboard</span>
                      </Link>
                      <Link className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" to="/expeditions/soe-01">
                        <span className="material-symbols-outlined text-[17px]">explore</span>
                        <span>2. Expedition Mgr</span>
                      </Link>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">upload_file</span>
                        <span>3. Upload</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">psychology</span>
                        <span>4. AI Processing</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">palette</span>
                        <span>5. Content Studio</span>
                      </a>
                      <a className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[17px]">fact_check</span>
                          <span>6. Review</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded-full bg-[#FEE2E2] text-[#991B1B] text-[10px] font-mono font-bold">5</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">publish</span>
                        <span>7. Publishing</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">gavel</span>
                        <span>8. Rights</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">hub</span>
                        <span>9. Integrations</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">insights</span>
                        <span>10. Analytics</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">group</span>
                        <span>11. Users</span>
                      </a>
                      <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[#41636E] hover:bg-[#F1F5F9] hover:text-[#071C36] font-medium text-xs" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[17px]">policy</span>
                        <span>12. Audit</span>
                      </a>
                    </nav>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <div className="text-[10px] font-mono text-[#006448] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006448]" />
                      NKN ENCRYPTED INTRA-NET
                    </div>
                  </div>
                </aside>

                <main className="flex-1 p-5 space-y-4 overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-serif-merriweather font-bold text-[#071C36]">
                        Administrative Oversight
                      </h4>
                      <p className="text-xs text-[#41636E]">
                        Supervisory metrics, compute cluster & review escalation status
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#DCFCE7] text-[#006448] font-mono text-[11px] font-bold">
                      SOC-LIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">Active Staff</div>
                      <div className="text-lg font-bold text-[#071C36] mt-0.5">142</div>
                      <div className="text-[10px] text-[#006448]">Maitri / Bharati / Goa</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">Review Queue</div>
                      <div className="text-lg font-bold text-[#BA1A1A] mt-0.5">5 Datasets</div>
                      <div className="text-[10px] text-[#991B1B]">SLA alert active</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-sm">
                      <div className="text-[10px] font-mono text-[#64748B] uppercase">AI Ingest Node</div>
                      <div className="text-lg font-bold text-[#1F7A8C] mt-0.5">99.8%</div>
                      <div className="text-[10px] text-[#41636E]">Param Ananta cluster</div>
                    </div>
                  </div>

                  <div className="bg-[#FEF2F2] p-3.5 rounded-xl border border-[#FECACA] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#BA1A1A] text-[20px] mt-0.5">warning</span>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[#991B1B]">
                        {"Review SLA Alert • 2 Submissions Pending > 48h"}
                      </div>
                      <p className="text-[11px] text-[#7F1D1D] mt-0.5">
                        Dr. Anand (Cryo Cadre) requires supervisory escalation for Southern Ocean Carbon Flux netCDF validation.
                      </p>
                    </div>
                    <button className="px-2.5 py-1 bg-[#BA1A1A] text-white rounded text-[11px] font-semibold hover:bg-[#991B1B] shrink-0 cursor-pointer">
                      Escalate
                    </button>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#071C36]">
                        Cluster Health & Subsystems
                      </span>
                      <span className="text-[10px] font-mono text-[#006448]">All Systems Operational</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                        <span className="text-[#071C36] font-medium">NKN 10Gbps Dedicated Backbone</span>
                        <span className="font-mono text-[11px] text-[#006448]">0.2ms latency • OK</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                        <span className="text-[#071C36] font-medium">AI Embedding Vector Pipeline (Batch #941)</span>
                        <span className="font-mono text-[11px] text-[#1F7A8C]">82% Processed</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                        <span className="text-[#071C36] font-medium">FIDO2 Hardware Key Verification Gateway</span>
                        <span className="font-mono text-[11px] text-[#006448]">Synced 100%</span>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-6 text-xs text-[#64748B] font-mono border-t border-[#CBD5E1]">
          POLARIS Institutional Administrative Portal • National Centre for Polar and Ocean Research (MoES, Govt. of India)
        </footer>
      </main>
    </>
  );
}