import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
import mlff_node from './CustomNode';

 
// Function to map year to x-position
const year2x = (year) => {
  const startYear = 1970;
  const endYear = 2030;
  const startX = 100;
  const endX = 1500;
  const scaleFactor = (endX - startX) / (endYear - startYear);
  return startX + (year - startYear) * scaleFactor;
};


const initialNodes = [
  {
    id: '0',
    type: 'mlff_node',
    position: { x: year2x(1965), y: 100 },
    data: { label: 'GDML' },
  },
  { 
    id: '1', 
    type: 'mlff_node',
    position: { x: year2x(1970), y: 100 }, 
    data: { label: 'Lifson-type' } 
  },
  { 
    id: '2', 
    type: 'mlff_node',
    position: { x: year2x(1975), y: 100 }, 
    data: { label: 'AMBER' } 
  },
  { 
    id: '3', 
    position: { x: 500, y: 100 }, 
    data: { label: 'GROMOS' } 
  },
  { id: '4', 
  position: { x: 700, y: 100 }, 
  data: { label: 'OPLS' } 
  },
  { id: '5', 
  position: { x: 900, y: 100 }, 
  data: { label: 'GAFF' } 
  },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes = {{ mlff_node }}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}