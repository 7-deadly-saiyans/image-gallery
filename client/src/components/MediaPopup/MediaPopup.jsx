import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../other/modal';
import Head from './Head';
import Photos from '../Media/Photos';
import Map from '../Media/Map';
import StreetView from '../Media/StreetView';
import Schools from '../Media/Schools';

const position = {lat: 37.869260, lng: -122.254811};

const MediaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  @media (min-width: 767px) {
    margin: 48px;
    height: calc(100% - 96px);
    width: calc(100% - 96px);
    border-radius: 8px;
  }
`;

const Body = styled.div`
  flex: 1 1 auto;
`;

export default ({ home }) => {
  const { path } = useRouteMatch();
  const [innerWidth, setWidth] = useState(window.innerWidth);
  const routes = [
    {
      title: 'Photos',
      path: path.replace(':id', 'photos'),
      main: <Photos home={home} innerWidth={innerWidth} />,
    },
    {
      title: 'Map',
      path: path.replace(':id', 'mapView'),
      main: <Map innerWidth={innerWidth} position={position} />,
    },
    {
      title: 'Street View',
      path: path.replace(':id', 'streetView'),
      main: <StreetView innerWidth={innerWidth} position={position} />,
    },
    {
      title: 'Schools',
      path: path.replace(':id', 'schools'),
      main: <Schools position={position} />,
    },
    {
      title: 'Crime',
      path: path.replace(':id', 'crime'),
      main: <div></div>,
    },
    {
      title: 'Commute',
      path: path.replace(':id', 'commute'),
      main: <div></div>,
    },
    {
      title: 'Shop & Eat',
      path: path.replace(':id', 'ammenities'),
      main: <div></div>,
    },
  ];

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  return (
    <Modal>
      <MediaContainer>
        <Head routes={routes} />
        <Body>
          <Switch>
            {routes.map(({ path, main }, idx) => <Route key={idx} path={path} children={main} />)}
          </Switch>
        </Body>
      </MediaContainer>
    </Modal>
  )
};