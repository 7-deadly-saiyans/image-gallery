import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
`;

export default ({ imageURL }) => (
  <picture>
    <source></source>
    <Image src={imageURL} />
  </picture>
);