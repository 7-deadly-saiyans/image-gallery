import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  display: flex;
  padding: 4px 0 0 0;
  align-items: center;
`;

const Icon = styled.div`
  width: 16px;
  height 16px;
`;

const Message = styled.div`
  color: rgb(255, 94, 63);
  font-size: 12px;
  line-height: 1.1;
  margin: 0 4px;
`;

export default ({ message }) => (
  <Error>
    <Icon>
      <svg viewBox="0 0 32 32" style={{ width: '16px', height: '16px' }}>
        <path d='M17.29 11.974h-2.66v-2.66h2.66v2.66zm0 10.628h-2.66v-8.687h2.66v8.687zm-1.33 6.658c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6z' fill='rgb(255, 94, 63)'>
        </path>
      </svg>
    </Icon>
    <Message>{message}</Message>
  </Error>
)