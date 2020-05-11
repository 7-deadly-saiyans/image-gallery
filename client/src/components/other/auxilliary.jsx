import React from 'react';

const Dot = () => (
  <span style={{ margin: '0 4px '}}>•</span>
);

const Divider = () => (
  <div style={{ padding: '4px 0 8px 0', lineHeight: 0.1 }}>
    <div style={{ width: '280px', height: '1px', backgroundColor: 'rgb(232, 233, 234)' }}></div>
  </div>
);

export { Dot, Divider };