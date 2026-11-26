const ACCENT = '#a848e5';
const FONT = 'ui-monospace, SFMono-Regular, Menlo, monospace';

type Box = {
  id: string;
  cx: number;
  y: number;
  w: number;
  h: number;
  title: string;
  detail?: string;
  token?: boolean;
};

// AST for: 1 + 2 * 3, built from nested Expr.Binary objects
const boxes: Box[] = [
  { id: 'root', cx: 260, y: 20, w: 124, h: 36, title: 'Expr.Binary' },

  { id: 'one', cx: 70, y: 110, w: 112, h: 52, title: 'Expr.Literal', detail: 'Value = 1' },
  { id: 'plus', cx: 210, y: 110, w: 112, h: 52, title: 'Token', detail: 'Plus "+"', token: true },
  { id: 'inner', cx: 450, y: 110, w: 124, h: 36, title: 'Expr.Binary' },

  { id: 'two', cx: 330, y: 210, w: 112, h: 52, title: 'Expr.Literal', detail: 'Value = 2' },
  { id: 'star', cx: 450, y: 210, w: 112, h: 52, title: 'Token', detail: 'Star "*"', token: true },
  { id: 'three', cx: 570, y: 210, w: 112, h: 52, title: 'Expr.Literal', detail: 'Value = 3' },
];

type Side = 'left' | 'center' | 'right';
const edges: [string, string, string, Side][] = [
  ['root', 'one', 'Left', 'left'],
  ['root', 'plus', 'Operator', 'center'],
  ['root', 'inner', 'Right', 'right'],
  ['inner', 'two', 'Left', 'left'],
  ['inner', 'star', 'Operator', 'center'],
  ['inner', 'three', 'Right', 'right'],
];

const byId = Object.fromEntries(boxes.map((b) => [b.id, b]));

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

export default function NestedBinaryExprTree() {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <svg
        viewBox="0 0 640 280"
        role="img"
        aria-label="Syntax tree for 1 + 2 * 3: a Binary expression whose left side is Literal 1, whose operator is a plus token, and whose right side is another Binary expression with Literal 2, a star token and Literal 3"
        style={{ width: '100%', minWidth: 520, maxWidth: 640, display: 'block', margin: '0 auto' }}
      >
        {edges.map(([from, to]) => {
          const a = byId[from];
          const b = byId[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.cx}
              y1={a.y + a.h}
              x2={b.cx}
              y2={b.y}
              stroke="currentColor"
              strokeOpacity={0.5}
              strokeWidth={1.75}
            />
          );
        })}

        {edges.map(([from, to, label, side]) => {
          const a = byId[from];
          const b = byId[to];
          const mx = (a.cx + b.cx) / 2;
          const my = (a.y + a.h + b.y) / 2;
          return (
            <text
              key={`label-${from}-${to}`}
              x={side === 'left' ? mx - 8 : mx + 8}
              y={my - 2}
              textAnchor={side === 'left' ? 'end' : 'start'}
              fontSize={12}
              fontStyle="italic"
              fontFamily={FONT}
              fill="currentColor"
              fillOpacity={0.7}
            >
              {label}
            </text>
          );
        })}

        {boxes.map((b) => (
          <Node key={b.id} box={b} />
        ))}
      </svg>
    </div>
  );
}
