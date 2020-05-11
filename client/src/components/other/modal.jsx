import React, { createRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.5s;
`;

export default ({ children }) => {
  const history = useHistory();
  const ref = createRef();

  const onTransistionEnd = (event) => {
    if (event.target === ref.current) {
      event.stopPropagation();
      history.goBack();
    }
  }

  const onClick = (event) => {
    if (event.target === ref.current) {
      event.target.style.opacity = 0;
    }
  }

  return (
    <Modal ref={ref} onClick={onClick} onTransitionEnd={onTransistionEnd} >
      {children}
    </Modal>
  )
};
