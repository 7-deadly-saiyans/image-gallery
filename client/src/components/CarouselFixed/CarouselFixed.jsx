import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Body from './Body';
import SlideButton from './SlideButton';

const Carousel = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

const Position = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  z-index: 1;
`;

export default ({ children, btnLeft, btnRight, top = '7px', right = '0px', initial = 0 }) => {
  const [selected, setSelected] = useState(initial);
  const [clipped, setClipped] = useState(false);
  const [shift, setShift] = useState(0);
  const [max, setMax] = useState(0);
  const ref = useRef(null);

  const resize = (event) => {
    const { childNodes, style, scrollWidth, clientWidth } = ref.current;
    const size = Array.from(childNodes).reduce((size, child) => size + child.offsetWidth, 0);
    // why is animation necessary, tested with setting css directly but did not work
    const keyframe = [
      { transform: `translateX(-${shift}%)` },
      { transform: `translateX(0%)` }
    ];
    const duration = { duration: 0, fill: 'forwards' };
    const animation = ref.current.animate(keyframe, duration);

    setClipped((scrollWidth - clientWidth) > 0);
    setMax(100 * (size / clientWidth - 1));
    setShift(0);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  const onShift = (dir = 1) => {
    return function (event) {
      event.preventDefault();
      const next = Math.max(0, Math.min(shift + dir * 100, max));
      const keyframe = [
        { transform: `translateX(-${shift}%)` },
        { transform: `translateX(-${next}%)` }
      ];
      const duration = { duration: 250 * Math.abs(next - shift) / 100, fill: 'forwards' };
      const animation = ref.current.animate(keyframe, duration);
      animation.onfinish = () => setShift(next);
    }
  };

  const onClick = (event) => {
    setSelected(parseInt(event.currentTarget.id));
  };

  return (
    <Carousel>
      {(clipped && shift < max)  &&
      <Position top={top} right={right}>
        <SlideButton btn={btnRight} onClick={onShift()}/>
      </Position>}

      {(clipped && shift > 0)  &&
      <Position top={top} left={right}>
        <SlideButton btn={btnLeft} left={true} onClick={onShift(-1)}/>
      </Position>}

      <Body children={children} ref={ref} onClick={onClick} selected={selected} />
    </Carousel>
  )
};