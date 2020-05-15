import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Tags from './Tags';
import Image from './Image';
import GalleryButton from './GalleryButton';
import { SaveButton, ShareButton } from '../buttons';

const Frame = styled.div`
  position: relative;
  height: 500px;
  max-height: calc(100vh - 275px);
  min-height: 275px;
  width: 992px;
  border-radius: 8px;
`;

const TopDecorations = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: 8px 8px 0;
  z-index: 1;
  box-sizing: border-box;
`;

const BottomDecorations = styled.div`
  position: absolute;
  right: 0;
  bottom: 8px;
  z-index: 1;
  padding-right: 8px;
`;

const Body = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export default ({ home, pathname }) => {
  const { imageURLs, tagsProcessed } = home;
  const location = useLocation();

  return (
    <Frame>
      <TopDecorations>
        <Tags tagsProcessed={tagsProcessed} />
        <div>
          <ThemeProvider theme={{ color: 'rgb(0, 120, 130)', borderStyle: 'none' }}>
            <SaveButton />
            <ShareButton margin='0 0 0 16px' />
          </ThemeProvider>
        </div>
      </TopDecorations>
      <Link to={{ pathname: `${pathname}/photos`, state: { background: location } }}>
        <Body>
          <Image imageURL={imageURLs[0]} />
        </Body>
        <BottomDecorations>
          <GalleryButton count={imageURLs.length} />
        </BottomDecorations>
      </Link>
    </Frame>
  )
};