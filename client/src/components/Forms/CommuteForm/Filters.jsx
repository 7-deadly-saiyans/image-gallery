import React, { Fragment } from 'react';
import styled from 'styled-components';
import CarouselFixed from '../../CarouselFixed';
import { StyledNavButton } from '../../buttons';

const Levels = styled.div`
  padding: 8px 0 18px 0;
  margin: 0 -2px 0 -2px;
`;

const driving = 'M26.6 22.585v2.02a1.995 1.995 0 1 1-3.99 0v-2.02H9.31v2.02a1.995 1.995 0 1 1-3.99 0V15.96L7.98 5.32h15.96l2.66 10.64v6.625zM23.193 13.3l-1.33-5.32H10.057l-1.33 5.32h14.466zM7.98 16.377v2.66h2.66v-2.66H7.98zm13.3 0v2.66h2.66v-2.66h-2.66z';
const transit = 'M9.501 15.879h12.931V8.723H9.502v7.156zm9.214 4.895h2.398v-2.36h-2.398v2.36zm-7.928 0h2.397v-2.36h-2.397v2.36zm.001-15.73a4.622 4.622 0 0 0-4.624 4.62v10.14a4.619 4.619 0 0 0 4.314 4.604l-2.47 2.468h3.34l2.454-2.452h4.33l2.454 2.452h3.34l-2.471-2.469a4.618 4.618 0 0 0 4.301-4.603V9.664c0-2.551-2.07-4.62-4.624-4.62H10.788z';
const walking = 'M16.795 18.988l2.239 2.422v7.968h-3.99v-6.407l-1.067-1.153-2.958 7.56h-4.32l5.68-14.45-1.217.472-1.858 4.046H5.382l2.83-7.184 6.427-2.485 5.034 1.2v1.576a4.065 4.065 0 0 0 4.065 4.065h1.353v3.99H23.74a8.042 8.042 0 0 1-6.368-3.12l-.576 1.5zm1.76-10.096a3.325 3.325 0 1 1 0-6.65 3.325 3.325 0 0 1 0 6.65z';
const cycling = 'M20.917 14.791l-3.93 7.127a1.33 1.33 0 0 1-2.347-.033L9.124 11.182a1.351 1.351 0 0 1-.032-.067H6.608v-2.66h5.893v2.66h-.419l.32.62h7.7L18.615 6.16l7.586.057-.02 2.66-4.097-.03 1.764 6.613a5.551 5.551 0 1 1-2.386 1.377l-.545-2.046zM6.637 26.36a5.551 5.551 0 1 1 0-11.103 5.551 5.551 0 0 1 0 11.103zm9.225-7.91l2.235-4.055h-4.324l2.089 4.054z'

const icons = [driving, transit, walking, cycling];

const LevelFilter = ({ levels, setLevel, levelFilter }) => {
  const changeLevel = (event) => {
    event.preventDefault();
    //setLevel(event.target.innerText);
  }
  return (
    <Levels>
      <CarouselFixed>
        {levels && levels.map((level, idx) => (
          <StyledNavButton key={idx} onClick={changeLevel} style={{ fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg className="svg" style={{ width: '24px', height: '24px' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d={icons[idx]} fill="rgb(134, 144, 153)" fill-rule='evenodd'>
                </path>
              </svg>
              <span>{level}</span>
            </div>
          </StyledNavButton>
        ))}
      </CarouselFixed>
    </Levels>
  );
}

export default ({ types, levels, setType, typeFilter, setLevel, levelFilter }) => (
  <>
    <LevelFilter levels={levels} levelFilter={levelFilter} setLevel={setLevel} />
  </>
);