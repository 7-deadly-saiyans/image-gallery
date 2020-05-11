import React from 'react';
import styled from 'styled-components';
import { BasicButton } from '../buttons';

const GalleryButton = styled(BasicButton)`
  background-color: rgba(59, 65, 68, 0.8);
  color: rgb(255, 255, 255);
  padding: 0px 8px;
  border-radius: 4px;
  border-style: none;
  height: 28px;
  &:hover {
    background-color: rgb(113, 124, 124);
  }
`;

export default ({ count }) => (
  <GalleryButton>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox='0 0 32 32' style={{ height: '16px', width: '16px' }}>
          <path d='M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z' fill='#ffffff'>
          </path>
        </svg>
        <span style={{ marginLeft: '4px', lineHeight: 1.4, fontSize: '14px' }}>{count}</span>
    </div>
  </GalleryButton>
);
