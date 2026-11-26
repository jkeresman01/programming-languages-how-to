const ACCENT = '#a848e5';
const FONT = 'ui-monospace, SFMono-Regular, Menlo, monospace';

type Box = {
  cx: number;
  y: number;
  w: number;
  h: number;
  title: string;
  detail?: string;
  token?: boolean;
};

// AST for: 2 + 3
const root: Box = { cx: 200, y: 22, w: 140, h: 36, title: 'Expr.Binary' };

const kids: Box[] = [
  { cx: 70, y: 115, w: 124, h: 52, title: 'Expr.Literal', detail: 'Value = 2' },
  { cx: 200, y: 115, w: 124, h: 52, title: 'Token', detail: 'Plus "+"', token: true },
  { cx: 330, y: 115, w: 124, h: 52, title: 'Expr.Literal', detail: 'Value = 3' },
];

const edgeLabels = [
  { x: 128, y: 86, anchor: 'end' as const, text: 'Left' },
  { x: 210, y: 96, anchor: 'start' as const, text: 'Operator' },
  { x: 272, y: 86, anchor: 'start' as const, text: 'Right' },
];

function Node({ box }: { box: Box }) {
  const stroke = box.token ? ACCENT : 'currentColor';
  return (
    <g>
      <rect
        x={box.cx - box.w / 2}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={8}
        fill={box.token ? ACCENT : 'none'}
        fillOpacity={box.token ? 0.1 : 0}
        stroke={stroke}
        strokeOpacity={box.token ? 1 : 0.8}
        strokeWidth={2}
      />
      <text
        x={box.cx}
        y={box.detail ? box.y + 21 : box.y + box.h / 2 + 5}
        textAnchor="middle"
        fontSize={13}
        fontWeight={700}
        fontFamily={FONT}
        fill="currentColor"
      >
        {box.title}
      </text>
      {box.detail && (
        <text
          x={box.cx}
          y={box.y + 40}
          textAnchor="middle"
          fontSize={12}
          fontFamily={FONT}
          fill="currentColor"
          fillOpacity={0.85}
        >
          {box.detail}
        </text>
      )}
    </g>
  );
}

export default function BinaryExprTree() {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <svg
        viewBox="0 0 400 190"
        role="img"
        aria-label="Syntax tree for 2 + 3: a Binary expression with a left Literal 2, a plus operator token and a right Literal 3"
        style={{ width: '100%', maxWidth: 440, display: 'block', margin: '0 auto' }}
      >
        {kids.map((k) => (
          <line
            key={k.cx}
            x1={root.cx}
            y1={root.y + root.h}
            x2={k.cx}
            y2={k.y}
            stroke="currentColor"
            strokeOpacity={0.5}
            strokeWidth={1.75}
          />
        ))}

        {edgeLabels.map((l) => (
          <text
            key={l.text}
            x={l.x}
            y={l.y}
            textAnchor={l.anchor}
            fontSize={12}
            fontStyle="italic"
            fontFamily={FONT}
            fill="currentColor"
            fillOpacity={0.7}
          >
            {l.text}
          </text>
        ))}

        <Node box={root} />
        {kids.map((k) => (
          <Node key={`${k.cx}-${k.title}`} box={k} />
        ))}
      </svg>
    </div>
  );
}
