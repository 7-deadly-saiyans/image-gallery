import React from 'react';
import styled from 'styled-components';
import { RoundButton, Path } from '../buttons.jsx';

const SlideButton = styled(RoundButton)`
  height: 48px;
  width: 48px;
  border-style: none;
  background-color: rgb(59, 65, 68);
  &:hover {
    background-color: rgb(134, 144, 153);
    ${Path} {
      fill: rgb(255, 255, 255);
    }
  }
`;

const dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
const dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';

export default ({ left, onClick }) => (
  <SlideButton onClick={onClick}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox='0 0 32 32' style={{ height: '24px', width: '24px' }}>
        <Path d={left ? dLeft : dRight} fill='#ffffff'>
        </Path>
      </svg>
    </div>
  </SlideButton>
);