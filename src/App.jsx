import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from 'reactflow';
 
import 'reactflow/dist/style.css';

import mlff_node from './CustomNode';
import './styles.css';

 
// Function to map year to x-position
const year2x = (year) => {
  const startYear = 1970;
  const endYear = 2030;
  const startX = 50;
  const endX = 1500;
  const scaleFactor = (endX - startX) / (endYear - startYear);
  return startX + (year - startYear) * scaleFactor;
};


// Function to map row to y-position
const row2y = (row) => {
  return row * 40;
};


// Constant to store color of class
const mlff_class = {
  'global_node': '#F2DBD5',
  'local_node': '#F8E8D1',
  'spehere': '#B3CAD8',
  'direction': '#BFD1C4',
};

const initialNodes = [
  {
    id: 'gdml',
    type: 'mlff_node',
    position: { x: year2x(2015), y: row2y(1) },
    data: { label: 'GDML', color: mlff_class['local_node'] },
  },
  {
    id: 'sgdml',
    type: 'mlff_node',
    position: { x: year2x(2020), y: row2y(1) },
    data: { label: 'sGDML', color: mlff_class['spehere'] },
  },
  { 
    id: 'lifsontype', 
    type: 'mlff_node',
    position: { x: year2x(1970), y: row2y(8) }, 
    data: { label: 'Lifson-type' } 
  },
  { 
    id: 'amber', 
    type: 'mlff_node',
    position: { x: year2x(1990), y: row2y(8) }, 
    data: { label: 'AMBER' } 
  },
  { 
    id: 'gromos', 
    type: 'mlff_node',
    position: { x: year2x(2000), y: row2y(8) }, 
    data: { label: 'GROMOS' } 
  },
  { id: 'opls', 
  type: 'mlff_node',
  position: { x: year2x(2005), y: row2y(8) }, 
  data: { label: 'OPLS' } 
  },
  { id: 'gaff', 
  type: 'mlff_node',
  position: { x: year2x(2010), y: row2y(8) }, 
  data: { label: 'GAFF' } 
  },
];

const initialEdges = [
  { 
    id: 'e1-1', 
    source: 'gdml', 
    target: 'sgdml', 
    animated: true 
  },
  { 
    id: 'e1-2', 
    source: 'lifsontype', 
    target: 'amber', 
    animated: true ,
    style: { strokeWidth: 4, } ,
    markerEnd: { type: MarkerType.ArrowClosed, }
  },
  { 
    id: 'e2-3', 
    source: 'amber', 
    target: 'gromos', 
    animated: true 
  },
  { 
    id: 'e3-4', 
    source: 'gromos', 
    target: 'opls', 
    animated: true 
  },
  { 
    id: 'e4-5', 
    source: 'opls', 
    target: 'gaff', 
    animated: true 
  },
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