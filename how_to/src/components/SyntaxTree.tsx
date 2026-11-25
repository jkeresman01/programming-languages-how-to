type TreeNode = { id: string; label: string; x: number; y: number; operator?: boolean };

const ACCENT = '#e5484d';
const R = 20;

// Simplified syntax tree for: 1 + 2 * 3
const nodes: TreeNode[] = [
  { id: 'plus', label: '+', x: 170, y: 40, operator: true },
  { id: 'one', label: '1', x: 90, y: 120 },
  { id: 'star', label: '*', x: 250, y: 120, operator: true },
  { id: 'two', label: '2', x: 200, y: 200 },
  { id: 'three', label: '3', x: 300, y: 200 },
];

const edges: [string, string][] = [
  ['plus', 'one'],
  ['plus', 'star'],
  ['star', 'two'],
  ['star', 'three'],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function SyntaxTree() {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <svg
        viewBox="0 0 360 240"
        role="img"
        aria-label="Syntax tree for 1 + 2 * 3: the plus node has children 1 and a multiplication node, which has children 2 and 3"
        style={{ width: '100%', maxWidth: 360, display: 'block', margin: '0 auto' }}
      >
        {edges.map(([from, to]) => {
          const a = byId[from];
          const b = byId[to];
          // shorten each line so it stops at the circle edge
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const len = Math.hypot(dx, dy);
          const ux = dx / len;
          const uy = dy / len;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x + ux * R}
              y1={a.y + uy * R}
              x2={b.x - ux * R}
              y2={b.y - uy * R}
              stroke="currentColor"
              strokeOpacity={0.5}
              strokeWidth={1.75}
            />
          );
        })}

        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={R}
              fill={n.operator ? ACCENT : 'none'}
              fillOpacity={n.operator ? 0.1 : 0}
              stroke={n.operator ? ACCENT : 'currentColor'}
              strokeOpacity={n.operator ? 1 : 0.8}
              strokeWidth={2.5}
            />
            <text
              x={n.x}
              y={n.y + 6}
              textAnchor="middle"
              fontSize={20}
              fontWeight={700}
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fill="currentColor"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
