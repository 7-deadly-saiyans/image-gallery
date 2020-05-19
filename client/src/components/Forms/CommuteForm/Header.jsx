import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin: 0 8px 8px 0;
  width: 100%;
  flex: 1 1 0px;
`;

const CollapseIcon = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const header = 'Commute';

const Collapse = ({ onClick, collapsed }) => {
  const collapsedIcon = 'M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z';
  const expandIcon = 'M15.98 14.825l-7.055 7.147-1.893-1.869 8.951-9.067 8.927 9.069-1.896 1.866z';
  return (
    <CollapseIcon onClick={onClick}>
      <svg className="svg" viewBox="0 0 32 32">
        <path d={collapsed ? expandIcon : collapsedIcon} fill="#869099"></path>
      </svg>
    </CollapseIcon>
  );
};

export default ({ onClick, collapsed }) => (
  <Header>
    <Title>{header}</Title>
    {onClick && <Collapse onClick={onClick} collapsed={collapsed} />}
  </Header>
)