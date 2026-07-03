import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE = import.meta.env.VITE_SUPABASE_SERVICE_KEY;
const WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER || "56912345678";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE);

const hashPassword = async (pw) => {
  const enc = new TextEncoder().encode(pw);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
};
const fmtPuntos = (n) => Number(n||0).toLocaleString("es-CL");
const fmtPeso = (n) => `$${Number(n||0).toLocaleString("es-CL")}`;

// ── LOGO ─────────────────────────────────────────────────────
const LogoSVG = ({ size = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width={size} height={size}>
    <defs>
      <radialGradient id="bgC" cx="40%" cy="35%" r="65%"><stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#f0faf3"/></radialGradient>
      <linearGradient id="cG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#52e07c"/><stop offset="50%" stopColor="#22c55e"/><stop offset="100%" stopColor="#15803d"/></linearGradient>
      <linearGradient id="cDG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1ea550"/><stop offset="100%" stopColor="#14532d"/></linearGradient>
      <linearGradient id="lL" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#86efac"/><stop offset="45%" stopColor="#22c55e"/><stop offset="100%" stopColor="#14532d"/></linearGradient>
      <linearGradient id="lR" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#a7f3c4"/><stop offset="45%" stopColor="#16a34a"/><stop offset="100%" stopColor="#14532d"/></linearGradient>
      <linearGradient id="lT" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#bbf7d0"/><stop offset="100%" stopColor="#16a34a"/></linearGradient>
      <linearGradient id="sh" x1="10%" y1="0%" x2="60%" y2="80%"><stop offset="0%" stopColor="#fff" stopOpacity="0.55"/><stop offset="100%" stopColor="#fff" stopOpacity="0"/></linearGradient>
      <linearGradient id="rA" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22c55e" stopOpacity="0.7"/><stop offset="40%" stopColor="#86efac" stopOpacity="0.3"/><stop offset="100%" stopColor="#15803d" stopOpacity="0.6"/></linearGradient>
      <linearGradient id="lnG" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#22c55e" stopOpacity="0"/><stop offset="30%" stopColor="#22c55e" stopOpacity="0.6"/><stop offset="70%" stopColor="#22c55e" stopOpacity="0.6"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0"/></linearGradient>
      <filter id="lG" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="cS" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="7" floodColor="#15803d" floodOpacity="0.2"/></filter>
      <filter id="wF"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#14532d" floodOpacity="0.18"/></filter>
      <filter id="tF"><feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#14532d" floodOpacity="0.12"/></filter>
      <filter id="circF" x="-5%" y="-5%" width="110%" height="110%"><feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#15803d" floodOpacity="0.14"/></filter>
      <clipPath id="inn"><circle cx="250" cy="250" r="232"/></clipPath>
    </defs>
    <g filter="url(#circF)"><circle cx="250" cy="250" r="240" fill="url(#bgC)"/></g>
    <circle cx="250" cy="250" r="240" fill="none" stroke="#dcfce7" strokeWidth="4"/>
    <circle cx="250" cy="250" r="235" fill="none" stroke="url(#rA)" strokeWidth="2"/>
    <g clipPath="url(#inn)">
      <circle cx="200" cy="180" r="180" fill="#f0fdf4" opacity="0.45"/>
      <g><rect x="30" y="132" width="58" height="9.5" rx="4.75" fill="url(#cG)"/><rect x="43" y="152" width="42" height="8" rx="4" fill="url(#cG)" opacity="0.65"/><rect x="56" y="170" width="28" height="6.5" rx="3.25" fill="url(#cG)" opacity="0.38"/></g>
      <g filter="url(#cS)">
        <line x1="106" y1="118" x2="366" y2="118" stroke="url(#cG)" strokeWidth="16" strokeLinecap="round"/>
        <line x1="106" y1="118" x2="106" y2="146" stroke="url(#cG)" strokeWidth="16" strokeLinecap="round"/>
        <path d="M106 146 L128 228 L358 228 L378 146" fill="none" stroke="url(#cG)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="128" y1="228" x2="358" y2="228" stroke="url(#cDG)" strokeWidth="14" strokeLinecap="round"/>
        <line x1="148" y1="228" x2="139" y2="256" stroke="url(#cDG)" strokeWidth="13" strokeLinecap="round"/>
        <line x1="336" y1="228" x2="346" y2="256" stroke="url(#cDG)" strokeWidth="13" strokeLinecap="round"/>
        <g filter="url(#wF)"><circle cx="151" cy="276" r="21" fill="white" stroke="url(#cDG)" strokeWidth="11"/><circle cx="151" cy="276" r="9" fill="none" stroke="url(#cG)" strokeWidth="2.5" opacity="0.5"/><circle cx="151" cy="276" r="4.5" fill="url(#cG)"/></g>
        <g filter="url(#wF)"><circle cx="325" cy="276" r="21" fill="white" stroke="url(#cDG)" strokeWidth="11"/><circle cx="325" cy="276" r="9" fill="none" stroke="url(#cG)" strokeWidth="2.5" opacity="0.5"/><circle cx="325" cy="276" r="4.5" fill="url(#cG)"/></g>
      </g>
      <line x1="250" y1="186" x2="250" y2="118" stroke="#16a34a" strokeWidth="5.5" strokeLinecap="round"/>
      <g filter="url(#lG)">
        <path d="M250 184 C236 155 204 122 160 112 C174 127 198 144 213 168 C226 186 242 192 250 184 Z" fill="url(#lL)"/>
        <path d="M250 184 C236 155 204 122 160 112 C174 127 198 144 213 168 C226 186 242 192 250 184 Z" fill="url(#sh)"/>
        <path d="M250 184 C226 160 196 132 162 114" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
      <g filter="url(#lG)">
        <path d="M250 184 C264 152 300 118 346 106 C330 122 306 140 292 164 C276 184 260 192 250 184 Z" fill="url(#lR)"/>
        <path d="M250 184 C264 152 300 118 346 106 C330 122 306 140 292 164 C276 184 260 192 250 184 Z" fill="url(#sh)"/>
        <path d="M250 184 C274 158 306 126 344 108" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
      <g filter="url(#lG)" transform="translate(306,64) rotate(-26)">
        <path d="M0 38 C-4 18 10 1 32 0 C22 10 12 22 7 38 Z" fill="url(#lT)"/>
        <path d="M0 38 C-4 18 10 1 32 0 C22 10 12 22 7 38 Z" fill="url(#sh)"/>
      </g>
      <line x1="80" y1="306" x2="420" y2="306" stroke="url(#lnG)" strokeWidth="1.2"/>
      <text x="250" y="330" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#16a34a" textAnchor="middle" letterSpacing="6" opacity="0.75">MINIMARKET</text>
      <text x="250" y="392" fontFamily="Arial Black,sans-serif" fontSize="76" fontWeight="900" fill="#14532d" textAnchor="middle" letterSpacing="4" filter="url(#tF)">JAVIVI</text>
      <rect x="112" y="400" width="276" height="3" rx="1.5" fill="url(#lnG)" opacity="0.9"/>
      <text x="250" y="426" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="600" fill="#15803d" textAnchor="middle" letterSpacing="1.8">Abarrotes · Frutas &amp; Verduras</text>
    </g>
  </svg>
);

// ── CSS ───────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
  body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fff; color: #1a1a1a; }
  button { cursor: pointer; border: none; outline: none; font-family: inherit; }
  input, textarea, select { font-family: inherit; outline: none; }
  a { text-decoration: none; color: inherit; }

  /* ── NAV ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: 60px; display: flex; align-items: center; justify-content: space-between;
    padding: 0 32px;
    background: rgba(255,255,255,0.85);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .nav-brand { display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .nav-brand-name { font-size: 16px; font-weight: 600; color: #0a2e1e; letter-spacing: -0.3px; }
  .nav-brand-sub { font-size: 10px; font-weight: 500; color: #16a34a; letter-spacing: 1.5px; text-transform: uppercase; }
  .nav-links { display: flex; align-items: center; gap: 2px; }
  .nav-link { padding: 6px 14px; font-size: 13px; font-weight: 500; color: #666; border-radius: 8px; transition: all 0.15s; background: none; }
  .nav-link:hover { color: #0a2e1e; background: #f5f5f5; }
  .nav-admin-btn {
    width: 34px; height: 34px; border-radius: 8px; background: #f5f5f5;
    display: flex; align-items: center; justify-content: center;
    color: #666; font-size: 16px; transition: all 0.15s; position: relative;
  }
  .nav-admin-btn:hover { background: #0a2e1e; color: white; }
  .nav-admin-btn:hover .tooltip { opacity: 1; pointer-events: auto; }
  .tooltip {
    position: absolute; top: calc(100% + 8px); right: 0;
    background: #1a1a1a; color: white; font-size: 11px; font-weight: 500;
    padding: 5px 10px; border-radius: 6px; white-space: nowrap;
    opacity: 0; pointer-events: none; transition: opacity 0.15s;
  }
  .tooltip::before { content:''; position:absolute; bottom:100%; right:10px; border:5px solid transparent; border-bottom-color:#1a1a1a; }

  /* ── TICKER ── */
  .ticker-wrap {
    background: #0a2e1e; color: #4ade80;
    font-size: 12px; font-weight: 600; letter-spacing: 0.5px;
    overflow: hidden; white-space: nowrap; height: 32px;
    display: flex; align-items: center;
    border-bottom: 1px solid rgba(74,222,128,0.15);
  }
  .ticker-inner {
    display: inline-flex; gap: 0;
    animation: ticker 20s linear infinite;
  }
  .ticker-inner:hover { animation-play-state: paused; }
  @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .ticker-item { padding: 0 32px; display: inline-flex; align-items: center; gap: 8px; }
  .ticker-sep { color: rgba(74,222,128,0.3); }
  .hero {
    padding: 140px 24px 100px;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
  }
  .hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://mzpdgiefwnvviyvslbff.supabase.co/storage/v1/object/public/productos/hero-bg.jpg');
    background-size: cover; background-position: center;
  }
  .hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: rgba(255,255,255,0.78);
  }
  .hero-content { position: relative; z-index: 2; }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 600; color: #16a34a;
    letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 20px;
  }
  .hero-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: #16a34a; }
  .hero h1 {
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    font-weight: 700; color: #0a0a0a; line-height: 1.05;
    letter-spacing: -2px; max-width: 700px; margin: 0 auto 18px;
  }
  .hero h1 span { color: #16a34a; }
  .hero-sub {
    font-size: 17px; color: #444; max-width: 440px;
    margin: 0 auto 40px; line-height: 1.6; font-weight: 400;
  }
  .hero-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px; }
  .btn-primary {
    padding: 12px 24px; background: #0a2e1e; color: white;
    border-radius: 10px; font-size: 14px; font-weight: 600;
    transition: all 0.2s; display: inline-flex; align-items: center; gap: 7px;
  }
  .btn-primary:hover { background: #16a34a; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(10,46,30,0.25); }
  .btn-secondary {
    padding: 12px 24px; background: rgba(0,0,0,0.07); color: #1a1a1a;
    border-radius: 10px; font-size: 14px; font-weight: 600;
    border: 1px solid rgba(0,0,0,0.12); transition: all 0.2s;
  }
  .btn-secondary:hover { background: rgba(0,0,0,0.13); }
  .hero-stats {
    display: flex; gap: 0; justify-content: center;
    border: 1px solid rgba(0,0,0,0.1); border-radius: 14px;
    overflow: hidden; max-width: 480px; margin: 0 auto;
    background: rgba(255,255,255,0.75); backdrop-filter: blur(10px);
  }
  .hero-stat { flex: 1; padding: 18px 24px; text-align: center; border-right: 1px solid rgba(0,0,0,0.08); }
  .hero-stat:last-child { border-right: none; }
  .hero-stat-num { font-size: 24px; font-weight: 700; color: #0a2e1e; letter-spacing: -0.5px; }
  .hero-stat-lbl { font-size: 11px; color: #888; font-weight: 500; margin-top: 2px; }

  /* ── SECCIÓN OFERTAS ── */
  .ofertas-section { background: #0a2e1e; padding: 32px 24px; }
  .ofertas-inner { max-width: 1100px; margin: 0 auto; }
  .ofertas-hd { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .ofertas-title { font-size: 15px; font-weight: 700; color: white; }
  .ofertas-badge { background: #dc2626; color: white; font-size: 10px; font-weight: 800; padding: 3px 9px; border-radius: 5px; letter-spacing: 1px; text-transform: uppercase; }
  .ofertas-count { font-size: 12px; color: rgba(255,255,255,0.4); }
  .ofertas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px,1fr)); gap: 12px; }
  .oferta-card {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px; overflow: hidden; transition: all 0.2s;
  }
  .oferta-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); border-color: rgba(74,222,128,0.3); }
  .oferta-img { width: 100%; aspect-ratio: 1/1; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .oferta-img img { width:100%; height:100%; object-fit:contain; padding:12px; transition: transform 0.3s; }
  .oferta-card:hover .oferta-img img { transform: scale(1.05); }
  .oferta-body { padding: 10px 12px 12px; }
  .oferta-name { font-size: 12.5px; font-weight: 600; color: white; margin-bottom: 8px; line-height: 1.3; }
  .oferta-prices { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }
  .oferta-old { font-size: 11px; color: rgba(255,255,255,0.35); text-decoration: line-through; }
  .oferta-new { font-size: 16px; font-weight: 800; color: #4ade80; }
  .oferta-save { margin-top: 5px; font-size: 10px; font-weight: 700; color: #4ade80; background: rgba(74,222,128,0.12); padding: 2px 7px; border-radius: 4px; display: inline-block; }

  /* ── SECCIÓN ── */
  .section { padding: 80px 24px; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-hd { margin-bottom: 48px; }
  .section-hd h2 { font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 700; color: #0a0a0a; letter-spacing: -0.5px; }
  .section-hd p { font-size: 15px; color: #888; margin-top: 6px; }

  /* ── TABS CATEGORÍAS — estilo Notion/Linear ── */
  .cat-tabs-wrap { border-bottom: 1px solid #e8e8e8; margin-bottom: 40px; }
  .cat-tabs { display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; }
  .cat-tabs::-webkit-scrollbar { display: none; }
  .cat-tab {
    padding: 10px 18px; font-size: 13.5px; font-weight: 500; color: #888;
    border-bottom: 2px solid transparent; margin-bottom: -1px;
    white-space: nowrap; transition: all 0.15s; background: none;
    display: flex; align-items: center; gap: 6px;
  }
  .cat-tab:hover { color: #0a0a0a; }
  .cat-tab.on { color: #0a2e1e; border-bottom-color: #0a2e1e; font-weight: 600; }
  .cat-tab-count { font-size: 11px; background: #f0f0f0; color: #888; padding: 1px 6px; border-radius: 4px; font-weight: 500; }
  .cat-tab.on .cat-tab-count { background: #dcfce7; color: #16a34a; }

  /* ── SEARCH ── */
  .search-bar {
    display: flex; align-items: center; gap: 10px;
    background: #f7f7f7; border: 1px solid #e8e8e8; border-radius: 10px;
    padding: 10px 16px; max-width: 360px; margin-bottom: 32px;
    transition: all 0.15s;
  }
  .search-bar:focus-within { background: #fff; border-color: #0a2e1e; box-shadow: 0 0 0 3px rgba(10,46,30,0.06); }
  .search-bar input { border: none; background: none; font-size: 14px; color: #1a1a1a; width: 100%; }
  .search-bar input::placeholder { color: #aaa; }
  .search-bar svg { flex-shrink: 0; }

  /* ── GRID PRODUCTOS ── */
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 20px; }
  .prod-card {
    background: #fff; border-radius: 14px; overflow: hidden;
    border: 1px solid #e8e8e8; transition: all 0.2s; position: relative;
  }
  .prod-card:hover { border-color: #d1d1d1; box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }

  /* Imagen 60% — fondo gris suave */
  .prod-img {
    width: 100%; aspect-ratio: 4/3; overflow: hidden;
    background: #f5f5f5;
    display: flex; align-items: center; justify-content: center;
  }
  .prod-img img { width:100%; height:100%; object-fit:contain; padding:20px; transition: transform 0.3s; }
  .prod-card:hover .prod-img img { transform: scale(1.04); }
  .prod-placeholder { font-size: 56px; opacity: 0.2; }
  .dest-pill {
    position: absolute; top: 10px; left: 10px;
    background: #0a2e1e; color: #4ade80;
    font-size: 9px; font-weight: 700; padding: 3px 9px;
    border-radius: 4px; letter-spacing: 1px; z-index: 2;
    text-transform: uppercase;
  }

  /* Info */
  .prod-body { padding: 14px 16px 16px; }
  .prod-cat { font-size: 10px; font-weight: 600; color: #16a34a; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 4px; }
  .prod-name { font-size: 14px; font-weight: 600; color: #0a0a0a; line-height: 1.35; margin-bottom: 4px; }
  .prod-desc { font-size: 12.5px; color: #999; line-height: 1.55; }
  .prod-desc-short { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .prod-toggle { background: none; border: none; color: #16a34a; font-size: 12px; font-weight: 600; cursor: pointer; padding: 4px 0 8px; display: block; }
  .prod-toggle:hover { color: #0a2e1e; }

  /* Badge puntos — minimalista */
  .pts-wrap { display: flex; align-items: center; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid #f0f0f0; }
  .pts-icon { width: 24px; height: 24px; border-radius: 50%; background: linear-gradient(135deg,#fbbf24,#f59e0b); display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; }
  .pts-num { font-size: 17px; font-weight: 800; color: #0a0a0a; letter-spacing: -0.5px; }
  .pts-lbl { font-size: 11px; color: #aaa; font-weight: 500; }

  .empty-state { text-align: center; padding: 80px 24px; color: #bbb; grid-column: 1/-1; }
  .empty-state p { font-size: 15px; margin-top: 12px; }

  /* ── CÓMO FUNCIONA ── */
  .how-section { background: #fafaf9; border-top: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; }
  .how-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: #e8e8e8; border: 1px solid #e8e8e8; border-radius: 14px; overflow: hidden; }
  .how-item { background: #fafaf9; padding: 32px 28px; transition: background 0.15s; }
  .how-item:hover { background: #fff; }
  .how-num { font-size: 11px; font-weight: 700; color: #16a34a; letter-spacing: 2px; margin-bottom: 12px; }
  .how-icon { font-size: 24px; margin-bottom: 10px; }
  .how-title { font-size: 15px; font-weight: 600; color: #0a0a0a; margin-bottom: 6px; }
  .how-desc { font-size: 13px; color: #888; line-height: 1.65; }

  /* ── CONTACTO ── */
  .contact-section { background: #fff; border-top: 1px solid #f0f0f0; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; max-width: 900px; margin: 0 auto; }
  .contact-info h3 { font-size: 20px; font-weight: 700; color: #0a0a0a; margin-bottom: 10px; letter-spacing: -0.3px; }
  .contact-info p { font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 28px; }
  .c-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 14px; color: #444; }
  .c-icon-wrap { width: 32px; height: 32px; border-radius: 8px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
  .c-note { margin-top: 24px; padding: 16px 18px; background: #fafaf9; border-radius: 10px; border: 1px solid #e8e8e8; font-size: 13px; color: #555; line-height: 1.65; }
  .form-group { margin-bottom: 14px; }
  .form-label { display: block; font-size: 11px; font-weight: 600; color: #555; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 6px; }
  .form-input { width:100%; padding:10px 14px; border:1px solid #e0e0e0; border-radius:9px; font-size:14px; background:#fff; color:#1a1a1a; transition:all 0.15s; }
  .form-input:focus { border-color:#0a2e1e; box-shadow:0 0 0 3px rgba(10,46,30,0.06); }
  .form-textarea { width:100%; padding:10px 14px; border:1px solid #e0e0e0; border-radius:9px; font-size:14px; resize:vertical; min-height:100px; background:#fff; color:#1a1a1a; transition:all 0.15s; }
  .form-textarea:focus { border-color:#0a2e1e; box-shadow:0 0 0 3px rgba(10,46,30,0.06); }
  .btn-submit { width:100%; padding:12px; background:#0a2e1e; color:white; border-radius:9px; font-size:14px; font-weight:600; transition:all 0.2s; }
  .btn-submit:hover { background:#16a34a; box-shadow:0 4px 16px rgba(10,46,30,0.2); }
  .btn-submit:disabled { opacity:0.5; cursor:not-allowed; }

  /* ── WA FLOAT ── */
  .wa-float {
    position: fixed; bottom: 24px; right: 24px; z-index: 200;
    width: 52px; height: 52px; background: #25d366; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(37,211,102,0.4); transition: all 0.2s;
  }
  .wa-float:hover { transform: scale(1.08); box-shadow: 0 6px 24px rgba(37,211,102,0.55); }

  /* ── TOAST ── */
  .toast {
    position: fixed; bottom: 88px; left: 50%; transform: translateX(-50%);
    background: #1a1a1a; color: white; padding: 11px 20px;
    border-radius: 10px; font-size: 13.5px; font-weight: 500;
    z-index: 500; box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    animation: tin 0.25s ease; white-space: nowrap;
  }
  @keyframes tin { from{opacity:0;transform:translateX(-50%) translateY(6px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }

  /* ── FOOTER ── */
  footer {
    border-top: 1px solid #f0f0f0;
    padding: 32px 40px;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px; background: #fff;
  }
  .foot-brand { font-size: 14px; font-weight: 600; color: #0a2e1e; }
  .foot-copy { font-size: 12px; color: #aaa; margin-top: 2px; }
  .foot-copy a { color: #16a34a; font-weight: 600; }
  .foot-links { display: flex; gap: 20px; }
  .foot-links a { font-size: 13px; color: #888; cursor: pointer; transition: color 0.15s; }
  .foot-links a:hover { color: #0a2e1e; }

  /* ── ADMIN ── */
  .admin-layout { display: flex; min-height: 100vh; padding-top: 60px; }
  .admin-nav {
    width: 220px; background: #fff; border-right: 1px solid #e8e8e8;
    position: fixed; top: 60px; left: 0; bottom: 0; overflow-y: auto;
    padding: 16px 0; z-index: 90;
  }
  .admin-nav-head { padding: 8px 16px 16px; border-bottom: 1px solid #f0f0f0; margin-bottom: 8px; }
  .admin-nav-title { font-size: 13px; font-weight: 700; color: #0a0a0a; }
  .admin-nav-user { font-size: 11px; color: #aaa; margin-top: 1px; }
  .a-item {
    display: flex; align-items: center; gap: 8px; padding: 8px 16px;
    font-size: 13.5px; font-weight: 500; color: #666;
    cursor: pointer; transition: all 0.12s; border-radius: 0;
    border-left: 2px solid transparent;
  }
  .a-item:hover { background: #fafafa; color: #0a0a0a; }
  .a-item.on { background: #f0fdf4; color: #0a2e1e; border-left-color: #16a34a; font-weight: 600; }
  .a-item span:first-child { font-size: 15px; width: 20px; text-align: center; }
  .a-divider { height: 1px; background: #f0f0f0; margin: 8px 0; }
  .a-item-danger { color: #dc2626 !important; }
  .a-item-danger:hover { background: #fef2f2 !important; }
  .admin-main { margin-left: 220px; flex: 1; padding: 36px 32px; background: #fafaf9; min-height: 100vh; }
  .admin-page-title { font-size: 22px; font-weight: 700; color: #0a0a0a; margin-bottom: 28px; letter-spacing: -0.5px; }
  .stats-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(160px,1fr)); gap: 14px; margin-bottom: 28px; }
  .stat-card { background: #fff; border-radius: 12px; padding: 20px; border: 1px solid #e8e8e8; }
  .stat-card-ic { font-size: 20px; margin-bottom: 8px; }
  .stat-card-val { font-size: 28px; font-weight: 800; color: #0a0a0a; letter-spacing: -1px; }
  .stat-card-lbl { font-size: 12px; color: #aaa; font-weight: 500; margin-top: 2px; }
  .panel { background: #fff; border-radius: 12px; border: 1px solid #e8e8e8; overflow: hidden; margin-bottom: 20px; }
  .panel-hd { padding: 14px 20px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between; }
  .panel-title { font-size: 14px; font-weight: 600; color: #0a0a0a; }
  .panel-bd { padding: 20px; }
  .tbl { width: 100%; border-collapse: collapse; font-size: 13.5px; overflow-x: auto; display: block; }
  .tbl th { padding: 10px 14px; text-align: left; font-weight: 600; color: #aaa; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #f0f0f0; white-space: nowrap; }
  .tbl td { padding: 12px 14px; border-top: 1px solid #f7f7f7; color: #333; vertical-align: middle; }
  .tbl tr:hover td { background: #fafafa; }
  .b-pill { display: inline-block; padding: 3px 9px; border-radius: 5px; font-size: 11px; font-weight: 600; }
  .b-green { background: #dcfce7; color: #16a34a; }
  .b-red { background: #fee2e2; color: #dc2626; }
  .b-gray { background: #f3f4f6; color: #6b7280; }
  .btn-xs { padding: 5px 11px; border-radius: 7px; font-size: 12px; font-weight: 600; transition: all 0.15s; }
  .btn-xs-p { background: #0a2e1e; color: white; }
  .btn-xs-p:hover { background: #16a34a; }
  .btn-xs-d { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
  .btn-xs-d:hover { background: #fee2e2; }
  .two-col { display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px; }
  .two-eq { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .admin-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  @media(max-width:900px){
    .how-grid{grid-template-columns:1fr 1fr}
    .contact-grid{grid-template-columns:1fr}
    .two-col,.two-eq{grid-template-columns:1fr}
    .admin-nav{width:100%;position:relative;top:0}
    .admin-layout{flex-direction:column}
    .admin-main{margin-left:0;padding:16px}
    .carrusel-slide{padding:20px 48px 24px 20px;gap:16px}
    .carrusel-save{display:none}
    .carrusel-wa{display:none}
  }
  @media(max-width:600px){
    .nav{padding:0 16px}
    .hero h1{font-size:2.4rem;letter-spacing:-1px}
    .how-grid{grid-template-columns:1fr}
    footer{flex-direction:column;text-align:center}
    .products-grid{grid-template-columns:1fr 1fr}
  }
`;

// ── TOAST ────────────────────────────────────────────────────
function Toast({ msg, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, []);
  return <div className="toast">{msg}</div>;
}

// ── WA FLOAT ─────────────────────────────────────────────────
function WAFloat() {
  return (
    <a className="wa-float" href={`https://wa.me/${WHATSAPP}?text=Hola%20Minimarket%20Javivi`} target="_blank" rel="noreferrer" title="WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

// ── CARRUSEL ─────────────────────────────────────────────────
function OfertasGrid({ promos }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);
  const visible = 4;
  const max = Math.max(0, promos.length - visible);

  const go = (dir) => {
    clearInterval(timer.current);
    setIdx(i => Math.min(Math.max(i + dir, 0), max));
    timer.current = setInterval(() => setIdx(i => i >= max ? 0 : i + 1), 4000);
  };

  useEffect(() => {
    if (promos.length <= visible) return;
    timer.current = setInterval(() => setIdx(i => i >= max ? 0 : i + 1), 4000);
    return () => clearInterval(timer.current);
  }, [promos.length, max]);

  if (!promos.length) return null;

  return (
    <div className="ofertas-section">
      <div className="ofertas-inner">
        <div className="ofertas-hd">
          <span className="ofertas-title">Productos en oferta</span>
          <span className="ofertas-badge">OFERTAS</span>
          <span className="ofertas-count">{promos.length} {promos.length === 1 ? "producto" : "productos"}</span>
          {promos.length > visible && (
            <div style={{marginLeft:"auto",display:"flex",gap:6}}>
              <button onClick={()=>go(-1)} disabled={idx===0} style={{width:28,height:28,borderRadius:"50%",background:idx===0?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.15)",color:"white",cursor:idx===0?"default":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}>‹</button>
              <button onClick={()=>go(1)} disabled={idx>=max} style={{width:28,height:28,borderRadius:"50%",background:idx>=max?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.15)",color:"white",cursor:idx>=max?"default":"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}>›</button>
            </div>
          )}
        </div>
        <div style={{overflow:"hidden"}}>
          <div style={{display:"flex",gap:12,transition:"transform 0.4s cubic-bezier(0.4,0,0.2,1)",transform:`translateX(calc(-${idx} * (100% / ${visible} + 3px)))`}}>
            {promos.map(p => (
              <div key={p.id} style={{minWidth:`calc(${100/visible}% - ${12*(visible-1)/visible}px)`,flexShrink:0}}>
                <div className="oferta-card">
                  <div className="oferta-img">
                    {p.foto_url
                      ? <img src={p.foto_url} alt={p.nombre} onError={e=>e.target.style.display="none"}/>
                      : <span style={{fontSize:32,opacity:0.3}}>🔥</span>
                    }
                  </div>
                  <div className="oferta-body">
                    <div className="oferta-name">{p.nombre}</div>
                    <div className="oferta-prices">
                      {p.precio_original && <span className="oferta-old">{fmtPeso(p.precio_original)}</span>}
                      <span className="oferta-new">{fmtPeso(p.precio_oferta)}</span>
                    </div>
                    {p.precio_original && (
                      <div className="oferta-save">Ahorras {fmtPeso(p.precio_original - p.precio_oferta)}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {promos.length > visible && (
          <div style={{display:"flex",justifyContent:"center",gap:4,marginTop:14}}>
            {Array.from({length:max+1}).map((_,i)=>(
              <div key={i} onClick={()=>{clearInterval(timer.current);setIdx(i);}} style={{width:i===idx?16:5,height:5,borderRadius:100,background:i===idx?"white":"rgba(255,255,255,0.25)",cursor:"pointer",transition:"all 0.3s"}}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── LANDING ───────────────────────────────────────────────────
function Landing({ productos, categorias, promos, wa, direccion }) {
  const [catSel, setCatSel] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState({});
  const [form, setForm] = useState({ nombre:"", email:"", tipo:"consulta", mensaje:"" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const catalogRef = useRef(null);
  const contactRef = useRef(null);

  const toggle = (id) => setExpanded(p => ({...p,[id]:!p[id]}));

  const filtered = productos.filter(p =>
    (catSel === "all" || p.categoria_id === catSel) &&
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const sendContact = async () => {
    if (!form.nombre.trim() || !form.mensaje.trim()) { setToast("Completa tu nombre y mensaje"); return; }
    setSending(true);
    await supabase.from("contacto_mensajes").insert({ nombre_contacto:form.nombre, email_contacto:form.email, tipo:form.tipo, mensaje:form.mensaje });
    setForm({ nombre:"", email:"", tipo:"consulta", mensaje:"" });
    setToast("Mensaje enviado. Te responderemos pronto.");
    setSending(false);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"/>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <div className="hero-eyebrow"><div className="hero-eyebrow-dot"/>Sistema de puntos</div>
          <h1>Cada compra<br/>tiene su <span>recompensa</span></h1>
          <p className="hero-sub">Acumula puntos comprando en Minimarket Javivi y canjéalos por productos directamente en tienda.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => catalogRef.current?.scrollIntoView({behavior:"smooth"})}>Ver catálogo</button>
            <button className="btn-secondary" onClick={() => contactRef.current?.scrollIntoView({behavior:"smooth"})}>Contacto</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">{productos.length}</div><div className="hero-stat-lbl">Productos</div></div>
            <div className="hero-stat"><div className="hero-stat-num">{categorias.length}</div><div className="hero-stat-lbl">Categorías</div></div>
            <div className="hero-stat"><div className="hero-stat-num">$0</div><div className="hero-stat-lbl">Costo canje</div></div>
          </div>
        </div>
      </section>

      {/* OFERTAS GRID */}
      {promos.length > 0 && <OfertasGrid promos={promos}/>}

      {/* CÓMO FUNCIONA */}
      <section className="section how-section">
        <div className="section-inner">
          <div className="section-hd">
            <h2>¿Cómo funciona?</h2>
            <p>Simple y transparente — sin apps, sin registros complicados</p>
          </div>
          <div className="how-grid">
            {[["01","🛒","Compra","Realiza tus compras habituales en el minimarket."],
              ["02","⭐","Acumula","Suma puntos con cada visita. Consulta tu saldo en tienda."],
              ["03","🎁","Elige","Revisa el catálogo y escoge el producto que más te guste."],
              ["04","🏪","Canjea","Visítanos con tu nombre. El canje es presencial e inmediato."]
            ].map(([n,ic,t,d]) => (
              <div className="how-item" key={n}>
                <div className="how-num">{n}</div>
                <div className="how-icon">{ic}</div>
                <div className="how-title">{t}</div>
                <div className="how-desc">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="section" ref={catalogRef} id="catalogo-section">
        <div className="section-inner">
          <div className="section-hd">
            <h2>Catálogo de canje</h2>
            <p>Consulta tus puntos en tienda y escoge tu premio</p>
          </div>

          {/* Search */}
          <div className="search-bar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input placeholder="Buscar producto..." value={search} onChange={e=>setSearch(e.target.value)}/>
            {search && <button onClick={()=>setSearch("")} style={{background:"none",border:"none",color:"#aaa",fontSize:18,lineHeight:1,padding:0,cursor:"pointer"}}>×</button>}
          </div>

          {/* Tabs */}
          <div className="cat-tabs-wrap">
            <div className="cat-tabs">
              <button className={`cat-tab ${catSel==="all"?"on":""}`} onClick={()=>setCatSel("all")}>
                Todos <span className="cat-tab-count">{productos.length}</span>
              </button>
              {categorias.map(c => {
                const cnt = productos.filter(p=>p.categoria_id===c.id).length;
                return (
                  <button key={c.id} className={`cat-tab ${catSel===c.id?"on":""}`} onClick={()=>setCatSel(c.id)}>
                    {c.icono} {c.nombre} <span className="cat-tab-count">{cnt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="empty-state"><div style={{fontSize:48}}>🔍</div><p>No se encontraron productos.</p></div>
          ) : (
            <div className="products-grid">
              {filtered.map(p => (
                <div className="prod-card" key={p.id}>
                  {p.destacado && <div className="dest-pill">Destacado</div>}
                  <div className="prod-img">
                    {p.foto_url ? <img src={p.foto_url} alt={p.nombre}/> : <div className="prod-placeholder">🎁</div>}
                  </div>
                  <div className="prod-body">
                    {p.categorias?.nombre && <div className="prod-cat">{p.categorias.icono} {p.categorias.nombre}</div>}
                    <div className="prod-name">{p.nombre}</div>
                    {p.descripcion && (<>
                      <div className={`prod-desc ${expanded[p.id]?"":"prod-desc-short"}`}>{p.descripcion}</div>
                      {p.descripcion.length > 60 && (
                        <button className="prod-toggle" onClick={()=>toggle(p.id)}>
                          {expanded[p.id] ? "Ver menos" : "Ver más"}
                        </button>
                      )}
                    </>)}
                    <div className="pts-wrap">
                      <div className="pts-icon">⭐</div>
                      <div>
                        <div className="pts-num">{fmtPuntos(p.puntos_requeridos)}</div>
                        <div className="pts-lbl">puntos</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section contact-section" ref={contactRef} id="contacto-section">
        <div className="section-inner">
          <div className="section-hd">
            <h2>Contacto</h2>
            <p>Consultas, sugerencias o reclamos</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Minimarket Javivi</h3>
              <p>Escríbenos si tienes dudas sobre tus puntos o el catálogo. Te respondemos a la brevedad.</p>
              <div className="c-row"><div className="c-icon-wrap">📍</div><span>{direccion || "Visítanos en nuestra tienda"}</span></div>
              <div className="c-row"><div className="c-icon-wrap">💬</div>
                <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" style={{color:"#16a34a",fontWeight:600}}>WhatsApp directo</a>
              </div>
              <div className="c-row"><div className="c-icon-wrap">🎁</div><span>Canje presencial sin costo</span></div>
              <div className="c-note"><strong>¿Quieres saber tus puntos?</strong><br/>Visítanos o escríbenos con tu nombre y te informamos al instante.</div>
            </div>
            <div>
              <div className="form-group"><label className="form-label">Nombre *</label><input className="form-input" placeholder="María González" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Email (opcional)</label><input className="form-input" type="email" placeholder="tu@correo.cl" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Tipo</label>
                <select className="form-input" value={form.tipo} onChange={e=>setForm({...form,tipo:e.target.value})}>
                  <option value="consulta">Consulta</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="reclamo">Reclamo</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Mensaje *</label><textarea className="form-textarea" placeholder="Escribe tu mensaje..." value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})}/></div>
              <button className="btn-submit" onClick={sendContact} disabled={sending}>{sending?"Enviando...":"Enviar mensaje"}</button>
            </div>
          </div>
        </div>
      </section>

      {toast && <Toast msg={toast} onClose={()=>setToast(null)}/>}
    </>
  );
}

// ── ADMIN ─────────────────────────────────────────────────────
function Admin({ showToast, onExit }) {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("dashboard");
  const [clave, setClave] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [promos, setPromos] = useState([]);
  const [mensajes, setMensajes] = useState([]);
  const [prodForm, setProdForm] = useState({ nombre:"", descripcion:"", puntos_requeridos:0, categoria_id:"", activo:true, destacado:false });
  const [promoForm, setPromoForm] = useState({ nombre:"", descripcion:"", precio_original:"", precio_oferta:"", activo:true });
  const [catForm, setCatForm] = useState({ nombre:"", icono:"🎁" });
  const [prodFile, setProdFile] = useState(null);
  const [promoFile, setPromoFile] = useState(null);
  const [fileKey, setFileKey] = useState(0);
  const [saving, setSaving] = useState(false);

  const [config, setConfig] = useState({ nombre_negocio:"Minimarket Javivi", direccion:"", telefono_whatsapp:"56912345678" });
  const [savingConfig, setSavingConfig] = useState(false);

  const load = async () => {
    const [p,c,pr,m,cfg] = await Promise.all([
      supabaseAdmin.from("productos").select("*,categorias(nombre,icono)").order("nombre"),
      supabaseAdmin.from("categorias").select("*").order("orden"),
      supabaseAdmin.from("promociones").select("*").order("orden"),
      supabaseAdmin.from("contacto_mensajes").select("*").order("created_at",{ascending:false}),
      supabaseAdmin.from("config_sitio").select("*").single(),
    ]);
    setProductos(p.data||[]); setCategorias(c.data||[]); setPromos(pr.data||[]); setMensajes(m.data||[]);
    if (cfg.data) setConfig(cfg.data);
  };
  useEffect(()=>{ if(user) load(); },[user]);

  const handleLogin = async () => {
    if (!clave.trim()) return;
    const hash = await hashPassword(clave);
    const { data } = await supabaseAdmin.from("admins").select("*").eq("password_hash",hash).single();
    if (!data) { setLoginErr("Clave incorrecta"); return; }
    setUser(data);
  };

  const uploadFoto = async (file, bucket) => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabaseAdmin.storage.from(bucket).upload(path, file, { upsert:true });
    if (error) { showToast(`Error al subir foto: ${error.message}`); return null; }
    return supabaseAdmin.storage.from(bucket).getPublicUrl(path).data.publicUrl;
  };

  const saveProd = async () => {
    if (!prodForm.nombre.trim()) { showToast("El nombre es obligatorio"); return; }
    setSaving(true);
    let foto_url = prodForm.foto_url || null;
    if (prodFile) { const url = await uploadFoto(prodFile,"productos"); if(url) foto_url=url; else { setSaving(false); return; } }
    const d = { nombre:prodForm.nombre, descripcion:prodForm.descripcion||null, foto_url, puntos_requeridos:parseInt(prodForm.puntos_requeridos)||0, categoria_id:prodForm.categoria_id||null, activo:prodForm.activo, destacado:prodForm.destacado };
    const {error} = prodForm.id ? await supabaseAdmin.from("productos").update(d).eq("id",prodForm.id) : await supabaseAdmin.from("productos").insert(d);
    if (error) { showToast(`Error: ${error.message}`); setSaving(false); return; }
    showToast("Producto guardado"); setProdForm({nombre:"",descripcion:"",puntos_requeridos:0,categoria_id:"",activo:true,destacado:false}); setProdFile(null); load(); setSaving(false);
  };

  const savePromo = async () => {
    if (!promoForm.nombre.trim()||!promoForm.precio_oferta) { showToast("Nombre y precio oferta son obligatorios"); return; }
    setSaving(true);
    let foto_url = promoForm.foto_url || null;
    if (promoFile) { const url = await uploadFoto(promoFile,"promociones"); if(url) foto_url=url; else { setSaving(false); return; } }
    const d = { nombre:promoForm.nombre, descripcion:promoForm.descripcion||null, foto_url, precio_oferta:parseFloat(promoForm.precio_oferta)||0, precio_original:parseFloat(promoForm.precio_original)||null, activo:promoForm.activo };
    const {error} = promoForm.id ? await supabaseAdmin.from("promociones").update(d).eq("id",promoForm.id) : await supabaseAdmin.from("promociones").insert(d);
    if (error) { showToast(`Error: ${error.message}`); setSaving(false); return; }
    showToast("Promoción guardada");
    setPromoForm({nombre:"",descripcion:"",precio_original:"",precio_oferta:"",activo:true,foto_url:null});
    setPromoFile(null);
    setFileKey(k => k + 1);
    load(); setSaving(false);
  };

  if (!user) return (
    <div style={{
      minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      paddingTop:60, position:"relative", overflow:"hidden",
    }}>
      <div style={{position:"absolute",inset:0,backgroundImage:"url('https://mzpdgiefwnvviyvslbff.supabase.co/storage/v1/object/public/productos/hero-bg.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}/>
      <div style={{position:"absolute",inset:0,background:"rgba(255,255,255,0.82)"}}/>
      <div style={{position:"relative",zIndex:1,background:"rgba(255,255,255,0.95)",borderRadius:16,padding:40,width:"100%",maxWidth:320,border:"1px solid #e8e8e8",boxShadow:"0 8px 40px rgba(0,0,0,0.1)"}}>
        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{fontSize:36,marginBottom:10}}>🔐</div>
          <div style={{fontSize:18,fontWeight:700,color:"#0a0a0a"}}>Módulo de administración</div>
          <div style={{fontSize:13,color:"#aaa",marginTop:4}}>Minimarket Javivi</div>
        </div>
        {loginErr && <div style={{background:"#fef2f2",color:"#dc2626",padding:"10px 14px",borderRadius:8,fontSize:13,marginBottom:14,textAlign:"center"}}>{loginErr}</div>}
        <div className="form-group">
          <label className="form-label">Clave de acceso</label>
          <input className="form-input" type="password" placeholder="••••••••" value={clave}
            onChange={e=>setClave(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()}
            style={{textAlign:"center",fontSize:18,letterSpacing:4}} autoFocus/>
        </div>
        <button className="btn-submit" onClick={handleLogin}>Ingresar</button>
        <button onClick={onExit} style={{width:"100%",marginTop:10,padding:"10px",background:"none",border:"none",color:"#aaa",fontSize:13,cursor:"pointer"}}>Volver al sitio</button>
      </div>
    </div>
  );

  const nav = [["dashboard","📊","Dashboard"],["productos","🎁","Catálogo"],["categorias","🏷️","Categorías"],["promociones","🔥","Promociones"],["mensajes","💬","Mensajes"],["config","⚙️","Configuración"]];

  return (
    <div className="admin-layout">
      <div className="admin-nav">
        <div className="admin-nav-head">
          <div className="admin-nav-title">Javivi Admin</div>
          <div className="admin-nav-user">{user.nombre}</div>
        </div>
        {nav.map(([k,ic,lbl])=>(
          <div key={k} className={`a-item ${tab===k?"on":""}`} onClick={()=>setTab(k)}><span>{ic}</span><span>{lbl}</span></div>
        ))}
        <div className="a-divider"/>
        <div className="a-item" onClick={onExit}><span>🌐</span><span>Ver sitio</span></div>
        <div className="a-item a-item-danger" onClick={()=>{ setUser(null); onExit(); }}><span>🚪</span><span>Salir</span></div>
      </div>

      <div className="admin-main">

        {tab==="dashboard" && (<>
          <div className="admin-page-title">Dashboard</div>
          <div className="stats-grid">
            {[["🎁",productos.filter(p=>p.activo).length,"Productos activos"],["🔥",promos.filter(p=>p.activo).length,"Promociones"],["💬",mensajes.filter(m=>m.estado==="pendiente").length,"Mensajes nuevos"]].map(([ic,v,l])=>(
              <div className="stat-card" key={l}><div className="stat-card-ic">{ic}</div><div className="stat-card-val">{v}</div><div className="stat-card-lbl">{l}</div></div>
            ))}
          </div>
          <div className="panel">
            <div className="panel-hd"><span className="panel-title">Mensajes recientes</span></div>
            <div className="panel-bd">
              {mensajes.slice(0,5).map(m=>(
                <div key={m.id} style={{padding:"12px 0",borderBottom:"1px solid #f5f5f5",display:"flex",justifyContent:"space-between",gap:12}}>
                  <div><div style={{fontWeight:600,fontSize:14}}>{m.nombre_contacto}</div><div style={{fontSize:13,color:"#aaa",marginTop:2}}>{m.mensaje?.slice(0,80)}...</div></div>
                  <span className={`b-pill ${m.estado==="pendiente"?"b-red":"b-green"}`}>{m.estado}</span>
                </div>
              ))}
              {mensajes.length===0&&<p style={{color:"#aaa",fontSize:14}}>Sin mensajes aún.</p>}
            </div>
          </div>
        </>)}

        {tab==="productos" && (<>
          <div className="admin-page-title">Catálogo de Productos</div>
          <div className="two-col">
            <div className="panel">
              <div className="panel-hd">
                <span className="panel-title">{prodForm.id?"Editar":"Nuevo"} producto</span>
                {prodForm.id&&<button className="btn-xs btn-xs-d" onClick={()=>{setProdForm({nombre:"",descripcion:"",puntos_requeridos:0,categoria_id:"",activo:true,destacado:false});setProdFile(null);}}>Cancelar</button>}
              </div>
              <div className="panel-bd">
                <div className="form-group">
                  <label className="form-label">Foto</label>
                  <input type="file" accept="image/*" className="form-input" style={{padding:"7px"}} onChange={e=>setProdFile(e.target.files[0])}/>
                  {prodForm.foto_url && !prodFile && <img src={prodForm.foto_url} alt="" style={{width:72,height:72,objectFit:"contain",borderRadius:8,border:"1px solid #e8e8e8",padding:4,marginTop:8,display:"block",background:"#f5f5f5"}}/>}
                </div>
                <div className="form-group"><label className="form-label">Nombre *</label><input className="form-input" value={prodForm.nombre} onChange={e=>setProdForm({...prodForm,nombre:e.target.value})} placeholder="Ej: Smart TV 40"/></div>
                <div className="form-group"><label className="form-label">Descripción</label><textarea className="form-textarea" style={{minHeight:72}} value={prodForm.descripcion} onChange={e=>setProdForm({...prodForm,descripcion:e.target.value})} placeholder="Detalles del producto..."/></div>
                <div className="form-group"><label className="form-label">Puntos requeridos *</label><input className="form-input" type="number" value={prodForm.puntos_requeridos} onChange={e=>setProdForm({...prodForm,puntos_requeridos:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Categoría</label>
                  <select className="form-input" value={prodForm.categoria_id} onChange={e=>setProdForm({...prodForm,categoria_id:e.target.value})}>
                    <option value="">Sin categoría</option>
                    {categorias.map(c=><option key={c.id} value={c.id}>{c.icono} {c.nombre}</option>)}
                  </select>
                </div>
                <div style={{display:"flex",gap:20,marginBottom:16}}>
                  <label style={{display:"flex",gap:6,alignItems:"center",fontSize:13,cursor:"pointer"}}><input type="checkbox" checked={prodForm.activo} onChange={e=>setProdForm({...prodForm,activo:e.target.checked})}/> Activo</label>
                  <label style={{display:"flex",gap:6,alignItems:"center",fontSize:13,cursor:"pointer"}}><input type="checkbox" checked={prodForm.destacado} onChange={e=>setProdForm({...prodForm,destacado:e.target.checked})}/> Destacado</label>
                </div>
                <button className="btn-submit" onClick={saveProd} disabled={saving}>{saving?"Guardando...":(prodForm.id?"Actualizar":"Agregar producto")}</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-hd"><span className="panel-title">Productos ({productos.length})</span></div>
              <table className="tbl">
                <thead><tr><th>Producto</th><th>Puntos</th><th>Estado</th><th></th></tr></thead>
                <tbody>
                  {productos.map(p=>(
                    <tr key={p.id}>
                      <td>
                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                          <div style={{width:40,height:40,borderRadius:8,background:"#f5f5f5",overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                            {p.foto_url?<img src={p.foto_url} alt="" style={{width:"100%",height:"100%",objectFit:"contain",padding:4}}/>:<span style={{fontSize:18}}>🎁</span>}
                          </div>
                          <div><div style={{fontWeight:600,fontSize:13}}>{p.nombre}</div><div style={{fontSize:11,color:"#aaa"}}>{p.categorias?.nombre||"Sin categoría"}</div></div>
                        </div>
                      </td>
                      <td><span style={{fontWeight:700,fontSize:13}}>⭐ {fmtPuntos(p.puntos_requeridos)}</span></td>
                      <td><span className={`b-pill ${p.activo?"b-green":"b-gray"}`}>{p.activo?"Activo":"Oculto"}</span></td>
                      <td>
                        <div style={{display:"flex",gap:6}}>
                          <button className="btn-xs btn-xs-p" onClick={()=>setProdForm({...p,categoria_id:p.categoria_id||"",puntos_requeridos:p.puntos_requeridos||0})}>Editar</button>
                          <button className="btn-xs btn-xs-d" onClick={async()=>{await supabaseAdmin.from("productos").delete().eq("id",p.id);showToast("Eliminado");load();}}>✕</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {productos.length===0&&<tr><td colSpan={4} style={{textAlign:"center",color:"#aaa",padding:32}}>Sin productos aún.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </>)}

        {tab==="categorias" && (<>
          <div className="admin-page-title">Categorías</div>
          <div className="two-eq">
            <div className="panel">
              <div className="panel-hd"><span className="panel-title">Nueva categoría</span></div>
              <div className="panel-bd">
                <div className="form-group"><label className="form-label">Nombre</label><input className="form-input" placeholder="Ej: Línea Blanca" value={catForm.nombre} onChange={e=>setCatForm({...catForm,nombre:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Icono (emoji)</label><input className="form-input" value={catForm.icono} onChange={e=>setCatForm({...catForm,icono:e.target.value})}/></div>
                <button className="btn-submit" onClick={async()=>{if(!catForm.nombre.trim())return;await supabaseAdmin.from("categorias").insert(catForm);showToast("Categoría creada");setCatForm({nombre:"",icono:"🎁"});load();}}>Agregar</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-hd"><span className="panel-title">Categorías ({categorias.length})</span></div>
              <div className="panel-bd">
                {categorias.map(c=>(
                  <div key={c.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #f5f5f5"}}>
                    <span style={{fontSize:14}}>{c.icono} <strong>{c.nombre}</strong></span>
                    <button className="btn-xs btn-xs-d" onClick={async()=>{await supabaseAdmin.from("categorias").delete().eq("id",c.id);showToast("Eliminada");load();}}>✕</button>
                  </div>
                ))}
                {categorias.length===0&&<p style={{color:"#aaa",fontSize:14}}>Sin categorías.</p>}
              </div>
            </div>
          </div>
        </>)}

        {tab==="promociones" && (<>
          <div className="admin-page-title">Promociones</div>
          <div className="two-col">
            <div className="panel">
              <div className="panel-hd">
                <span className="panel-title">{promoForm.id?"Editar":"Nueva"} promoción</span>
                {promoForm.id&&<button className="btn-xs btn-xs-d" onClick={()=>{setPromoForm({nombre:"",descripcion:"",precio_original:"",precio_oferta:"",activo:true});setPromoFile(null);}}>Cancelar</button>}
              </div>
              <div className="panel-bd">
                <div className="form-group">
                  <label className="form-label">Foto del producto</label>
                  <input key={fileKey} type="file" accept="image/*" className="form-input" style={{padding:"7px"}} onChange={e=>setPromoFile(e.target.files[0])}/>
                  {promoForm.foto_url && !promoFile && <img src={promoForm.foto_url} alt="" style={{width:72,height:72,objectFit:"contain",borderRadius:8,border:"1px solid #e8e8e8",padding:4,marginTop:8,display:"block",background:"#f5f5f5"}}/>}
                </div>
                <div className="form-group"><label className="form-label">Nombre *</label><input className="form-input" value={promoForm.nombre} onChange={e=>setPromoForm({...promoForm,nombre:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Descripción</label><textarea className="form-textarea" style={{minHeight:64}} value={promoForm.descripcion} onChange={e=>setPromoForm({...promoForm,descripcion:e.target.value})}/></div>
                <div className="admin-form-row">
                  <div className="form-group"><label className="form-label">Precio original</label><input className="form-input" type="number" placeholder="0" value={promoForm.precio_original} onChange={e=>setPromoForm({...promoForm,precio_original:e.target.value})}/></div>
                  <div className="form-group"><label className="form-label">Precio oferta *</label><input className="form-input" type="number" placeholder="0" value={promoForm.precio_oferta} onChange={e=>setPromoForm({...promoForm,precio_oferta:e.target.value})}/></div>
                </div>
                <label style={{display:"flex",gap:6,alignItems:"center",fontSize:13,cursor:"pointer",marginBottom:16}}><input type="checkbox" checked={promoForm.activo} onChange={e=>setPromoForm({...promoForm,activo:e.target.checked})}/> Activa</label>
                <button className="btn-submit" onClick={savePromo} disabled={saving}>{saving?"Guardando...":(promoForm.id?"Actualizar":"Crear promoción")}</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-hd"><span className="panel-title">Promociones ({promos.length})</span></div>
              <table className="tbl">
                <thead><tr><th>Nombre</th><th>Precio</th><th>Estado</th><th></th></tr></thead>
                <tbody>
                  {promos.map(p=>(
                    <tr key={p.id}>
                      <td>
                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                          <div style={{width:40,height:40,borderRadius:8,background:"#f5f5f5",overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                            {p.foto_url?<img src={p.foto_url} alt="" style={{width:"100%",height:"100%",objectFit:"contain",padding:4}}/>:<span style={{fontSize:18}}>🔥</span>}
                          </div>
                          <span style={{fontWeight:600,fontSize:13}}>{p.nombre}</span>
                        </div>
                      </td>
                      <td><span style={{fontWeight:700,color:"#16a34a"}}>{fmtPeso(p.precio_oferta)}</span></td>
                      <td><span className={`b-pill ${p.activo?"b-green":"b-gray"}`}>{p.activo?"Activa":"Inactiva"}</span></td>
                      <td>
                        <div style={{display:"flex",gap:6}}>
                          <button className="btn-xs btn-xs-p" onClick={()=>setPromoForm({...p,precio_original:p.precio_original||"",precio_oferta:p.precio_oferta||""})}>Editar</button>
                          <button className="btn-xs btn-xs-d" onClick={async()=>{await supabaseAdmin.from("promociones").delete().eq("id",p.id);showToast("Eliminada");load();}}>✕</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {promos.length===0&&<tr><td colSpan={4} style={{textAlign:"center",color:"#aaa",padding:32}}>Sin promociones.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </>)}

        {tab==="mensajes" && (<>
          <div className="admin-page-title">Mensajes</div>
          <div className="panel">
            <div className="panel-bd">
              {mensajes.map(m=>(
                <div key={m.id} style={{padding:"16px 0",borderBottom:"1px solid #f5f5f5"}}>
                  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:8}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                      <span style={{fontWeight:600,fontSize:14}}>{m.nombre_contacto}</span>
                      <span className={`b-pill ${m.tipo==="reclamo"?"b-red":m.tipo==="sugerencia"?"b-gray":"b-green"}`}>{m.tipo}</span>
                      <span className={`b-pill ${m.estado==="pendiente"?"b-red":"b-gray"}`}>{m.estado}</span>
                    </div>
                    <div style={{display:"flex",gap:8,alignItems:"center"}}>
                      <span style={{fontSize:12,color:"#aaa"}}>{new Date(m.created_at).toLocaleDateString("es-CL")}</span>
                      {m.estado==="pendiente"&&<button className="btn-xs btn-xs-p" onClick={async()=>{await supabaseAdmin.from("contacto_mensajes").update({estado:"leido"}).eq("id",m.id);showToast("Marcado como leído");load();}}>Leído</button>}
                    </div>
                  </div>
                  <p style={{fontSize:13.5,color:"#444",background:"#f7f7f7",padding:"10px 14px",borderRadius:8,lineHeight:1.65}}>{m.mensaje}</p>
                  {m.email_contacto&&<p style={{fontSize:12,color:"#aaa",marginTop:6}}>📧 {m.email_contacto}</p>}
                </div>
              ))}
              {mensajes.length===0&&<div style={{textAlign:"center",padding:40,color:"#aaa"}}><div style={{fontSize:36,marginBottom:8}}>💬</div><p>Sin mensajes aún.</p></div>}
            </div>
          </div>
        </>)}

        {tab==="config" && (<>
          <div className="admin-page-title">Configuración</div>
          <div className="panel" style={{maxWidth:520}}>
            <div className="panel-hd"><span className="panel-title">Datos del negocio</span></div>
            <div className="panel-bd">
              <div className="form-group"><label className="form-label">Nombre del negocio</label><input className="form-input" value={config.nombre_negocio} onChange={e=>setConfig({...config,nombre_negocio:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Dirección</label><input className="form-input" placeholder="Ej: Av. Las Torres 1234, Maipú" value={config.direccion} onChange={e=>setConfig({...config,direccion:e.target.value})}/></div>
              <div className="form-group">
                <label className="form-label">Teléfono WhatsApp</label>
                <input className="form-input" placeholder="Ej: 56912345678" value={config.telefono_whatsapp} onChange={e=>setConfig({...config,telefono_whatsapp:e.target.value})}/>
                <p style={{fontSize:12,color:"#aaa",marginTop:6}}>Formato sin + ni espacios. Ej: 56912345678</p>
              </div>
              <button className="btn-submit" disabled={savingConfig} onClick={async()=>{
                setSavingConfig(true);
                const {error} = await supabaseAdmin.from("config_sitio").update(config).eq("id",1);
                if (error) showToast(`Error: ${error.message}`);
                else showToast("Configuración guardada");
                setSavingConfig(false);
              }}>{savingConfig?"Guardando...":"Guardar configuración"}</button>
            </div>
          </div>
        </>)}

      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("landing");
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [promos, setPromos] = useState([]);
  const [toast, setToast] = useState(null);
  const [siteConfig, setSiteConfig] = useState({ nombre_negocio:"Minimarket Javivi", direccion:"", telefono_whatsapp: WHATSAPP });

  const loadPublicData = () => {
    Promise.all([
      supabase.from("productos").select("*,categorias(nombre,icono)").eq("activo",true).order("puntos_requeridos"),
      supabase.from("categorias").select("*").eq("activo",true).order("orden"),
      supabase.from("promociones").select("*").eq("activo",true).order("orden"),
      supabase.from("config_sitio").select("*").single(),
    ]).then(([p,c,pr,cfg]) => {
      setProductos(p.data||[]); setCategorias(c.data||[]); setPromos(pr.data||[]);
      if (cfg.data) setSiteConfig(cfg.data);
    });
  };

  useEffect(() => { loadPublicData(); }, []);
  useEffect(() => { if (view === "landing") loadPublicData(); }, [view]);

  const wa = siteConfig.telefono_whatsapp || WHATSAPP;

  if (view === "admin") return (
    <>
      <style>{css}</style>
      <nav className="nav">
        <div className="nav-brand" onClick={()=>setView("landing")}>
          <LogoSVG size={36}/>
          <div><div className="nav-brand-name">Javivi</div><div className="nav-brand-sub">Minimarket</div></div>
        </div>
      </nav>
      <Admin showToast={msg=>setToast(msg)} onExit={()=>setView("landing")}/>
      {toast && <Toast msg={toast} onClose={()=>setToast(null)}/>}
    </>
  );

  return (
    <>
      <style>{css}</style>
      <nav className="nav">
        <div className="nav-brand" onClick={()=>setView("landing")}>
          <LogoSVG size={36}/>
          <div><div className="nav-brand-name">{siteConfig.nombre_negocio}</div><div className="nav-brand-sub">Minimarket</div></div>
        </div>
        <div className="nav-links">
          <button className="nav-link" onClick={()=>document.getElementById("catalogo-section")?.scrollIntoView({behavior:"smooth"})}>Catálogo</button>
          <button className="nav-link" onClick={()=>document.getElementById("contacto-section")?.scrollIntoView({behavior:"smooth"})}>Contacto</button>
          <div className="nav-admin-btn" onClick={()=>setView("admin")}>
            ⚙️
            <div className="tooltip">Módulo de administración</div>
          </div>
        </div>
      </nav>

      {/* TICKER de promociones */}
      {promos.length > 0 && (
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...promos,...promos].map((p,i) => (
              <span key={i} className="ticker-item">
                🔥 <strong>{p.nombre}</strong>
                {p.precio_original && <span style={{textDecoration:"line-through",opacity:0.5,marginLeft:4}}>{fmtPeso(p.precio_original)}</span>}
                <span style={{color:"#86efac"}}>{fmtPeso(p.precio_oferta)}</span>
                <span className="ticker-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div style={{paddingTop: promos.length > 0 ? 92 : 60}}>
        <Landing productos={productos} categorias={categorias} promos={promos} wa={wa} direccion={siteConfig.direccion}/>
        <footer>
          <div>
            <div className="foot-brand">{siteConfig.nombre_negocio}</div>
            <div className="foot-copy">© {new Date().getFullYear()} Todos los derechos reservados · <a href="https://www.tempvs7.cl" target="_blank" rel="noreferrer">TEMPVS7</a></div>
          </div>
          <div className="foot-links">
            <a onClick={()=>document.getElementById("catalogo-section")?.scrollIntoView({behavior:"smooth"})}>Catálogo</a>
            <a onClick={()=>document.getElementById("contacto-section")?.scrollIntoView({behavior:"smooth"})}>Contacto</a>
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </footer>
      </div>

      <a className="wa-float" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      {toast && <Toast msg={toast} onClose={()=>setToast(null)}/>}
    </>
  );
}
