import React from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(${({ shift }) => shift});
  z-index: ${({ zIndex }) => zIndex};
`;

const SlideFrame = styled.picture`
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default ({shift, src, zIndex}) => (
  <SlideContainer shift={shift} zIndex={zIndex}>
    <SlideFrame>
      {/* source have srcset and media */}
      <source></source>
      <Image src={src} />
    </SlideFrame>
  </SlideContainer>

);