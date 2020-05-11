import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  background-color: rgb(255, 255, 255);
  display: inline-block;
  border-radius: 4px;
  margin-right: 4px;
  padding: 2px 4px;
  line-height: 1.33;
  font-size: 12px;
  color: rgb(0, 178, 91);
  font-weight: bold;
  font-family: arial;
`;

const Tags = styled.div`
  flex: 1 1 auto;
`;

const Tag = ({ tag }) => (<StyledTag>{tag}</StyledTag>);

export default ({ tagsProcessed }) => (
  <Tags>
    {tagsProcessed.map((tag, idx) => (<Tag key={idx} tag={tag} />))}
  </Tags>
);