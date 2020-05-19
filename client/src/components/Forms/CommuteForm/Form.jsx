import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '-16px -8px 0' }}>
      <div style={{ flex: '1 0 auto', borderColor: 'transparent', borderWidth: '16px 8px 0', borderStyle: 'solid', width: '222px' }}>
        <input type='text' placeholder='Enter your destination' style={{ lineHeight: 1.5, padding: '8px', fontSize: '16px', borderRadius: '8px', borderStyle: 'solid', borderColor: 'rgb(205, 209, 212)', borderWidth: '1px', width: '100%', boxSizing: 'border-box' }} />
      </div>
      <div style={{ borderColor: 'transparent', borderWidth: '16px 8px 0', borderStyle: 'solid', width: '80px', width: '80px' }}>
        <button style={{ lineHeight: 1.5, padding: '8px', fontSize: '16px', borderRadius: '8px', borderStyle: 'solid', backgroundColor: 'rgb(0, 120, 130)', color: 'rgb(255, 255, 255)', width: '100%' }}>Add</button>
      </div>
    </div>
  )
}