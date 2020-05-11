import React, { useEffect } from 'react';
import styled from 'styled-components';
import MarkerClusterer from '@google/markerclustererplus';
// import locations from '../helper/testData.js';

const MapEmbed = styled.div`
  height: 100%;
`;

const icon = 'https://www.trulia.com/images/app-shopping/map-marker-txl3R/MapMarkerHouseIcon.svg';

export default ({ position, markers = [] }) => {
  const ref = React.createRef();

  const showMarkers = (map) => {
    let selected;
    markers.map(option => {
      const infowindow = new google.maps.InfoWindow({ content: `<div>${option.school}</div>` });
      const marker = new google.maps.Marker(option);
      marker.setMap(map);
      marker.addListener('click', function(event) {
        if (selected) selected.close();
        selected = infowindow;
        infowindow.open(map, marker);
      });
      marker.addListener('mouseover', function() {
        infowindow.open(map, marker);
      });
      marker.addListener('mouseout', function() {
        if (selected !== infowindow) {
          infowindow.close();
        }
      });
    });
  };

  useEffect(() => {
    if (typeof google !== 'undefined') {
      const { TOP_LEFT, LEFT_BOTTOM } = google.maps.ControlPosition;
      const map = new google.maps.Map(ref.current, {
        center: position,
        zoom: 12,
        fullscreenControlOptions: { position: TOP_LEFT },
        streetViewControl: false,
        zoomControlOptions: { position: LEFT_BOTTOM },
      });
      const marker = new google.maps.Marker({ position, map, icon });
      showMarkers(map);
      // const markerCluster = new MarkerClusterer(map, markers, { imagePath: '/homes/m' });
    }
  });

  return <MapEmbed className='tall' ref={ref} />;
};
