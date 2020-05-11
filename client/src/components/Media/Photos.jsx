import React from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';
import ResponsiveScheduleForm from './ResponsiveScheduleForm';

const MediaPhotos = styled.div`
  position: relative;
  height 100%;
  background-color: rgb(0, 0, 0);
`;

const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  border-top: 1px solid rgb(59, 65, 68);
  @media (min-width: 898px) {
    width: calc(100% - 342px);
  }
`;

export default ({ home, innerWidth }) => (
  <MediaPhotos>
      <CarouselContainer>
        <Carousel home={home} innerWidth={innerWidth} />
      </CarouselContainer>
      <ResponsiveScheduleForm innerWidth={innerWidth} />
  </MediaPhotos>
);