import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Path } from '../buttons';

const ExitButton = styled.div`
width: 44px;
height: 44px;
align-items: center;
justify-content: center;
display: inline-flex;
cursor: pointer;
&:hover {
  ${Path} {
    fill: rgb(0, 120, 130);
  }
}
`;

export default ({}) => {
  const history = useHistory();
  const onClick = (event) => {
    event.stopPropagation();
    history.goBack();
  };
  return (
    <ExitButton onClick={onClick}>
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d='M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z' fill='#869099' />
      </svg>
    </ExitButton>
  );
};