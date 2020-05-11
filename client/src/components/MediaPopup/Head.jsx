import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CarouselFixed from '../CarouselFixed';
import { SaveButton, ShareButton } from '../buttons';
import ExitButton from './ExitButton';
import NavButton from './NavButton';

const Head = styled.div`
  display: flex;
  padding: 8px 8px 0px;
`;

const NavBar = styled.div`
  display: flex;
  flex: 1 1 0px;
  overflow: hidden;
`;

const MenuCTA = styled.div`
  display: inline-block;
  padding-left: 16px;
`;

export default ({ routes }) => (
  <Head>
    <NavBar>
      <CarouselFixed>
        {routes && routes.map(({ title, path }, idx) => (<NavButton key={idx} title={title} pathname={path} />))}
      </CarouselFixed>
    </NavBar>
    <div>
      <MenuCTA>
        <SaveButton />
        <ShareButton margin='0 0 0 16px' />
      </MenuCTA>
      <ExitButton />
    </div>
  </Head>
)