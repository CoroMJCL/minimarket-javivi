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

const G = "#0a2e1e";
const GM = "#16a34a";
const GL = "#4ade80";
const GOLD = "#f59e0b";

const LogoSVG = ({ size = 56, white = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width={size} height={size}>
    <defs>
      <radialGradient id="bgC" cx="40%" cy="35%" r="65%"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f0faf3"/></radialGradient>
      <linearGradient id="cG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#52e07c"/><stop offset="50%" stopColor="#22c55e"/><stop offset="100%" stopColor="#15803d"/></linearGradient>
      <linearGradient id="cDG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1ea550"/><stop offset="100%" stopColor="#14532d"/></linearGradient>
      <linearGradient id="lL" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#86efac"/><stop offset="45%" stopColor="#22c55e"/><stop offset="100%" stopColor="#14532d"/></linearGradient>
      <linearGradient id="lR" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#a7f3c4"/><stop offset="45%" stopColor="#16a34a"/><stop offset="100%" stopColor="#14532d"/></linearGradient>
      <linearGradient id="lT" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#bbf7d0"/><stop offset="100%" stopColor="#16a34a"/></linearGradient>
      <linearGradient id="sh" x1="10%" y1="0%" x2="60%" y2="80%"><stop offset="0%" stopColor="#ffffff" stopOpacity="0.55"/><stop offset="100%" stopColor="#ffffff" stopOpacity="0"/></linearGradient>
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
    <circle cx="250" cy="250" r="226" fill="none" stroke="url(#rA)" strokeWidth="0.8" strokeDasharray="6 12" opacity="0.7"/>
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
      <text x="250" y="330" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#16a34a" textAnchor="middle" letterSpacing="6" opacity="0.75">MINIMARKET</text>
      <text x="250" y="392" fontFamily="Arial Black, Arial Bold, sans-serif" fontSize="76" fontWeight="900" fill="#14532d" textAnchor="middle" letterSpacing="4" filter="url(#tF)">JAVIVI</text>
      <rect x="112" y="400" width="276" height="3" rx="1.5" fill="url(#lnG)" opacity="0.9"/>
      <text x="250" y="426" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="600" fill="#15803d" textAnchor="middle" letterSpacing="1.8">Abarrotes · Frutas &amp; Verduras</text>
    </g>
  </svg>
);

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; background: #fff; color: #1a1a1a; -webkit-font-smoothing: antialiased; }
  h1,h2,h3,h4 { font-family: 'Playfair Display', Georgia, serif; }
  button { cursor: pointer; border: none; outline: none; font-family: inherit; }
  input, textarea, select { font-family: inherit; outline: none; }
  a { text-decoration: none; color: inherit; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10,46,30,0.97); backdrop-filter: blur(20px);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 72px;
    box-shadow: 0 1px 0 rgba(74,222,128,0.15);
  }
  .nav-brand { display: flex; align-items: center; gap: 14px; cursor: pointer; }
  .nav-brand-name { font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: 700; color: white; letter-spacing: 0.3px; }
  .nav-brand-sub { font-size: 9px; font-weight: 700; color: #4ade80; letter-spacing: 3.5px; text-transform: uppercase; margin-top: 1px; }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-link { padding: 8px 18px; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.65); border-radius: 8px; transition: all 0.2s; background: none; }
  .nav-link:hover { color: #4ade80; background: rgba(74,222,128,0.08); }
  .nav-cta { background: #4ade80; color: #0a2e1e; padding: 9px 22px; border-radius: 10px; font-size: 13px; font-weight: 700; transition: all 0.2s; }
  .nav-cta:hover { background: #22c55e; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(74,222,128,0.3); }

  /* HERO */
  .hero {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    flex-direction: column; text-align: center; padding: 140px 24px 100px;
    background: linear-gradient(160deg, #071a10 0%, #0a2e1e 40%, #0d3d28 70%, #071a10 100%);
    position: relative; overflow: hidden;
  }
  .hero-mesh {
    position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle at 20% 50%, rgba(74,222,128,0.06) 0%, transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(22,163,74,0.08) 0%, transparent 50%),
                      radial-gradient(circle at 60% 80%, rgba(74,222,128,0.05) 0%, transparent 40%);
  }
  .hero-grid {
    position: absolute; inset: 0; pointer-events: none; opacity: 0.03;
    background-image: linear-gradient(rgba(74,222,128,1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hero-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; max-width: 800px; }
  .hero-logo-wrap { 
    margin-bottom: 36px;
    filter: drop-shadow(0 20px 60px rgba(74,222,128,0.2));
    animation: floatLogo 6s ease-in-out infinite;
  }
  @keyframes floatLogo { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.25);
    color: #4ade80; padding: 7px 20px; border-radius: 100px;
    font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
    margin-bottom: 28px;
  }
  .hero-tag-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse-dot 2s infinite; }
  @keyframes pulse-dot { 0%,100% { opacity:1; transform: scale(1); } 50% { opacity:0.5; transform: scale(0.8); } }
  .hero h1 {
    font-size: clamp(3.2rem, 7vw, 5.5rem); font-weight: 900; color: white;
    line-height: 1.05; margin-bottom: 24px; letter-spacing: -2px;
  }
  .hero h1 em { font-style: italic; color: #4ade80; }
  .hero-sub { font-size: 18px; color: rgba(255,255,255,0.6); max-width: 480px; line-height: 1.75; margin-bottom: 48px; font-weight: 300; }
  .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 72px; }
  .btn-hero-primary {
    padding: 16px 32px; background: #4ade80; color: #0a2e1e; border-radius: 12px;
    font-size: 15px; font-weight: 700; transition: all 0.25s; letter-spacing: 0.3px;
    box-shadow: 0 8px 32px rgba(74,222,128,0.3);
  }
  .btn-hero-primary:hover { background: #22c55e; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(74,222,128,0.4); }
  .btn-hero-ghost {
    padding: 16px 32px; background: transparent; color: white;
    border: 1.5px solid rgba(255,255,255,0.2); border-radius: 12px;
    font-size: 15px; font-weight: 600; transition: all 0.25s;
  }
  .btn-hero-ghost:hover { border-color: rgba(74,222,128,0.5); background: rgba(74,222,128,0.06); }
  .hero-stats { display: flex; gap: 0; }
  .hero-stat { padding: 24px 44px; border-right: 1px solid rgba(255,255,255,0.08); text-align: center; }
  .hero-stat:last-child { border-right: none; }
  .hero-stat-num { font-family: 'Playfair Display', Georgia, serif; font-size: 2.5rem; font-weight: 700; color: #4ade80; line-height: 1; }
  .hero-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 6px; }
  .hero-scroll {
    position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4;
    animation: bounce 2s infinite;
  }
  .hero-scroll span { font-size: 11px; color: white; letter-spacing: 2px; text-transform: uppercase; }
  @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }

  /* SECTION */
  .section { padding: 100px 24px; }
  .section-inner { max-width: 1200px; margin: 0 auto; }
  .section-header { text-align: center; margin-bottom: 64px; }
  .s-tag { display: inline-block; color: #16a34a; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px; }
  .s-title { font-size: clamp(2rem, 4.5vw, 2.8rem); font-weight: 700; color: #071a10; line-height: 1.12; letter-spacing: -0.5px; }
  .s-title-white { color: white; }
  .s-sub { color: #6b7280; font-size: 16px; margin-top: 12px; max-width: 440px; margin-left: auto; margin-right: auto; line-height: 1.7; }

  .divider { height: 1px; background: linear-gradient(90deg, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent); }

  /* HOW */
  .how-section { background: linear-gradient(135deg, #071a10 0%, #0a2e1e 50%, #071a10 100%); position: relative; overflow: hidden; }
  .how-section::before { content:''; position:absolute; inset:0; background-image: radial-gradient(circle at 30% 50%, rgba(74,222,128,0.04) 0%, transparent 60%); }
  .how-grid { display: grid; grid-template-columns: repeat(4,1fr); position: relative; z-index: 1; }
  .how-item { padding: 56px 40px; border-right: 1px solid rgba(255,255,255,0.06); transition: background 0.3s; }
  .how-item:last-child { border-right: none; }
  .how-item:hover { background: rgba(74,222,128,0.04); }
  .how-num { font-family: 'Playfair Display', Georgia, serif; font-size: 4.5rem; font-weight: 900; color: #4ade80; opacity: 0.15; line-height: 1; margin-bottom: 20px; }
  .how-icon { font-size: 28px; margin-bottom: 16px; }
  .how-title { font-family: 'Playfair Display', Georgia, serif; font-size: 19px; font-weight: 700; color: white; margin-bottom: 12px; }
  .how-desc { font-size: 13.5px; color: rgba(255,255,255,0.45); line-height: 1.8; }

  /* CARRUSEL PROMOCIONES */
  .carrusel-wrap {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #166534 0%, #16a34a 50%, #22c55e 100%);
  }
  .carrusel-inner { display: flex; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1); }
  .carrusel-slide {
    min-width: 100%; display: flex; align-items: center;
    padding: 24px 80px 24px 48px; gap: 32px; position: relative;
    min-height: 140px;
  }
  .carrusel-slide::before {
    content:''; position:absolute; inset:0;
    background: radial-gradient(circle at 85% 50%, rgba(255,255,255,0.06) 0%, transparent 55%);
  }
  .carrusel-img-wrap {
    flex-shrink:0; width:100px; height:100px;
    background:rgba(255,255,255,0.15); border-radius:14px;
    display:flex; align-items:center; justify-content:center;
    border:1px solid rgba(255,255,255,0.25); overflow:hidden; position:relative; z-index:1;
  }
  .carrusel-img-wrap img { width:100%; height:100%; object-fit:contain; padding:8px; }
  .carrusel-content { flex:1; position:relative; z-index:1; }
  .carrusel-tag {
    display:inline-flex; align-items:center; gap:5px;
    background:rgba(0,0,0,0.15); color:white;
    padding:3px 12px; border-radius:100px; font-size:10px;
    font-weight:800; letter-spacing:2px; text-transform:uppercase; margin-bottom:8px;
  }
  .carrusel-name {
    font-family:'Playfair Display',Georgia,serif;
    font-size:clamp(1.1rem,2.5vw,1.5rem); font-weight:900; color:white;
    line-height:1.15; margin-bottom:8px;
  }
  .carrusel-prices { display:flex; align-items:center; gap:14px; }
  .carrusel-price-old { font-size:14px; color:rgba(255,255,255,0.55); text-decoration:line-through; }
  .carrusel-price-new {
    font-family:'Playfair Display',Georgia,serif;
    font-size:1.6rem; font-weight:900; color:white;
    background:rgba(0,0,0,0.18); padding:3px 16px; border-radius:8px;
    border:1.5px solid rgba(255,255,255,0.25);
  }
  .carrusel-cta {
    display:inline-flex; align-items:center; gap:6px;
    background:white; color:#15803d; padding:9px 18px;
    border-radius:10px; font-size:13px; font-weight:800;
    transition:all 0.2s; cursor:pointer; border:none;
    box-shadow:0 4px 12px rgba(0,0,0,0.15); margin-left:20px; white-space:nowrap;
  }
  .carrusel-cta:hover { transform:translateY(-1px); box-shadow:0 6px 18px rgba(0,0,0,0.2); }
  .carrusel-deco {
    flex-shrink:0; position:relative; z-index:1;
  }
  .carrusel-deco-box {
    background:rgba(0,0,0,0.15); border:1.5px solid rgba(255,255,255,0.25);
    border-radius:14px; padding:12px 18px; color:white; text-align:center;
    min-width:140px;
  }
  .carrusel-deco-box .lbl { font-size:9px; font-weight:800; color:rgba(255,255,255,0.6); letter-spacing:2px; text-transform:uppercase; margin-bottom:6px; }
  .carrusel-deco-box .num { font-family:'Playfair Display',Georgia,serif; font-size:1.2rem; font-weight:900; }
  .carrusel-deco-box .sep { font-size:14px; opacity:0.6; margin:2px 0; }
  .carrusel-deco-box .price { font-size:1.3rem; font-weight:900; color:#bbf7d0; }
  .carrusel-deco-box .save { margin-top:6px; background:rgba(0,0,0,0.2); border-radius:6px; padding:3px 8px; font-size:11px; color:#bbf7d0; font-weight:800; }
  .carrusel-btn {
    position:absolute; top:50%; transform:translateY(-50%);
    width:36px; height:36px; border-radius:50%;
    background:rgba(255,255,255,0.15); border:1.5px solid rgba(255,255,255,0.3);
    color:white; font-size:16px; cursor:pointer; z-index:10;
    display:flex; align-items:center; justify-content:center; transition:all 0.2s;
  }
  .carrusel-btn:hover { background:rgba(255,255,255,0.28); }
  .carrusel-btn-prev { left:12px; }
  .carrusel-btn-next { right:12px; }
  .carrusel-dots { position:absolute; bottom:10px; left:50%; transform:translateX(-50%); display:flex; gap:5px; z-index:10; }
  .carrusel-dot { width:6px; height:6px; border-radius:100px; background:rgba(255,255,255,0.35); transition:all 0.3s; cursor:pointer; }
  .carrusel-dot.active { background:white; width:18px; }
  .carrusel-counter { position:absolute; top:10px; right:16px; font-size:11px; color:rgba(255,255,255,0.4); font-weight:700; z-index:1; }
  @media(max-width:768px){
    .carrusel-slide { padding:16px 48px 24px 20px; gap:16px; min-height:auto; }
    .carrusel-img-wrap { width:72px; height:72px; }
    .carrusel-deco { display:none; }
    .carrusel-cta { display:none; }
    .carrusel-price-new { font-size:1.2rem; }
  }

  /* CATALOGO */
  .cat-section { background: #f5f5f5; }

  /* Search */
  .search-wrap {
    display: flex; align-items: center; gap: 12px;
    background: white; border: 1.5px solid #e5e7eb; border-radius: 12px;
    padding: 12px 18px; max-width: 520px; margin: 0 auto 32px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: all 0.2s;
  }
  .search-wrap:focus-within { border-color: #0a2e1e; box-shadow: 0 4px 16px rgba(10,46,30,0.08); }
  .search-wrap input { border: none; background: none; font-size: 14px; color: #1a1a1a; width: 100%; }
  .search-wrap input::placeholder { color: #9ca3af; }

  /* Categorías — tabs con borde tipo botón pill */
  .cat-tabs {
    display: flex; gap: 10px; flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .cat-tab {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 16px; border-radius: 100px;
    font-size: 12.5px; font-weight: 600; cursor: pointer;
    transition: all 0.2s; border: 1.5px solid #e5e7eb;
    background: white; color: #6b7280; white-space: nowrap;
  }
  .cat-tab:hover { border-color: #0a2e1e; color: #0a2e1e; }
  .cat-tab.active { background: #0a2e1e; color: white; border-color: #0a2e1e; box-shadow: 0 3px 10px rgba(10,46,30,0.2); }
  .cat-tab-icon { font-size: 14px; }
  .cat-tab-count { font-size: 10px; opacity: 0.55; }

  /* Grid productos estilo tienda */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  .prod-card {
    background: white; border-radius: 16px; overflow: hidden; position: relative;
    border: 1px solid #e8e8e8;
    transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  }
  .prod-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); border-color: #d1fae5; }

  /* Imagen cuadrada con fondo blanco limpio */
  .prod-img {
    width: 100%; aspect-ratio: 1/1; overflow: hidden;
    background: #ffffff; border-bottom: 1px solid #f0f0f0;
    display: flex; align-items: center; justify-content: center; position: relative;
    padding: 16px;
  }
  .prod-img img {
    width: 100%; height: 100%; object-fit: contain;
    transition: transform 0.4s ease;
  }
  .prod-card:hover .prod-img img { transform: scale(1.06); }
  .prod-placeholder { font-size: 64px; opacity: 0.15; }

  /* Badge vigencia tipo Cencosud */
  .prod-vigencia {
    position: absolute; top: 10px; left: 10px;
    background: #f0fdf4; color: #16a34a;
    font-size: 10px; font-weight: 700; padding: 3px 10px;
    border-radius: 100px; border: 1px solid #bbf7d0;
    letter-spacing: 0.3px;
  }
  .dest-badge {
    position: absolute; top: 10px; right: 10px;
    background: #0a2e1e; color: #4ade80;
    font-size: 9px; font-weight: 800; padding: 4px 10px;
    border-radius: 100px; letter-spacing: 1px; z-index: 2;
  }

  .prod-body { padding: 14px 16px 16px; }
  .prod-cat { font-size: 10px; font-weight: 700; color: #16a34a; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 4px; }
  .prod-name { font-size: 14px; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; line-height: 1.35; }
  .prod-desc { font-size: 12px; color: #9ca3af; line-height: 1.55; margin-bottom: 6px; }
  .prod-desc-short { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .prod-desc-toggle { background: none; border: none; color: #16a34a; font-size: 11px; font-weight: 700; cursor: pointer; padding: 2px 0 10px; display: flex; align-items: center; gap: 4px; }
  .prod-desc-toggle:hover { color: #0a2e1e; }

  /* Badge puntos — estilo Cencosud: número grande + estrella */
  .pts-badge {
    display: flex; align-items: center; gap: 6px;
    margin-top: 8px;
  }
  .pts-num {
    font-size: 22px; font-weight: 900; color: #0a2e1e;
    font-family: 'Playfair Display', Georgia, serif; line-height: 1;
  }
  .pts-label {
    font-size: 11px; font-weight: 700; color: #6b7280;
    text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.2;
  }
  .pts-star {
    width: 28px; height: 28px; border-radius: 50%;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(245,158,11,0.3);
  }

  .empty { text-align: center; padding: 80px 24px; color: #9ca3af; grid-column: 1/-1; }
  .empty-icon { font-size: 64px; margin-bottom: 16px; opacity: 0.4; }
  .empty p { font-size: 16px; }

  /* CONTACT */
  .contact-section { background: #f8fafc; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; max-width: 1000px; margin: 0 auto; }
  .contact-info h3 { font-family: 'Playfair Display', Georgia, serif; font-size: 1.8rem; font-weight: 700; color: #0a2e1e; margin-bottom: 16px; }
  .contact-info p { color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 32px; }
  .c-item { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; font-size: 14px; color: #374151; }
  .c-icon { width: 42px; height: 42px; border-radius: 12px; background: #0a2e1e; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .c-tip { margin-top: 32px; padding: 22px 24px; background: white; border-radius: 16px; border: 1px solid #d1fae5; font-size: 14px; color: #15803d; line-height: 1.75; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
  .form-group { margin-bottom: 18px; }
  .form-label { display: block; font-size: 11px; font-weight: 800; color: #374151; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; }
  .form-input { width: 100%; padding: 13px 18px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; transition: all 0.2s; background: white; color: #1a1a1a; }
  .form-input:focus { border-color: #16a34a; box-shadow: 0 0 0 4px rgba(22,163,74,0.08); }
  .form-textarea { width: 100%; padding: 13px 18px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; resize: vertical; min-height: 120px; background: white; color: #1a1a1a; transition: all 0.2s; }
  .form-textarea:focus { border-color: #16a34a; box-shadow: 0 0 0 4px rgba(22,163,74,0.08); }
  .btn-submit { width: 100%; padding: 14px; background: #0a2e1e; color: white; border-radius: 12px; font-size: 15px; font-weight: 700; transition: all 0.25s; letter-spacing: 0.3px; }
  .btn-submit:hover { background: #16a34a; box-shadow: 0 8px 24px rgba(10,46,30,0.3); transform: translateY(-1px); }
  .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  /* WHATSAPP */
  .wa-float {
    position: fixed; bottom: 32px; right: 32px; z-index: 200;
    width: 62px; height: 62px; background: #25d366; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 32px rgba(37,211,102,0.5);
    transition: transform 0.25s, box-shadow 0.25s;
    animation: wa-pulse 3s infinite;
  }
  .wa-float:hover { transform: scale(1.12); box-shadow: 0 12px 40px rgba(37,211,102,0.7); }
  @keyframes wa-pulse { 0%,100% { box-shadow: 0 8px 32px rgba(37,211,102,0.5); } 50% { box-shadow: 0 8px 48px rgba(37,211,102,0.7); } }

  /* TOAST */
  .toast { position: fixed; bottom: 110px; left: 50%; transform: translateX(-50%); background: #0a2e1e; color: white; padding: 14px 28px; border-radius: 14px; font-size: 14px; font-weight: 600; z-index: 500; box-shadow: 0 8px 32px rgba(0,0,0,0.2); animation: tin 0.3s ease; white-space: nowrap; border: 1px solid rgba(74,222,128,0.2); }
  @keyframes tin { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

  /* ADMIN */
  .admin-wrap { display: flex; min-height: 100vh; padding-top: 72px; }
  .admin-side {
    width: 240px; background: #ffffff; position: fixed; top: 72px; left: 0; bottom: 0;
    overflow-y: auto; z-index: 90; padding: 20px 0;
    border-right: 1px solid #e5e7eb;
    box-shadow: 2px 0 16px rgba(0,0,0,0.04);
  }
  .side-section-lbl { padding: 16px 20px 8px; font-size: 10px; font-weight: 800; color: #9ca3af; letter-spacing: 2px; text-transform: uppercase; }
  .side-item {
    display: flex; align-items: center; gap: 10px; padding: 11px 20px;
    color: #6b7280; font-size: 13.5px; font-weight: 500;
    cursor: pointer; transition: all 0.15s; border-left: 3px solid transparent;
  }
  .side-item:hover { background: #f9fafb; color: #0a2e1e; }
  .side-item.active { background: #f0fdf4; color: #0a2e1e; border-left-color: #16a34a; font-weight: 700; }
  .side-item span:first-child { font-size: 16px; width: 22px; text-align: center; }
  .admin-content { margin-left: 240px; flex: 1; padding: 40px 36px; background: #f8fafc; min-height: 100vh; }
  .page-title { font-family: 'Playfair Display', Georgia, serif; font-size: 26px; font-weight: 700; color: #0a2e1e; margin-bottom: 32px; }
  .stats-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px,1fr)); gap: 18px; margin-bottom: 32px; }
  .s-box { background: white; border-radius: 16px; padding: 24px; border: 1px solid #e5e7eb; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .s-box-ic { font-size: 24px; margin-bottom: 10px; }
  .s-box-val { font-family: 'Playfair Display', Georgia, serif; font-size: 2.2rem; font-weight: 700; color: #0a2e1e; }
  .s-box-lbl { font-size: 12px; color: #9ca3af; font-weight: 600; margin-top: 3px; }
  .panel { background: white; border-radius: 16px; border: 1px solid #e5e7eb; overflow: hidden; margin-bottom: 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .panel-hd { padding: 16px 24px; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; justify-content: space-between; background: #fafafa; }
  .panel-ttl { font-size: 14px; font-weight: 700; color: #0a2e1e; }
  .panel-bd { padding: 24px; }
  .tbl-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  th { background: #f8fafc; padding: 12px 18px; text-align: left; font-weight: 700; color: #6b7280; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
  td { padding: 14px 18px; border-top: 1px solid #f5f5f5; color: #374151; vertical-align: middle; }
  tr:hover td { background: #fafff8; }
  .btn-s { padding: 7px 14px; border-radius: 8px; font-size: 12px; font-weight: 700; transition: all 0.2s; }
  .btn-s-p { background: #0a2e1e; color: white; }
  .btn-s-p:hover { background: #16a34a; }
  .btn-s-d { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
  .btn-s-d:hover { background: #fee2e2; }
  .badge { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; }
  .bg { background: #dcfce7; color: #16a34a; }
  .br { background: #fee2e2; color: #dc2626; }
  .bgr { background: #f3f4f6; color: #6b7280; }
  .two-col { display: grid; grid-template-columns: 1fr 1.4fr; gap: 24px; }
  .two-col-eq { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .tbl-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  th { background: #f8fafc; padding: 12px 18px; text-align: left; font-weight: 700; color: #9ca3af; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; }
  td { padding: 14px 18px; border-top: 1px solid #f5f5f5; color: #374151; }
  tr:hover td { background: #fafff8; }
  .btn-s { padding: 7px 14px; border-radius: 8px; font-size: 12px; font-weight: 700; transition: all 0.2s; }
  .btn-s-p { background: #0a2e1e; color: white; }
  .btn-s-p:hover { background: #16a34a; }
  .btn-s-d { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
  .btn-s-d:hover { background: #fee2e2; }
  .badge { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; }
  .bg { background: #dcfce7; color: #16a34a; }
  .br { background: #fee2e2; color: #dc2626; }
  .bgr { background: #f3f4f6; color: #6b7280; }
  .two-col { display: grid; grid-template-columns: 1fr 1.4fr; gap: 24px; }
  .two-col-eq { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

  /* FOOTER */
  footer {
    background: linear-gradient(135deg, #071a10 0%, #0a2e1e 100%);
    color: rgba(255,255,255,0.4); padding: 48px;
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;
    border-top: 1px solid rgba(74,222,128,0.1);
  }
  .foot-brand { font-family: 'Playfair Display', Georgia, serif; font-size: 20px; font-weight: 700; color: white; }
  .foot-copy { font-size: 12.5px; margin-top: 4px; }
  .foot-copy a { color: #4ade80; font-weight: 700; }
  .foot-copy a:hover { color: #22c55e; }
  .foot-links { display: flex; gap: 24px; font-size: 13px; }
  .foot-links a { color: rgba(255,255,255,0.4); transition: color 0.2s; cursor: pointer; }
  .foot-links a:hover { color: #4ade80; }

  @media (max-width: 900px) {
    .nav { padding: 0 20px; }
    .how-grid { grid-template-columns: 1fr 1fr; }
    .how-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .two-col, .two-col-eq, .contact-grid { grid-template-columns: 1fr; }
    .admin-side { width: 100%; position: relative; top: 0; }
    .admin-wrap { flex-direction: column; }
    .admin-content { margin-left: 0; padding: 20px 16px; }
    .hero-stats { flex-direction: column; gap: 0; }
    .hero-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 16px 24px; }
  }
  @media (max-width: 600px) {
    .hero h1 { font-size: 2.8rem; letter-spacing: -1px; }
    .how-grid { grid-template-columns: 1fr; }
    footer { flex-direction: column; text-align: center; padding: 32px 24px; }
    .foot-links { justify-content: center; }
    .products-grid { grid-template-columns: repeat(2, 1fr); }
    .cat-tab { padding: 8px 14px; font-size: 12px; }
  }
`;

function Toast({ msg, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3200); return () => clearTimeout(t); }, []);
  return <div className="toast">{msg}</div>;
}

function WAFloat() {
  return (
    <a className="wa-float" href={`https://wa.me/${WHATSAPP}?text=Hola%20Minimarket%20Javivi%2C%20tengo%20una%20consulta`} target="_blank" rel="noreferrer" title="WhatsApp">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  );
}

function PromoCarrusel({ promos, waNumber }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const goTo = (i) => setIdx((i + promos.length) % promos.length);
  const reset = (fn) => { clearInterval(timerRef.current); fn(); timerRef.current = setInterval(()=>setIdx(p=>(p+1)%promos.length), 5000); };
  useEffect(() => {
    timerRef.current = setInterval(()=>setIdx(p=>(p+1)%promos.length), 5000);
    return () => clearInterval(timerRef.current);
  }, [promos.length]);

  return (
    <div className="carrusel-wrap">
      <div className="carrusel-inner" style={{transform:`translateX(-${idx*100}%)`}}>
        {promos.map((p,i)=>(
          <div className="carrusel-slide" key={p.id}>
            {/* Foto */}
            <div className="carrusel-img-wrap">
              {p.foto_url
                ? <img src={p.foto_url} alt={p.nombre} onError={e=>{e.target.style.display="none"; e.target.nextSibling.style.display="flex";}}/>
                : null
              }
              <div style={{display: p.foto_url ? "none" : "flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%", fontSize:36}}>🔥</div>
            </div>

            {/* Info */}
            <div className="carrusel-content">
              <div className="carrusel-tag">🔥 Oferta especial</div>
              <div className="carrusel-name">{p.nombre}</div>
              <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
                <div className="carrusel-prices">
                  {p.precio_original && <span className="carrusel-price-old">{fmtPeso(p.precio_original)}</span>}
                  <span className="carrusel-price-new">{fmtPeso(p.precio_oferta)}</span>
                </div>
                <a href={`https://wa.me/${waNumber}?text=Hola%2C%20me%20interesa%20${encodeURIComponent(p.nombre)}`} target="_blank" rel="noreferrer">
                  <button className="carrusel-cta">💬 Consultar →</button>
                </a>
              </div>
            </div>

            {/* Caja ahorro */}
            {p.precio_original && (
              <div className="carrusel-deco">
                <div className="carrusel-deco-box">
                  <div className="lbl">Ahorra con tu descuento</div>
                  <div className="num">{fmtPeso(p.precio_original)}</div>
                  <div className="sep">↓</div>
                  <div className="price">{fmtPeso(p.precio_oferta)}</div>
                  <div className="save">Ahorras {fmtPeso(p.precio_original - p.precio_oferta)}</div>
                </div>
              </div>
            )}

            <div className="carrusel-counter">{i+1}/{promos.length}</div>
          </div>
        ))}
      </div>
      {promos.length > 1 && (<>
        <button className="carrusel-btn carrusel-btn-prev" onClick={()=>reset(()=>goTo(idx-1))}>‹</button>
        <button className="carrusel-btn carrusel-btn-next" onClick={()=>reset(()=>goTo(idx+1))}>›</button>
        <div className="carrusel-dots">
          {promos.map((_,i)=>(
            <div key={i} className={`carrusel-dot ${i===idx?"active":""}`} onClick={()=>reset(()=>setIdx(i))}/>
          ))}
        </div>
      </>)}
    </div>
  );
}

function Landing({ productos, categorias, promos }) {
  const [catSel, setCatSel] = useState("all");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "consulta", mensaje: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const catalogRef = useRef(null);
  const contactRef = useRef(null);

  const [expandedCards, setExpandedCards] = useState({});
  const toggleDesc = (id) => setExpandedCards(prev => ({...prev, [id]: !prev[id]}));

  const filtered = productos.filter(p =>
    (catSel === "all" || p.categoria_id === catSel) &&
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const handleContact = async () => {
    if (!form.nombre.trim() || !form.mensaje.trim()) { setToast("Por favor completa tu nombre y mensaje."); return; }
    setSending(true);
    await supabase.from("contacto_mensajes").insert({ nombre_contacto: form.nombre, email_contacto: form.email, tipo: form.tipo, mensaje: form.mensaje });
    setForm({ nombre: "", email: "", tipo: "consulta", mensaje: "" });
    setToast("¡Mensaje enviado! Te respondemos pronto 💬");
    setSending(false);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-mesh"/>
        <div className="hero-grid"/>
        <div className="hero-inner">
          <div className="hero-logo-wrap"><LogoSVG size={120}/></div>
          <div className="hero-tag"><div className="hero-tag-dot"/>Sistema de Puntos & Canje</div>
          <h1>Tu fidelidad tiene<br/><em>recompensa real</em></h1>
          <p className="hero-sub">Acumula puntos con cada compra en Minimarket Javivi y canjéalos por increíbles productos directamente en tienda.</p>
          <div className="hero-btns">
            <button className="btn-hero-primary" onClick={() => catalogRef.current?.scrollIntoView({ behavior: "smooth" })}>Ver catálogo →</button>
            <button className="btn-hero-ghost" onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}>Contacto</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">{productos.length || "∞"}</div><div className="hero-stat-lbl">Productos</div></div>
            <div className="hero-stat"><div className="hero-stat-num">{categorias.length}</div><div className="hero-stat-lbl">Categorías</div></div>
            <div className="hero-stat"><div className="hero-stat-num">$0</div><div className="hero-stat-lbl">Costo de canje</div></div>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section how-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="s-tag" style={{color:"#4ade80"}}>Simple y transparente</div>
            <h2 className="s-title s-title-white">¿Cómo funciona?</h2>
          </div>
          <div className="how-grid">
            {[["01","🛒","Compra en Javivi","Realiza tus compras habituales. Cada compra en el minimarket suma puntos a tu cuenta automáticamente."],
              ["02","⭐","Acumula puntos","Tu saldo crece con cada visita. Consulta en tienda cuántos puntos tienes disponibles en cualquier momento."],
              ["03","🎁","Elige tu premio","Revisa este catálogo, escoge el producto que más te guste y confirma que tienes los puntos necesarios."],
              ["04","🏪","Canjea en tienda","Visítanos con tu nombre. Sin apps, sin formularios complicados. El canje es presencial y al instante."],
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

      {/* CARRUSEL PROMOCIONES */}
      {promos.length > 0 && <PromoCarrusel promos={promos} waNumber={WHATSAPP}/>}

      <div className="divider"/>

      {/* CATÁLOGO */}
      <section className="section cat-section" ref={catalogRef} id="catalogo-section" style={{padding:"80px 0"}}>
        <div style={{textAlign:"center",padding:"0 24px",marginBottom:48}}>
          <div className="s-tag">Catálogo de canje</div>
          <h2 className="s-title">¿Qué puedes canjear?</h2>
          <p className="s-sub">Consulta tus puntos en tienda y escoge tu premio favorito</p>
        </div>

        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px"}}>
          {/* Search */}
          <div className="search-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input placeholder="Buscar producto..." value={search} onChange={e=>setSearch(e.target.value)}/>
            {search && <button onClick={()=>setSearch("")} style={{background:"none",border:"none",color:"#9ca3af",fontSize:20,cursor:"pointer",lineHeight:1,padding:0}}>×</button>}
          </div>

          {/* Categorías — pills con ícono */}
          <div className="cat-tabs">
            <button className={`cat-tab ${catSel==="all"?"active":""}`} onClick={()=>setCatSel("all")}>
              <span className="cat-tab-icon">🏪</span>
              Todos
              <span className="cat-tab-count">({productos.length})</span>
            </button>
            {categorias.map(c => {
              const count = productos.filter(p=>p.categoria_id===c.id).length;
              return (
                <button key={c.id} className={`cat-tab ${catSel===c.id?"active":""}`} onClick={()=>setCatSel(c.id)}>
                  <span className="cat-tab-icon">{c.icono}</span>
                  {c.nombre}
                  <span className="cat-tab-count">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          {filtered.length===0 ? (
            <div className="empty"><div className="empty-icon">🔍</div><p>No se encontraron productos.</p></div>
          ) : (
            <div className="products-grid">
              {filtered.map(p=>(
                <div className="prod-card" key={p.id}>
                  {p.destacado && <div className="dest-badge">⭐ DESTACADO</div>}
                  <div className="prod-img">
                    {p.foto_url
                      ? <img src={p.foto_url} alt={p.nombre}/>
                      : <div className="prod-placeholder">🎁</div>
                    }
                  </div>
                  <div className="prod-body">
                    {p.categorias?.nombre && <div className="prod-cat">{p.categorias.icono} {p.categorias.nombre}</div>}
                    <div className="prod-name">{p.nombre}</div>
                    {p.descripcion && (<>
                      <div className={`prod-desc ${expandedCards[p.id]?"":"prod-desc-short"}`}>{p.descripcion}</div>
                      {p.descripcion.length > 60 && (
                        <button className="prod-desc-toggle" onClick={()=>toggleDesc(p.id)}>
                          {expandedCards[p.id]?"Ver menos ↑":"Ver más ↓"}
                        </button>
                      )}
                    </>)}
                    <div className="pts-badge">
                      <div className="pts-star">⭐</div>
                      <div>
                        <div className="pts-num">{fmtPuntos(p.puntos_requeridos)}</div>
                        <div className="pts-label">puntos</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="divider"/>

      {/* CONTACTO */}
      <section className="section contact-section" ref={contactRef} id="contacto-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="s-tag">Estamos para ti</div>
            <h2 className="s-title">Contáctanos</h2>
            <p className="s-sub">Consultas, sugerencias o reclamos. Te respondemos a la brevedad.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Minimarket Javivi</h3>
              <p>Escríbenos si tienes dudas sobre tus puntos, productos del catálogo o cualquier otra consulta.</p>
              <div className="c-item"><div className="c-icon">📍</div><span>Visítanos en nuestra tienda</span></div>
              <div className="c-item"><div className="c-icon">💬</div><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" style={{color:"#16a34a",fontWeight:700}}>Escríbenos por WhatsApp</a></div>
              <div className="c-item"><div className="c-icon">🎁</div><span>Canje presencial, sin costo</span></div>
              <div className="c-tip"><strong>¿Quieres saber tus puntos?</strong><br/>Visítanos o escríbenos por WhatsApp con tu nombre y te informamos al instante.</div>
            </div>
            <div style={{background:"white",borderRadius:20,padding:36,border:"1px solid #e5e7eb",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"}}>
              <div className="form-group"><label className="form-label">Tu nombre *</label><input className="form-input" placeholder="María González" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Email (opcional)</label><input className="form-input" type="email" placeholder="maria@correo.cl" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Tipo de mensaje</label>
                <select className="form-input" value={form.tipo} onChange={e=>setForm({...form,tipo:e.target.value})}>
                  <option value="consulta">💬 Consulta</option>
                  <option value="sugerencia">💡 Sugerencia</option>
                  <option value="reclamo">⚠️ Reclamo</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Mensaje *</label><textarea className="form-textarea" placeholder="Escribe tu mensaje..." value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})}/></div>
              <button className="btn-submit" onClick={handleContact} disabled={sending}>{sending?"Enviando...":"Enviar mensaje"}</button>
            </div>
          </div>
        </div>
      </section>

      {toast && <Toast msg={toast} onClose={()=>setToast(null)}/>}
    </>
  );
}

function Admin({ showToast }) {
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
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const [p,c,pr,m] = await Promise.all([
      supabaseAdmin.from("productos").select("*, categorias(nombre,icono)").order("nombre"),
      supabaseAdmin.from("categorias").select("*").order("orden"),
      supabaseAdmin.from("promociones").select("*").order("orden"),
      supabaseAdmin.from("contacto_mensajes").select("*").order("created_at",{ascending:false}),
    ]);
    setProductos(p.data||[]); setCategorias(c.data||[]); setPromos(pr.data||[]); setMensajes(m.data||[]);
  };

  useEffect(() => { if (user) load(); }, [user]);

  const handleLogin = async () => {
    if (!clave.trim()) { setLoginErr("Ingresa tu clave"); return; }
    const hash = await hashPassword(clave);
    const { data, error } = await supabaseAdmin.from("admins").select("*").eq("password_hash", hash).single();
    if (error || !data) { setLoginErr("Clave incorrecta"); return; }
    setUser(data);
  };

  const uploadFoto = async (file, bucket) => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabaseAdmin.storage.from(bucket).upload(path, file, { upsert: true });
    if (error) { showToast(`Error subiendo foto: ${error.message}`); return null; }
    const { data } = supabaseAdmin.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  };

  const saveProd = async () => {
    if (!prodForm.nombre.trim()) { showToast("El nombre es obligatorio"); return; }
    setSaving(true);
    let foto_url = prodForm.foto_url || null;
    if (prodFile) {
      const url = await uploadFoto(prodFile, "productos");
      if (url) foto_url = url;
      else { setSaving(false); return; }
    }
    const d = {
      nombre: prodForm.nombre,
      descripcion: prodForm.descripcion || null,
      foto_url,
      puntos_requeridos: parseInt(prodForm.puntos_requeridos) || 0,
      categoria_id: prodForm.categoria_id || null,
      activo: prodForm.activo,
      destacado: prodForm.destacado,
    };
    const { error } = prodForm.id
      ? await supabaseAdmin.from("productos").update(d).eq("id", prodForm.id)
      : await supabaseAdmin.from("productos").insert(d);
    if (error) { showToast(`Error: ${error.message}`); setSaving(false); return; }
    showToast("Producto guardado ✅");
    setProdForm({nombre:"",descripcion:"",puntos_requeridos:0,categoria_id:"",activo:true,destacado:false});
    setProdFile(null); load(); setSaving(false);
  };

  const savePromo = async () => {
    if (!promoForm.nombre.trim()||!promoForm.precio_oferta) { showToast("Nombre y precio son obligatorios"); return; }
    setSaving(true);
    let foto_url = promoForm.foto_url || null;
    if (promoFile) {
      const url = await uploadFoto(promoFile, "promociones");
      if (url) foto_url = url;
      else { showToast("Error al subir la foto"); setSaving(false); return; }
    }
    const d = {
      nombre: promoForm.nombre,
      descripcion: promoForm.descripcion || null,
      foto_url,
      precio_oferta: parseFloat(promoForm.precio_oferta) || 0,
      precio_original: parseFloat(promoForm.precio_original) || null,
      activo: promoForm.activo,
    };
    const { error } = promoForm.id
      ? await supabaseAdmin.from("promociones").update(d).eq("id", promoForm.id)
      : await supabaseAdmin.from("promociones").insert(d);
    if (error) { showToast(`Error: ${error.message}`); setSaving(false); return; }
    showToast("Promoción guardada ✅");
    setPromoForm({nombre:"",descripcion:"",precio_original:"",precio_oferta:"",activo:true});
    setPromoFile(null); load(); setSaving(false);
  };

  if (!user) return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#071a10,#0a2e1e)",paddingTop:72}}>
      <div style={{background:"white",borderRadius:24,padding:48,width:"100%",maxWidth:340,boxShadow:"0 24px 80px rgba(0,0,0,0.3)"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{fontSize:40,marginBottom:12}}>🔐</div>
          <h2 style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:22,color:G}}>Panel Admin</h2>
          <p style={{fontSize:13,color:"#9ca3af",marginTop:4}}>Minimarket Javivi</p>
        </div>
        {loginErr && <div style={{background:"#fee2e2",color:"#dc2626",padding:"10px 14px",borderRadius:10,fontSize:13,marginBottom:16,textAlign:"center"}}>{loginErr}</div>}
        <div className="form-group">
          <label className="form-label">Clave de acceso</label>
          <input
            className="form-input" type="password"
            placeholder="••••••••"
            value={clave}
            onChange={e=>setClave(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&handleLogin()}
            style={{textAlign:"center",fontSize:20,letterSpacing:6}}
            autoFocus
          />
        </div>
        <button className="btn-submit" onClick={handleLogin}>Ingresar →</button>
      </div>
    </div>
  );

  const nav = [["dashboard","📊","Dashboard"],["productos","🎁","Catálogo"],["categorias","🏷️","Categorías"],["promociones","🔥","Promociones"],["mensajes","💬","Mensajes"]];

  return (
    <div className="admin-wrap">
      <div className="admin-side">
        {/* Encabezado sidebar — sin logo, solo texto */}
        <div style={{padding:"8px 20px 20px",borderBottom:"1px solid #f0f0f0",marginBottom:8}}>
          <div style={{fontSize:15,fontWeight:800,color:"#0a2e1e",fontFamily:"'Playfair Display',Georgia,serif"}}>Javivi Admin</div>
          <div style={{fontSize:11,color:"#9ca3af",fontWeight:600,marginTop:2,letterSpacing:"0.5px"}}>{user?.nombre}</div>
        </div>
        <div className="side-section-lbl">Menú</div>
        {nav.map(([k,ic,lbl])=>(
          <div key={k} className={`side-item ${tab===k?"active":""}`} onClick={()=>setTab(k)}><span>{ic}</span><span>{lbl}</span></div>
        ))}
        <div style={{marginTop:16,borderTop:"1px solid #f0f0f0",paddingTop:12}}>
          <div className="side-item" onClick={()=>setUser(null)}><span>🚪</span><span style={{color:"#dc2626"}}>Cerrar sesión</span></div>
        </div>
      </div>
      <div className="admin-content">

        {tab==="dashboard" && (<>
          <h1 className="page-title">Dashboard</h1>
          <div className="stats-row">
            {[["🎁",productos.filter(p=>p.activo).length,"Productos activos"],["🔥",promos.filter(p=>p.activo).length,"Promociones"],["💬",mensajes.filter(m=>m.estado==="pendiente").length,"Mensajes nuevos"]].map(([ic,v,l])=>(
              <div className="s-box" key={l}><div className="s-box-ic">{ic}</div><div className="s-box-val">{v}</div><div className="s-box-lbl">{l}</div></div>
            ))}
          </div>
          <div className="panel">
            <div className="panel-hd"><span className="panel-ttl">Mensajes recientes</span></div>
            <div className="panel-bd">
              {mensajes.slice(0,5).map(m=>(
                <div key={m.id} style={{padding:"14px 0",borderBottom:"1px solid #f5f5f5",display:"flex",justifyContent:"space-between",gap:12}}>
                  <div><div style={{fontWeight:700,fontSize:14,color:G}}>{m.nombre_contacto}</div><div style={{fontSize:13,color:"#6b7280",marginTop:3}}>{m.mensaje?.slice(0,90)}...</div></div>
                  <span className={`badge ${m.estado==="pendiente"?"br":"bg"}`}>{m.estado}</span>
                </div>
              ))}
              {mensajes.length===0&&<p style={{color:"#9ca3af",fontSize:14}}>Sin mensajes aún.</p>}
            </div>
          </div>
        </>)}

        {tab==="productos" && (<>
          <h1 className="page-title">Catálogo de Productos</h1>
          <div className="two-col">
            <div className="panel">
              <div className="panel-hd">
                <span className="panel-ttl">{prodForm.id?"Editar":"Agregar"} producto</span>
                {prodForm.id&&<button className="btn-s btn-s-d" onClick={()=>setProdForm({nombre:"",descripcion:"",puntos_requeridos:0,categoria_id:"",activo:true,destacado:false})}>Cancelar</button>}
              </div>
              <div className="panel-bd">
                <div className="form-group"><label className="form-label">Foto del producto</label>
                  <input type="file" accept="image/*" className="form-input" style={{padding:"8px"}} onChange={e=>setProdFile(e.target.files[0])}/>
                  {prodForm.foto_url&&<img src={prodForm.foto_url} alt="" style={{width:"100%",height:140,objectFit:"cover",borderRadius:10,marginTop:10}}/>}
                </div>
                <div className="form-group"><label className="form-label">Nombre *</label><input className="form-input" placeholder="Ej: Smart TV 40 pulgadas" value={prodForm.nombre} onChange={e=>setProdForm({...prodForm,nombre:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Descripción</label><textarea className="form-textarea" style={{minHeight:80}} placeholder="Detalles del producto..." value={prodForm.descripcion} onChange={e=>setProdForm({...prodForm,descripcion:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Puntos requeridos *</label><input className="form-input" type="number" placeholder="0" value={prodForm.puntos_requeridos} onChange={e=>setProdForm({...prodForm,puntos_requeridos:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Categoría</label>
                  <select className="form-input" value={prodForm.categoria_id} onChange={e=>setProdForm({...prodForm,categoria_id:e.target.value})}>
                    <option value="">Sin categoría</option>
                    {categorias.map(c=><option key={c.id} value={c.id}>{c.icono} {c.nombre}</option>)}
                  </select>
                </div>
                <div style={{display:"flex",gap:20,marginBottom:18}}>
                  <label style={{display:"flex",gap:7,alignItems:"center",fontSize:13,cursor:"pointer"}}><input type="checkbox" checked={prodForm.activo} onChange={e=>setProdForm({...prodForm,activo:e.target.checked})}/> Activo</label>
                  <label style={{display:"flex",gap:7,alignItems:"center",fontSize:13,cursor:"pointer"}}><input type="checkbox" checked={prodForm.destacado} onChange={e=>setProdForm({...prodForm,destacado:e.target.checked})}/> Destacado</label>
                </div>
                <button className="btn-submit" onClick={saveProd} disabled={saving}>{saving?"Guardando...":prodForm.id?"Actualizar":"Agregar producto"}</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-hd"><span className="panel-ttl">Productos ({productos.length})</span></div>
              <div className="tbl-wrap">
                <table>
                  <thead><tr><th>Producto</th><th>Puntos</th><th>Estado</th><th></th></tr></thead>
                  <tbody>
                    {productos.map(p=>(
                      <tr key={p.id}>
                        <td><div style={{display:"flex",alignItems:"center",gap:12}}>
                          <div style={{width:44,height:44,borderRadius:10,background:"#f0fdf4",overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>
                            {p.foto_url?<img src={p.foto_url} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:"🎁"}
                          </div>
                          <div><div style={{fontWeight:700,fontSize:13,color:G}}>{p.nombre}</div><div style={{fontSize:11,color:"#9ca3af"}}>{p.categorias?.icono} {p.categorias?.nombre||"Sin categoría"}</div></div>
                        </div></td>
                        <td><span style={{fontWeight:800,color:"#78350f",fontSize:13}}>⭐ {fmtPuntos(p.puntos_requeridos)}</span></td>
                        <td><span className={`badge ${p.activo?"bg":"bgr"}`}>{p.activo?"Activo":"Oculto"}</span></td>
                        <td><div style={{display:"flex",gap:6}}>
                          <button className="btn-s btn-s-p" onClick={()=>setProdForm({...p,categoria_id:p.categoria_id||""})}>Editar</button>
                          <button className="btn-s btn-s-d" onClick={async()=>{await supabaseAdmin.from("productos").delete().eq("id",p.id);showToast("Eliminado");load();}}>✕</button>
                        </div></td>
                      </tr>
                    ))}
                    {productos.length===0&&<tr><td colSpan={4} style={{textAlign:"center",color:"#9ca3af",padding:40}}>Sin productos aún.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>)}

        {tab==="categorias" && (<>
          <h1 className="page-title">Categorías</h1>
          <div className="two-col-eq">
            <div className="panel">
              <div className="panel-hd"><span className="panel-ttl">Nueva categoría</span></div>
              <div className="panel-bd">
                <div className="form-group"><label className="form-label">Nombre</label><input className="form-input" placeholder="Ej: Línea Blanca" value={catForm.nombre} onChange={e=>setCatForm({...catForm,nombre:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Icono (emoji)</label><input className="form-input" value={catForm.icono} onChange={e=>setCatForm({...catForm,icono:e.target.value})}/></div>
                <button className="btn-submit" onClick={async()=>{if(!catForm.nombre.trim())return;await supabaseAdmin.from("categorias").insert(catForm);showToast("Categoría creada ✅");setCatForm({nombre:"",icono:"🎁"});load();}}>Agregar categoría</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-hd"><span className="panel-ttl">Categorías ({categorias.length})</span></div>
              <div className="panel-bd">
                {categorias.map(c=>(
                  <div key={c.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 0",borderBottom:"1px solid #f5f5f5"}}>
                    <span style={{fontSize:15}}>{c.icono} <strong>{c.nombre}</strong></span>
                    <button className="btn-s btn-s-d" onClick={async()=>{await supabaseAdmin.from("categorias").delete().eq("id",c.id);showToast("Eliminada");load();}}>✕</button>
                  </div>
                ))}
                {categorias.length===0&&<p style={{color:"#9ca3af",fontSize:14}}>Sin categorías.</p>}
              </div>
            </div>
          </div>
        </>)}

        {tab==="promociones" && (<>
          <h1 className="page-title">Promociones</h1>
          <div className="two-col">
            <div className="panel">
              <div className="panel-hd">
                <span className="panel-ttl">{promoForm.id?"Editar":"Nueva"} promoción</span>
                {promoForm.id&&<button className="btn-s btn-s-d" onClick={()=>setPromoForm({nombre:"",descripcion:"",precio_original:"",precio_oferta:"",activo:true})}>Cancelar</button>}
              </div>
              <div className="panel-bd">
                <div className="form-group"><label className="form-label">Foto</label>
                  <input type="file" accept="image/*" className="form-input" style={{padding:"8px"}} onChange={e=>setPromoFile(e.target.files[0])}/>
                  {promoForm.foto_url && !promoFile && (
                    <div style={{marginTop:8,position:"relative",display:"inline-block"}}>
                      <img src={promoForm.foto_url} alt="" style={{width:80,height:80,objectFit:"contain",borderRadius:8,border:"1px solid #e5e7eb",background:"#f9fafb",padding:4}}/>
                      <div style={{fontSize:11,color:"#9ca3af",marginTop:4}}>Foto actual</div>
                    </div>
                  )}
                </div>
                <div className="form-group"><label className="form-label">Nombre *</label><input className="form-input" value={promoForm.nombre} onChange={e=>setPromoForm({...promoForm,nombre:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Descripción</label><textarea className="form-textarea" style={{minHeight:72}} value={promoForm.descripcion} onChange={e=>setPromoForm({...promoForm,descripcion:e.target.value})}/></div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  <div className="form-group"><label className="form-label">Precio original</label><input className="form-input" type="number" placeholder="0" value={promoForm.precio_original} onChange={e=>setPromoForm({...promoForm,precio_original:e.target.value})}/></div>
                  <div className="form-group"><label className="form-label">Precio oferta *</label><input className="form-input" type="number" placeholder="0" value={promoForm.precio_oferta} onChange={e=>setPromoForm({...promoForm,precio_oferta:e.target.value})}/></div>
                </div>
                <label style={{display:"flex",gap:7,alignItems:"center",fontSize:13,cursor:"pointer",marginBottom:18}}><input type="checkbox" checked={promoForm.activo} onChange={e=>setPromoForm({...promoForm,activo:e.target.checked})}/> Activa</label>
                <button className="btn-submit" onClick={savePromo} disabled={saving}>{saving?"Guardando...":promoForm.id?"Actualizar":"Crear promoción"}</button>
              </div>
            </div>
            <div className="panel">
              <div className="panel-hd"><span className="panel-ttl">Promociones ({promos.length})</span></div>
              <div className="tbl-wrap">
                <table>
                  <thead><tr><th>Nombre</th><th>Precio</th><th>Estado</th><th></th></tr></thead>
                  <tbody>
                    {promos.map(p=>(
                      <tr key={p.id}>
                        <td style={{fontWeight:600,fontSize:13}}>{p.nombre}</td>
                        <td><span style={{fontWeight:800,color:"#dc2626"}}>{fmtPeso(p.precio_oferta)}</span></td>
                        <td><span className={`badge ${p.activo?"bg":"bgr"}`}>{p.activo?"Activa":"Inactiva"}</span></td>
                        <td><div style={{display:"flex",gap:6}}>
                          <button className="btn-s btn-s-p" onClick={()=>setPromoForm({
                            ...p,
                            precio_original: p.precio_original || "",
                            precio_oferta: p.precio_oferta || "",
                          })}>Editar</button>
                          <button className="btn-s btn-s-d" onClick={async()=>{await supabaseAdmin.from("promociones").delete().eq("id",p.id);showToast("Eliminada");load();}}>✕</button>
                        </div></td>
                      </tr>
                    ))}
                    {promos.length===0&&<tr><td colSpan={4} style={{textAlign:"center",color:"#9ca3af",padding:32}}>Sin promociones.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>)}

        {tab==="mensajes" && (<>
          <h1 className="page-title">Mensajes de clientes</h1>
          <div className="panel">
            <div className="panel-bd">
              {mensajes.map(m=>(
                <div key={m.id} style={{padding:"20px 0",borderBottom:"1px solid #f5f5f5"}}>
                  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:10}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                      <span style={{fontWeight:700,color:G,fontSize:14}}>{m.nombre_contacto}</span>
                      <span className={`badge ${m.tipo==="reclamo"?"br":m.tipo==="sugerencia"?"bgr":"bg"}`}>{m.tipo==="reclamo"?"⚠️ Reclamo":m.tipo==="sugerencia"?"💡 Sugerencia":"💬 Consulta"}</span>
                      <span className={`badge ${m.estado==="pendiente"?"br":"bg"}`}>{m.estado}</span>
                    </div>
                    <div style={{display:"flex",gap:8,alignItems:"center"}}>
                      <span style={{fontSize:12,color:"#9ca3af"}}>{new Date(m.created_at).toLocaleDateString("es-CL")}</span>
                      {m.estado==="pendiente"&&<button className="btn-s btn-s-p" onClick={async()=>{await supabaseAdmin.from("contacto_mensajes").update({estado:"leido"}).eq("id",m.id);showToast("Marcado como leído");load();}}>Leído</button>}
                    </div>
                  </div>
                  <p style={{fontSize:14,color:"#374151",background:"#f8fafc",padding:"12px 16px",borderRadius:12,lineHeight:1.7}}>{m.mensaje}</p>
                  {m.email_contacto&&<p style={{fontSize:12,color:"#9ca3af",marginTop:6}}>📧 {m.email_contacto}</p>}
                </div>
              ))}
              {mensajes.length===0&&<div style={{textAlign:"center",padding:48,color:"#9ca3af"}}><div style={{fontSize:40,marginBottom:8}}>💬</div><p>Sin mensajes aún.</p></div>}
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
  const showToast = (msg) => setToast(msg);

  useEffect(() => {
    Promise.all([
      supabase.from("productos").select("*, categorias(nombre,icono)").eq("activo",true).order("puntos_requeridos"),
      supabase.from("categorias").select("*").eq("activo",true).order("orden"),
      supabase.from("promociones").select("*").eq("activo",true).order("orden"),
    ]).then(([p,c,pr]) => {
      setProductos(p.data||[]);
      setCategorias(c.data||[]);
      setPromos(pr.data||[]);
    });
  }, []);

  return (
    <>
      <style>{css}</style>
      <nav className="nav">
        <div className="nav-brand" onClick={()=>setView("landing")}>
          <LogoSVG size={46}/>
          <div>
            <div className="nav-brand-name">Javivi</div>
            <div className="nav-brand-sub">Minimarket</div>
          </div>
        </div>
        <div className="nav-links">
          <button className="nav-link" onClick={()=>{setView("landing");setTimeout(()=>document.getElementById("catalogo-section")?.scrollIntoView({behavior:"smooth"}),100);}}>Catálogo</button>
          <button className="nav-link" onClick={()=>{setView("landing");setTimeout(()=>document.getElementById("contacto-section")?.scrollIntoView({behavior:"smooth"}),100);}}>Contacto</button>
          <button className="nav-cta" onClick={()=>setView("admin")}>Admin →</button>
        </div>
      </nav>

      {view==="landing" && (
        <div style={{paddingTop:72}}>
          <Landing productos={productos} categorias={categorias} promos={promos}/>
          <footer>
            <div>
              <div className="foot-brand">Minimarket Javivi</div>
              <div className="foot-copy">© {new Date().getFullYear()} Todos los derechos reservados · Desarrollo web por <a href="https://www.tempvs7.cl" target="_blank" rel="noreferrer">TEMPVS7</a></div>
            </div>
            <div className="foot-links">
              <a onClick={()=>document.getElementById("catalogo-section")?.scrollIntoView({behavior:"smooth"})}>Catálogo</a>
              <a onClick={()=>document.getElementById("contacto-section")?.scrollIntoView({behavior:"smooth"})}>Contacto</a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </footer>
        </div>
      )}

      {view==="admin" && (
        <div style={{paddingTop:72}}>
          <Admin showToast={showToast}/>
        </div>
      )}

      <WAFloat/>
      {toast && <Toast msg={toast} onClose={()=>setToast(null)}/>}
    </>
  );
}
