/* global React */
const { useState } = React;

/* ─────────── Icon set (inline feather-style) ─────────── */
const Icon = ({ name, size = 20, stroke = 2 }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true"
  };
  switch (name) {
    case "check":   return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case "clock":   return <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case "shield":  return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "truck":   return <svg {...props}><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/></svg>;
    case "home":    return <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
    case "sofa":    return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
    case "fridge":  return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
    case "garage":  return <svg {...props}><path d="M3 3h18v4H3zM3 7h18v14H3z"/><path d="M3 7l3 4h12l3-4"/></svg>;
    case "debris":  return <svg {...props}><path d="M12 22V12m0 0L9 7m3 5l3-5M5 22V12m0 0L2 7m3 5l3-5M19 22V12m0 0l-3-5m3 5l3-5"/></svg>;
    case "property":return <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><rect x="9" y="12" width="6" height="10"/><line x1="3" y1="9" x2="21" y2="9"/></svg>;
    case "dollar":  return <svg {...props}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>;
    case "users":   return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
    case "shieldCheck": return <svg {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
    case "refresh": return <svg {...props}><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>;
    case "msg":     return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
    case "phone":   return <svg {...props}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.13 1.01.37 2 .72 2.95a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.13-1.13a2 2 0 012.11-.45c.95.35 1.94.59 2.95.72A2 2 0 0122 14.92v2z"/></svg>;
    case "mail":    return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
    case "file":    return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
    case "pin":     return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    default:        return null;
  }
};

/* ─────────── Logo ─────────── */
const Logo = ({ light }) => (
  <a href="#" className="logo" aria-label="Lavish Junk Removal — Home" onClick={(e) => e.preventDefault()}>
    <span className="logo-mark">Lavish</span>
    <span className="logo-sub" style={light ? { color: "#d0d0d8" } : null}>Junk Removal</span>
  </a>
);

window.Icon = Icon;
window.Logo = Logo;
