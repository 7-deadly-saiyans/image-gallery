import React from 'react';
import styled from 'styled-components';
import { BasicButton } from '../../buttons.jsx';

const DateTile = styled.div`
  border-width: 8px 4px 0px;
  width: 25%;
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 2px 0;
`;

const Date = styled.div`
  font-weight: bold;
  line-height: 1.2;
  font-size: 20px;
`;

const Button = styled(BasicButton)`
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 8px;
  border-width: 1px;
  border-color: rgb(205, 209, 212);
  width: 100%;
  border-style: solid;
  line-height: 1.4;
  font-size: 14px;
  font-family: arial;
  cursor: pointer;
  box-shadow: ${({ selected }) => selected ? 'rgb(0, 173, 187) 0px 0px 0px 2px;' : ''};
`;

export default ({ id, day, date, month, onClick, selected = false }) => (
  <DateTile id={id} onClick={onClick}>
    <Button onClick={(event) => event.preventDefault()} selected={selected}>
      <div>{day}</div>
      <Date>{date}</Date>
      <div>{month}</div>
    </Button>
  </DateTile>
);