import React, { useEffect } from 'react';
import styled from 'styled-components';
// import locations from '../helper/testData.js';

const StreetViewEmbed = styled.div`
  height: 100%;
`;

export default ({ position }) => {
  const ref = React.createRef();

  useEffect(() => {
    if (typeof google !== 'undefined') {
      const { LEFT_BOTTOM } = google.maps.ControlPosition;
      const streetView = new google.maps.StreetViewPanorama(ref.current, {
        position: position,
        pov: {heading: 165, pitch: 0},
        zoom: 1,
        zoomControlOptions: { position: LEFT_BOTTOM },
      });
    }
  }, []);

  return <StreetViewEmbed ref={ref} />;
};