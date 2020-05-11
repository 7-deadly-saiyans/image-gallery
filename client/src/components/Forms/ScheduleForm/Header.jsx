import React, { useState } from 'react';
import styled from 'styled-components';
import ToolTip from './ToolTip.jsx';

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const TourType = styled.div`
  color: rgb(134, 144, 153);
  display: inline-flex;
  align-items: center;
`;

const TourTypeIcon = styled(ToolTip)`
  height: 24px;
  width: 24px;
  margin-left: 4px;
`;

const tooltipMsg = 'If you\'d like to tour this home wihtout leaving yours, select the virtual tour type and discuss available options with the agent you are connected with.'

export default () => (
  <Header>
    <TourType>
      <div>Tour Type</div>
      <TourTypeIcon message={tooltipMsg}>
        <svg viewBox="0 0 32 32">
          <path d="M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z" fill="#869099">
          </path>
        </svg>
      </TourTypeIcon>
    </TourType>
  </Header>
);