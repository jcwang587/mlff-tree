import React, { useState } from 'react';
import { Handle } from 'reactflow';

const mlff_node = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const backgroundColor = data.color || '#F8E8D1';

  return (
    <div 
      style={{ 
        minwidth: '50px', 
        padding: '7px',
        height: '17px', 
        backgroundColor: backgroundColor,
        borderRadius: '15px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: isSelected ? '5px solid' : '3px solid', // Change border width on click
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: isSelected ? '0px 0px 12px #888888' : 'none', // Optional: Add shadow on click as well
        primaryColor: '#ddd',
      }}
      onClick={handleClick}
    >
      <Handle type="target" position="left" />
      <div>{data.label}</div>
      <Handle type="source" position="right" />
    </div>
  );
};

export default mlff_node;
