import React from 'react';
import xpackLogo from '../assets/xpack logoa.png';
import { useIsMobile } from '../hooks/useIsMobile';

// ── Canvas dimensions ──
const VW = 1200, VH = 540;
const fX = 290, cX = 600, bX = 910, mY = 240;
const gRx = 92, gRy = 74;

// All lines drawn in the direction of the arrow;
// markerEnd auto-orients the open-V arrowhead.
const MARKER_ID = 'openArrow';

const L = (p: { x1: number; y1: number; x2: number; y2: number }) => (
  <line
    x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2}
    stroke="#000" strokeWidth="1.0"
    markerEnd={`url(#${MARKER_ID})`}
  />
);

const Lbl = ({
  x, y, text,
  a = 'middle' as 'start' | 'middle' | 'end',
}: { x: number; y: number; text: string; a?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={a} dominantBaseline="middle"
    style={{ fontFamily: 'Inter,sans-serif', fontSize: '13px', fill: '#111' }}>
    {text}
  </text>
);

const WhomWeWorkWith: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section style={{ backgroundColor: '#fff', padding: isMobile ? '40px 0 60px' : '60px 0 90px' }}>

      <h2 style={{
        fontFamily: 'Montserrat,sans-serif', fontSize: isMobile ? '32px' : '52px', fontWeight: 800,
        textAlign: 'center', color: '#000', marginBottom: isMobile ? '28px' : '50px', letterSpacing: '-1px',
      }}>
        Whom we work with
      </h2>

      {/* Static container — no scrollbar */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        padding: isMobile ? '0 8px 12px' : '0 40px',
      }}>
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          style={{ width: '100%', maxWidth: '1150px', overflow: 'visible' }}
        >
          <defs>
            {/* Radial glows */}
            <radialGradient id="gfarm" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFDA44" stopOpacity="0.80" />
              <stop offset="55%" stopColor="#FFCC33" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#FFCC33" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gbuy" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFDA44" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFCC33" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFCC33" stopOpacity="0" />
            </radialGradient>

            {/* ── Clean open-V arrowhead marker ──
              orient="auto" rotates it to match the line direction.
              All lines just need markerEnd="url(#openArrow)". */}
            <marker
              id={MARKER_ID}
              viewBox="0 0 10 10"
              refX="9" refY="5"
              markerWidth="7" markerHeight="7"
              orient="auto"
            >
              <path
                d="M 0 0 L 10 5 L 0 10"
                fill="none"
                stroke="#000"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </marker>
          </defs>

          {/* ── GLOWS ── */}
          <ellipse cx={fX} cy={mY} rx={gRx + 38} ry={gRy + 34} fill="url(#gfarm)" />
          <ellipse cx={bX} cy={mY} rx={gRx + 16} ry={gRy + 16} fill="url(#gbuy)" />

          {/* ── NODE LABELS ── */}
          <text x={fX} y={mY + 5} textAnchor="middle" dominantBaseline="middle"
            style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '16px', fontWeight: '900', fill: '#000' }}>
            LOCAL FARMERS
          </text>
          <text x={bX} y={mY + 5} textAnchor="middle" dominantBaseline="middle"
            style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '16px', fontWeight: '900', fill: '#000' }}>
            BUYERS
          </text>

          {/* ── CENTER LOGO ── */}
          <image
            href={xpackLogo}
            x={isMobile ? cX - 110 : cX - 87}
            y={isMobile ? mY - 97 : mY - 77}
            width={isMobile ? "220" : "175"}
            height={isMobile ? "195" : "155"}
          />

          {/* ══════════════════════════════════════
            BIDIRECTIONAL: LOCAL FARMERS ↔ Center
            Draw each arrow in the direction it travels;
            markerEnd auto-orients the arrowhead.

            Top lane:  farmer-right → center-left  (goes RIGHT →)
            Bottom lane: center-left → farmer-right (goes LEFT ←)
        ══════════════════════════════════════ */}
          {/* → top */}
          <L x1={fX + gRx} y1={mY - 14} x2={isMobile ? cX - 105 : cX - 68} y2={mY - 14} />
          {/* ← bottom: drawn from center toward farmer so arrowhead faces left */}
          <L x1={isMobile ? cX - 105 : cX - 68} y1={mY + 14} x2={fX + gRx} y2={mY + 14} />

          {/* ══════════════════════════════════════
            BIDIRECTIONAL: Center ↔ BUYERS
            Top lane: center-right → buyer-left  (goes RIGHT →)
            Bottom lane: buyer-left → center-right (goes LEFT ←)
        ══════════════════════════════════════ */}
          {/* → top */}
          <L x1={isMobile ? cX + 105 : cX + 68} y1={mY - 14} x2={bX - gRx} y2={mY - 14} />
          {/* ← bottom */}
          <L x1={bX - gRx} y1={mY + 14} x2={isMobile ? cX + 105 : cX + 68} y2={mY + 14} />

          {/* ══════════════════════════════════════
            SINGLE: Natural farming ← from LOCAL FARMERS
            Draw from farmer-left rightward toward Natural farming label end,
            BUT we want the arrowhead at the label side (left end).
            So draw from farmer-left → to x=110 (arrowhead points left ✓)
        ══════════════════════════════════════ */}
          <L x1={fX - gRx} y1={mY} x2={110} y2={mY} />
          <Lbl x={104} y={mY} text="Natural farming" a="end" />

          {/* ══════════════════════════════════════
            SINGLE: BUYERS → Importers
            Draw from buyer-right toward Importers (→)
        ══════════════════════════════════════ */}
          <L x1={bX + gRx} y1={mY} x2={bX + gRx + 85} y2={mY} />
          <Lbl x={bX + gRx + 93} y={mY} text="Importers" a="start" />


          {/* ══════════════════════════════════════
            LOCAL FARMERS — 3 diagonal arrows downward
            All go FROM node TOWARD label (↙ ↓ ↘)
        ══════════════════════════════════════ */}
          <L x1={fX - 56} y1={mY + gRy} x2={fX - 132} y2={mY + gRy + 95} />
          <Lbl x={fX - 132} y={mY + gRy + 112} text="Organic farming" />

          <L x1={fX} y1={mY + gRy} x2={fX} y2={mY + gRy + 95} />
          <Lbl x={fX} y={mY + gRy + 112} text="Semi Organic farm" />

          <L x1={fX + 56} y1={mY + gRy} x2={fX + 132} y2={mY + gRy + 95} />
          <Lbl x={fX + 132} y={mY + gRy + 112} text="Conventional farm" />

          {/* ══════════════════════════════════════
            BUYERS — 3 diagonal arrows downward
            All go FROM node TOWARD label (↙ ↓ ↘)
        ══════════════════════════════════════ */}
          <L x1={bX - 56} y1={mY + gRy} x2={bX - 132} y2={mY + gRy + 95} />
          <Lbl x={bX - 132} y={mY + gRy + 112} text="Suppliers" />

          <L x1={bX} y1={mY + gRy} x2={bX} y2={mY + gRy + 95} />
          <Lbl x={bX} y={mY + gRy + 112} text="Distributors" />

          <L x1={bX + 56} y1={mY + gRy} x2={bX + 132} y2={mY + gRy + 95} />
          <Lbl x={bX + 132} y={mY + gRy + 112} text="Wholesalers" />

        </svg>
      </div>
    </section>
  );
};

export default WhomWeWorkWith;
