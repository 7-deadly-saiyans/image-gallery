import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import MapEmbed from './MapEmbed';
import SchoolForm from '../Forms/SchoolForm';
import schools from '../Forms/SchoolForm/dummyData';

const MediaSchool = styled.div`
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

  const filter = () => (
    schools.filter(school => {
      const { level, type } = school;
      if (type === typeFilter || typeFilter === 'All') {
        if (level === levelFilter || levelFilter === 'All Grades') {
          return true;
        }
      }
      return false;
    })
  );

  const filteredSchools = useMemo(filter, [typeFilter, levelFilter]);
  const markers = filteredSchools.map(({ school, position, type }) => ({ position, icon : type === 'Assigned' ? assignedIcon : schoolIcon, school }));

  return (
    <MediaSchool>
      <MapEmbed position={position} markers={markers} />
      <Sidebar className={collapsed ? 'collapsed' : ''}>
        <SchoolForm
          schools={filteredSchools}
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          typeFilter={typeFilter}
          setType={setType}
          levelFilter={levelFilter}
          setLevel={setLevel} />
      </Sidebar>
    </MediaSchool>
  );
};