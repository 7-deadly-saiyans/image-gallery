import React, { useState } from 'react';
import styled from 'styled-components';
import { ScheduleButton, BasicButton } from '../../buttons.jsx';
import Next7DaysSchedule from './Next7DaysSchedule.jsx';
import Checkbox from './Checkbox.jsx';
import ErrorMessage from './ErrorMessage.jsx';

const Input = styled.input`
border-radius: 8px;
line-height: 1.5;
font-size: 16px;
border-color: rgb(205, 209, 212);
border-width: 1px;
border-style: solid;
width: 100%;
box-sizing: border-box;
padding: 8px;
`;

const FormRow = styled.div`
  display: block;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || '4px 0'};
  &.multi {
    display: flex;
  }
`;

const TourType = styled(BasicButton)`
  border-radius: ${({ borderRadius }) => borderRadius};
  border-color: rgb(205, 209, 212);
  width: 50%;
  &.selected {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
  &.selected:hover {
    color: rgb(0, 120, 130);
    background-color: rgb(255, 255, 255);
  }
  &:hover {
    background-color: rgb(232, 233, 234);
  }
`;

export default () => {
  const onBlur = (handler) => (event) => handler(event.target.value === '');
  const [selectedType, setType] = useState(true);
  const [noName, setNameCheck] = useState(false);
  const [noPhone, setPhoneCheck] = useState(false);
  const [noEmail, setEmailCheck] = useState(false);
  const [financeChecked, setFinance] = useState(false);

  const selectType = (val = true) => (event) => {
    event.preventDefault();
    setType(val);
  };

  return (
    <>
      <FormRow>
        <TourType className={selectedType ? 'selected' : ''} onClick={selectType()} borderRadius='8px 0 0 8px'>In-Person</TourType>
        <TourType className={!selectedType ? 'selected' : ''} onClick={selectType(false)} borderRadius='0 8px 8px 0'>Virtual</TourType>
      </FormRow>
      <FormRow margin='0 -4px'>
        <Next7DaysSchedule />
      </FormRow>
      <FormRow className='multi'>
        <div>
          <Input type='text' placeholder='Name' onBlur={onBlur(setNameCheck)} />
          {noName && <ErrorMessage message={'Enter your name.'} />}
        </div>
        <div style={{ paddingLeft: '8px' }}>
          <Input type='text' placeholder='Phone' onBlur={onBlur(setPhoneCheck)} />
          {noPhone && <ErrorMessage message={'Enter a valid phone number.'} />}
        </div>
      </FormRow>
      <FormRow>
        <Input type='text' placeholder='Email' onBlur={onBlur(setEmailCheck)} />
        {noEmail && <ErrorMessage message={'Enter a valid email.'} />}
      </FormRow>
      <Checkbox status={financeChecked} toggle={setFinance} />
      <FormRow padding='4px 0 0 0' margin='0 0 8px 0'>
        <ScheduleButton width='100%' padding='8px 16px' />
      </FormRow>
    </>
  );
}