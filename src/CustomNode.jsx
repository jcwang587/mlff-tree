import React from 'react';
import { Handle } from 'reactflow';

const mlff_node = ({ data }) => (
  <div style={{ 
    width: '150px', 
    height: '50px', 
    backgroundColor: '#F8E8D1',
    borderRadius: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '3px solid',
    fontSize: '16px',
    fontWeight: 'bold',
    }}>
    <Handle type="target" position="top" />
    <div>{data.label}</div>
    <Handle type="source" position="bottom" />
  </div>
);

export default mlff_node;
