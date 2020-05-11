import React from 'react';
import styled from 'styled-components';

const Rect = styled.rect``;

const CheckBoxField = styled.div`
  padding: 4px 0 8px;
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  opacity: 0;
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 1;
`;

const FieldMessage = styled.div`
  margin: 0 0 0 4px;
  color: rgb(134, 144, 153);
  font-size: 12px;
`;

export default ({ status, toggle }) => (
  <CheckBoxField>
    <div>
      <CheckBox type='checkbox' onClick={() => toggle(!status)}/>
      <svg width='20px' height='20px' viewBox='0 0 24 24'>
        <g>
        {status ?
          <>
            <rect strokeWidth="2" width="18" height="18" x="3" y="3" rx="4"></rect>
            <rect stroke-width="2" width="18" height="18" x="3" y="3" rx="4" fill='rgb(0, 120, 130)'></rect>
            <path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13l2.5 2L15 9">
            </path>
          </>
          :
          <Rect data-cb-part="background" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" fill='none' stroke='rgb(205, 209, 212)'></Rect>
        }
        </g>
      </svg>
    </div>
    <FieldMessage>
      <span>{status ? 'A licensed lender will call you soon' : 'I want to talk about financing'}</span>
    </FieldMessage>
  </CheckBoxField>
);