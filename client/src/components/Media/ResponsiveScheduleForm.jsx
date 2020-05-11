import React from 'react';
import styled from 'styled-components';
import ScheduleForm from '../Forms/ScheduleForm';
import { ScheduleButton } from '../buttons';

const Sidebar = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 16px;
  height: calc(100% -96px);
  width: 332px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
  border: 1px solid rgb(232, 233, 234);
`;

const Footer = styled.div`
  position: absolute;
  right: 4px;
  bottom: 6px;
  z-index: 100;
`;

export default ({ innerWidth }) => {
  if (innerWidth > 898) {
    return (
      <Sidebar>
        <ScheduleForm />
      </Sidebar>
    )
  } else {
    return (
      <Footer>
        <ScheduleButton width='300px' padding='8px 16' />
      </Footer>
    )
  }
};