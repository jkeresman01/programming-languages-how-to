const ACCENT = '#a848e5';
const LEVELS = [
  'Equality',
  'Comparison',
  'Addition',
  'Multiplication',
  'Unary',
];
const TOP = 60;
const ROW_H = 44;

export default function PrecedenceDiagram() {
  const font = 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif';

  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <svg
        viewBox="0 0 660 330"
        role="img"
        aria-label="Grammar levels from top to bottom: equality, comparison, addition, multiplication, unary. Precedence goes from low at the top to high at the bottom."
        style={{
          width: '100%',
          maxWidth: 660,
          display: 'block',
          margin: '0 auto',
        }}
      >
        <defs>
          <marker
            id="pd-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* Left: GRAMMAR axis */}
        <text
          x={90}
          y={38}
          textAnchor="middle"
          fontSize={16}
          fontFamily={font}
          fill="currentColor"
        >
          TOP
        </text>
        <line
          x1={90}
          y1={150}
          x2={90}
          y2={50}
          stroke="currentColor"
          strokeWidth={1.5}
          markerEnd="url(#pd-arrow)"
        />
        <rect
          x={30}
          y={150}
          width={120}
          height={40}
          rx={8}
          fill={ACCENT}
          fillOpacity={0.08}
          stroke={ACCENT}
          strokeWidth={2.5}
        />
        <text
          x={90}
          y={176}
          textAnchor="middle"
          fontSize={15}
          fontWeight={700}
          fontFamily={font}
          fill="currentColor"
        >
          GRAMMAR
        </text>
        <line
          x1={90}
          y1={190}
          x2={90}
          y2={290}
          stroke="currentColor"
          strokeWidth={1.5}
          markerEnd="url(#pd-arrow)"
        />
        <text
          x={90}
          y={314}
          textAnchor="middle"
          fontSize={16}
          fontFamily={font}
          fill="currentColor"
        >
          DOWN
        </text>

        {/* Middle: the stack of rules */}
        {LEVELS.map((label, i) => (
          <g key={label}>
            <rect
              x={190}
              y={TOP + i * ROW_H}
              width={260}
              height={ROW_H}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.6}
              strokeWidth={1.5}
            />
            <text
              x={320}
              y={TOP + i * ROW_H + ROW_H / 2 + 6}
              textAnchor="middle"
              fontSize={18}
              fontFamily={font}
              fill="currentColor"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Highlight: addition + multiplication */}
        <rect
          x={184}
          y={TOP + 2 * ROW_H - 4}
          width={272}
          height={2 * ROW_H + 8}
          rx={8}
          fill={ACCENT}
          fillOpacity={0.08}
          stroke={ACCENT}
          strokeWidth={2.5}
        />

        {/* Right: PRECEDENCE axis */}
        <text
          x={560}
          y={38}
          textAnchor="middle"
          fontSize={16}
          fontFamily={font}
          fill="currentColor"
        >
          LOW
        </text>
        <line
          x1={560}
          y1={150}
          x2={560}
          y2={50}
          stroke="currentColor"
          strokeWidth={1.5}
          markerEnd="url(#pd-arrow)"
        />
        <rect
          x={490}
          y={150}
          width={140}
          height={40}
          rx={8}
          fill={ACCENT}
          fillOpacity={0.08}
          stroke={ACCENT}
          strokeWidth={2.5}
        />
        <text
          x={560}
          y={176}
          textAnchor="middle"
          fontSize={15}
          fontWeight={700}
          fontFamily={font}
          fill="currentColor"
        >
          PRECEDENCE
        </text>
        <line
          x1={560}
          y1={190}
          x2={560}
          y2={290}
          stroke="currentColor"
          strokeWidth={1.5}
          markerEnd="url(#pd-arrow)"
        />
        <text
          x={560}
          y={314}
          textAnchor="middle"
          fontSize={16}
          fontFamily={font}
          fill="currentColor"
        >
          HIGH
        </text>
      </svg>
    </div>
  );
}
