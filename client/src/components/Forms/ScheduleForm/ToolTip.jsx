import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Tip = styled.div`
  position: fixed;
  top: ${({ top }) => top && `${top}px`};
  left: ${({ right }) => right && `${right}px`};
  z-index: 5000;
  `;

const Message = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  border-color: rgb(253, 253, 253);
  padding: 16px;
  font-family: arial;
  z-index: 1;
  line-height: 1.5;
`;

const Arrow = styled.div`
  position: absolute;
  top: ${({ top }) => top && `${top}px`};
  bottom: ${({ bottom }) => bottom && `${bottom}px`};
  left: ${({ right }) => right && `${right}px`};
  background-color: rgb(255, 255, 255);
  padding: 9px;
  transform: rotate(45deg);
  border-radius: 2px;
`;

const ToolTip = ({ location, message }) => {
  const { x, y } = location;
  const offset = 35;
  return ReactDOM.createPortal((
    <Tip right={x - offset} top={y + offset + 7}>
      <div style={{ position: 'relative' }}>
        <Arrow right={offset} top={-7}></Arrow>
        <Message>
          {message}
        </Message>
      </div>
    </Tip>
  ), document.body);
};

export default ({ className, children, message }) => {
  const [location, setLocation] = useState(null);

  const toggle = (show = true) => (event) => {
    const { x, y } = event.currentTarget.getBoundingClientRect();
    event.preventDefault();
    setLocation(show ? { x, y } : null);
  };

  return (
    <div className={className} onMouseOver={toggle()} onMouseOut={toggle(false)}>
      {children}
      {location && <ToolTip location={location} message={message} />}
    </div>
  )
};