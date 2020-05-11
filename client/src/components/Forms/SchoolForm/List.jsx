import React from 'react';
import styled from 'styled-components';

import { Dot, Divider } from '../../Other/Auxilliary';

const SchoolList = styled.div`
  overflow-y: auto;
  padding: 0 8px;
  overflow-x: hidden;
`;

const Row = styled.li`
  margin: -16px -8px 0 -8px;
`;

const School = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 16px 8px 0px 8px;
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;
  white-space: nowrap;
`;

const SchoolName = styled.div`
  color: rgb(0, 120, 130);
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;

const SchoolAddress = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.33;
`;

const SchoolAddl = styled.div`
  color: rgb(134, 144, 153);
  font-size: 12px;
  line-height: 1.33;
`;

const Rating = styled.div`
  flex: 0 0 auto;
  border-width: 16px 8px 0px 8px;
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;
`;

const RatingBubble = styled.div`
  min-width: 64px;
  min-height: 64px;
  background-color: rgb(59, 65, 68);
  border-radius: 200px;
  padding: 16px 12px 0 12px;
  box-sizing: border-box;
  justify-center: center;
`;

const Score = styled.span`
  font-size: 28px;
  color: rgb(255, 255, 255);
  font-weight: bold;
`;

const MaxScore = styled.span`
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.1
`;

const SchoolRating = ({ rating }) => (
  <Rating>
    <RatingBubble>
      <Score>{rating}</Score>
      <MaxScore>/10</MaxScore>
    </RatingBubble>
  </Rating>
)

const SchoolInfo = ({ school, address, grades, size, distance }) => (
  <School>
    <SchoolName>{school}</SchoolName>
    <SchoolAddress>{address}</SchoolAddress>
    <SchoolAddl>{grades}<Dot/>{size} Students<Dot/>{distance}</SchoolAddl>
  </School>
)

export default ({ schools, collapsed, typeFilter, levelFilter }) => (
  <SchoolList>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {schools.map(({ school, rating, address, grades, size, distance, type, level, assigned }, idx) => {
        if (type === typeFilter || typeFilter === 'All' || (type === 'Assigned' && typeFilter === 'Public')) {
          if (level === levelFilter || levelFilter === 'All Grades') {
            return (
              <Row key={idx}>
                <div style={{ display: 'flex' }}>
                  <SchoolRating rating={rating} />
                  <SchoolInfo school={school} address={address} grades={grades} size={size} distance={distance} />
                </div>
                <Divider />
              </Row>
            );
          };
        };
      })}
    </ul>
  </SchoolList>
);