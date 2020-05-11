import React from 'react';
import styled from 'styled-components';
import { RoundButton } from '../buttons.jsx';

const SlideButton = styled(RoundButton)`
  width: 24px;
  height: 24px;
  border-color: rgb(232, 233, 234);
  &:focus {
    box-shadow: rgba(134, 144, 153, 0.18) 0px 8px 16px 0px, rgba(59, 65, 68, 0.05) 0px 2px 4px;
  }
`;

const dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
const dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';

export default ({ btn, left, onClick }) => {
  return (
    <>
      {btn
          ? React.cloneElement(btn, { onClick })
          : (
            <SlideButton onClick={onClick}>
              <div>
                <svg viewBox='0 0 32 32'>
                  <path d={left ? dLeft : dRight} fill='rgb(59, 65, 68)'>
                  </path>
                </svg>
              </div>
            </SlideButton>
          )
        }
    </>
  )
};