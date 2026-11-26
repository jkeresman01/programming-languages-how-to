type TreeNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  terminal?: boolean;
};

// Parse tree for: 1 + 2 * 3
// Why not, why not
// Grammar: expr -> expr + term | term ; term -> term * factor | factor ; factor -> number
const ROW = [30, 80, 130, 180, 230, 285];
const COL = { one: 50, plus: 130, two: 210, star: 290, three: 370 };

const nodes: TreeNode[] = [
  { id: 'E0', label: 'expr', x: 157, y: ROW[0] },
  { id: 'E1', label: 'expr', x: COL.one, y: ROW[1] },
  { id: 'T0', label: 'term', x: COL.one, y: ROW[2] },
  { id: 'F0', label: 'factor', x: COL.one, y: ROW[3] },
  { id: 'N0', label: 'number', x: COL.one, y: ROW[4] },
  { id: 'L1', label: '1', x: COL.one, y: ROW[5], terminal: true },

  { id: 'P', label: '+', x: COL.plus, y: ROW[5], terminal: true },

  { id: 'T1', label: 'term', x: COL.star, y: ROW[1] },
  { id: 'T2', label: 'term', x: COL.two, y: ROW[2] },
  { id: 'F1', label: 'factor', x: COL.two, y: ROW[3] },
  { id: 'N1', label: 'number', x: COL.two, y: ROW[4] },
  { id: 'L2', label: '2', x: COL.two, y: ROW[5], terminal: true },

  { id: 'S', label: '*', x: COL.star, y: ROW[5], terminal: true },

  { id: 'F2', label: 'factor', x: COL.three, y: ROW[2] },
  { id: 'N2', label: 'number', x: COL.three, y: ROW[3] },
  { id: 'L3', label: '3', x: COL.three, y: ROW[5], terminal: true },
];

const edges: [string, string][] = [
  ['E0', 'E1'],
  ['E0', 'P'],
  ['E0', 'T1'],
  ['E1', 'T0'],
  ['T0', 'F0'],
  ['F0', 'N0'],
  ['N0', 'L1'],
  ['T1', 'T2'],
  ['T1', 'S'],
  ['T1', 'F2'],
  ['T2', 'F1'],
  ['F1', 'N1'],
  ['N1', 'L2'],
  ['F2', 'N2'],
  ['N2', 'L3'],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function ParseTree() {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <svg
        viewBox="0 0 420 315"
        role="img"
        aria-label="Parse tree for the expression 1 + 2 * 3"
        style={{
          width: '100%',
          maxWidth: 460,
          display: 'block',
          margin: '0 auto',
        }}
      >
        {edges.map(([from, to]) => {
          const a = byId[from];
          const b = byId[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y + 12}
              x2={b.x}
              y2={b.y - 12}
              stroke="currentColor"
              strokeOpacity={0.45}
              strokeWidth={1.5}
            />
          );
        })}

        {nodes.map((n) => {
          const w = n.terminal ? 26 : n.label.length * 8 + 16;
          return (
            <g key={n.id}>
              <rect
                x={n.x - w / 2}
                y={n.y - 12}
                width={w}
                height={24}
                rx={n.terminal ? 12 : 5}
                fill="none"
                stroke="currentColor"
                strokeOpacity={n.terminal ? 0.9 : 0.45}
                strokeWidth={n.terminal ? 2 : 1.25}
              />
              <text
                x={n.x}
                y={n.y + 4.5}
                textAnchor="middle"
                fontSize={13}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                fontWeight={n.terminal ? 700 : 400}
                fill="currentColor"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
