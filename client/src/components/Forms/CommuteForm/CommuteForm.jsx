import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Filters from './Filters';
import Form from './Form.jsx';
import List from './List';

const CommuteForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  wide: 100%;
  padding: 8px;
  border: 1px solid rgb(232, 233, 234);
  border-radius: 8px;
  box-sizing: border-box;
`;

const Disclosure = styled.div`
  padding-bottom: 8px;
  font-size: 12px;
  line-height: 1.33;
  color: rgb(134, 144, 153);
`;

const levels = ['Driving', 'Transit', 'Walking', 'Cycling'];
const disclosure = 'Commute times are based on typical rush hour traffic.';

export default ({ schools, collapsed, onCollapse, setLevel, levelFilter }) => {
  return (
    <CommuteForm>
      <Header onClick={onCollapse} collapsed={collapsed} />
      <Disclosure>{disclosure}</Disclosure>
      <Filters
        levels={levels} />
      <Form />
    </CommuteForm>
  );
}