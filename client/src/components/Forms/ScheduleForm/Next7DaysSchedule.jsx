import React from 'react';
import styled from 'styled-components';

import { RoundButton  } from '../../buttons';
import CarouselFixed from '../../CarouselFixed';
import DateTile from './DateTile';
import getNext7Days from './helper';

const Next7Days = styled.div`
  position: relative;
`;

const Button = styled(RoundButton)`
  width: 32px;
  height:  32px;
  border-color: rgb(232, 233, 234);
  &:focus {
    box-shadow: rgba(134, 144, 153, 0.18) 0px 8px 16px 0px, rgba(59, 65, 68, 0.05) 0px 2px 4px;
  }
`;

const dLeft = 'M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z';
const dRight = 'M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z';

const SlideButton = (left) => (
  <Button>
    <div>
      <svg viewBox='0 0 32 32'>
        <path d={left ? dLeft : dRight} fill={'rgb(59, 65, 68)'}>
        </path>
      </svg>
    </div>
  </Button>
);

export default () => {
  const btnRight = SlideButton();
  const btnLeft = SlideButton(true);
  const dates = getNext7Days().map(({ day, date, month }, idx) => <DateTile key={idx} day={day} date={date} month={month} />);
  return (
    <Next7Days>
      <CarouselFixed top='calc(50% - 16px)' right='-16px' btnRight={btnRight} btnLeft={btnLeft} style={{ marginLeft: '-4px', marginRight: '-4px' }} >
        {dates}
      </CarouselFixed>
    </Next7Days>
  );
}