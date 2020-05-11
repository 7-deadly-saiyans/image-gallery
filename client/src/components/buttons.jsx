import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Path = styled.path`
`;

const BasicButton = styled.button`
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  outline: none;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(59, 65, 68);
  &.centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

const RoundButton = styled(BasicButton)`
  border-radius: 24px;
  padding: 1px;
`;

const StyledScheduleButton = styled(BasicButton)`
  width: ${({ width }) => width || '100%'};
  background-color: rgb(217, 60, 35);
  color: rgb(255, 255, 255);
  font-weight: bold;
  border-color: rgb(217, 60, 35);
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(217, 60, 35);
  }
`;

const ScheduleButton = ({ width, padding }) => (
  <StyledScheduleButton width={width} padding={padding} onClick={(event) => event.preventDefault()}>
    <span>Schedule a Tour</span>
  </StyledScheduleButton>
);

const StyledCTAButton = styled(BasicButton)`
  border-style: ${({ theme }) => theme.borderStyle};
  border-color: rgb(205, 209, 212);
  min-width: 110px;
  &:hover {
    background-color: rgb(232, 233, 234);
  }
  ${Path} {
    fill: ${({ theme }) => theme.color};
  }
`;

StyledCTAButton.defaultProps = {
  theme: {
    color: 'rgb(59, 65, 68)',
    borderStyle: 'solid'
  }
}

const SaveButton = () => (
  <StyledCTAButton>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d='M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z' fill='86909'>
        </Path>
      </svg>
      <span style={{ marginLeft: '8px' }}>Save</span>
    </div>
  </StyledCTAButton>
);

const ShareButton = (props) => (
  <StyledCTAButton {...props}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d='M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z' fill='86909'>
        </Path>
      </svg>
      <span style={{ marginLeft: '8px' }}>Share</span>
    </div>
  </StyledCTAButton>
);

const StyledNavButton = styled(BasicButton)`
  color: ${({ selected }) => selected ? 'rgb(0, 120, 130)' : ''};
  border-style: ${({ selected }) => selected ? 'solid' : 'none'};
  margin-bottom: 8px;
  white-space: nowrap;
  box-shadow: ${({ selected }) => selected ? 'rgba(59, 65, 68, 0.4) 0px 8px 20px -15px' : ''};
  font-weight: bold;
  &:hover {
    background-color: ${({ selected }) => selected ? '' : 'rgb(232, 233, 234)' };
  }
`;

export { BasicButton, RoundButton, Path, StyledNavButton, SaveButton, ShareButton, ScheduleButton };