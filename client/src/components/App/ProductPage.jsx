import React from 'react';
import { Route, useLocation, useRouteMatch } from "react-router-dom";
import styled from 'styled-components';
import MainImage from '../MainImage';
import MediaPopup from '../MediaPopup';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductPage = styled.div`
  font-family: arial;
`;

export default ({ home }) => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const resolvedPath = (url === '/') ? '' : url;
  const background = location.state && location.state.background;

  return (
    <ProductPage>
      <ImageContainer>
        <MainImage home={home}/>
      </ImageContainer>
      {background && <Route path={`${resolvedPath}/:id`} children={<MediaPopup home={home} />} />}
    </ProductPage>
  )
};