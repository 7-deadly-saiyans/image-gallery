import React, { Fragment } from 'react';
import styled from 'styled-components';
import CarouselFixed from '../../CarouselFixed';
import { StyledNavButton } from '../../buttons';

const Types = styled.div`
  width: 50%;
`;

const DropDown = styled.div`
  position: relative;
  padding: 8px;
  border: 1px solid rgb(205, 209, 212);
  border-radius: 8px;
`;

const Current = styled.div`
  display: flex;
`;

const Choices = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Value = styled.div`
  flex: 1 1 auto;
  font-weight: bold;
`;

const Icon = styled.div`
  width: 16px;
  height: 24px;
`;

const TypeFilter = ({ types, setType, typeFilter }) => (
  <Types>
    <DropDown>
      <Current>
        <Value>{typeFilter}</Value>
        <Icon>
          <svg className="svg" viewBox="0 0 32 32">
            <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"></path>
            </svg>
        </Icon>
      </Current>
      <Choices value={typeFilter} onChange={(event) => setType(event.target.value)}>
        {types && types.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
      </Choices>
    </DropDown>
  </Types>
);

const Levels = styled.div`
  padding: 8px 0 18px 0;
  margin: 0 -2px 0 -2px;
`;

const LevelFilter = ({ levels, setLevel, levelFilter }) => {
  const changeLevel = (event) => {
    event.preventDefault();
    setLevel(event.target.innerText);
  }
  return (
    <Levels>
      <CarouselFixed initial={3}>
        {levels && levels.map((level, idx) => (
          <StyledNavButton key={idx} onClick={changeLevel} style={{ fontSize: '14px' }}>
            <span>{level}</span>
          </StyledNavButton>
        ))}
      </CarouselFixed>
    </Levels>
  );
}

export default ({ types, levels, setType, typeFilter, setLevel, levelFilter }) => (
  <>
    <TypeFilter types={types} setType={setType} typeFilter={typeFilter} />
    <LevelFilter levels={levels} levelFilter={levelFilter} setLevel={setLevel} />
  </>
);