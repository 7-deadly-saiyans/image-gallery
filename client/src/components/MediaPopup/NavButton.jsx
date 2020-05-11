import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Path, StyledNavButton } from '../buttons';

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

export default ({ id, title, pathname, onClick, selected = false}) => {
  const { state } = useLocation();
  return (
    <Link to={{ pathname, state }} replace>
      <div style={{ borderWidth: '0px 2px 0px', borderColor: 'transparent', borderStyle: 'solid' }}>
        <StyledNavButton id={id} selected={selected} onClick={onClick}>
          <span>{title}</span>
        </StyledNavButton>
      </div>
    </Link>
  )
};