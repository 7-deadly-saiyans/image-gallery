import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  overflow: visible;
`;

export default React.forwardRef(({ children, onClick, selected }, ref) => {
  return (
    <Body>
      <Container ref={ref}>
        {React.Children.map(children, (child, idx) => {
          return React.cloneElement(child, {
            id: idx,
            style: Object.assign({}, child.props.style, { flexShrink: 0 }),
            onClick: (event) => {
              if (child.props.onClick) {
                child.props.onClick(event)
              };
              onClick(event);
            },
            selected: selected === idx,
          });
        })}
      </Container>
    </Body>
  )
});