import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import MapEmbed from './MapEmbed';
import CommuteForm from '../Forms/CommuteForm';

const MediaCommute = styled.div`
  position: relative;
  height: 100%;
`;

const Sidebar = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 16px;
  height: 'calc(100% -96px)';
  width: 332px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  z-index: 100;
  border: 1px solid rgb(232, 233, 234);
  &.collapsed {
    top: auto;
  }
`;

const schoolIcon = 'https://www.trulia.com/images/txl3R/map_markers/schools/SchoolDotIcon.svg';
const assignedIcon = 'https://www.trulia.com/images/txl3R/map_markers/schools/AssignedSchoolDotIcon.svg';

export default ({ position }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [typeFilter, setType] = useState('Assigned');
  const [levelFilter, setLevel] = useState('All Grades');

  return (
    <MediaCommute>
      <MapEmbed position={position} />
      <Sidebar className={collapsed ? 'collapsed' : ''}>
        <CommuteForm
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          typeFilter={typeFilter}
          setType={setType}
          levelFilter={levelFilter}
          setLevel={setLevel} />
      </Sidebar>
    </MediaCommute>
  );
};