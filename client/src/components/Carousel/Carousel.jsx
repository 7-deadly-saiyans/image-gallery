import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Slide from './Slide';
import SlideButtons from './SlideButton';

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Slides = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

const Position = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  z-index: 1;
`;

export default ({ home, innerWidth }) => {

  const [index, setIndex] = useState(0);

  const { address, price, rooms, imageURLs } = home;
  const left = (index -1 < 0) ? imageURLs.length - 1 : index - 1;
  const right = (index + 1) % imageURLs.length;

  const onClick  = function(left = true) {
    return function(event) {
      event.preventDefault();
      if (left) {
        setIndex((!index) ? imageURLs.length - 1 : index - 1);
      } else {
        setIndex((index + 1) % imageURLs.length);
      }
    };
  };

  return (
    <Carousel>
      <div>
        <Position left='20px'>
          <SlideButtons left={true} onClick={onClick()}/>
        </Position>
        <Position right='20px'>
          <SlideButtons onClick={onClick(false)}/>
        </Position>
      </div>
      <Slides>
          <Slide key={index} shift={'0%'} src={imageURLs[index]} zIndex={2}/>
          <Slide key={right} shift={'100%'} src={imageURLs[right]} zIndex={1}/>
          <Slide key={left} shift={'-100%'} src={imageURLs[left]} zIndex={1}/>
      </Slides>
      <Footer home={home} innerWidth={innerWidth} index={index} />
    </Carousel>
  )
}