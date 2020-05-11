import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import { ModalPopUp } from '../client/src/components/app.jsx';
import MainImage from '../client/src/components/mainImage.jsx';
import Carousel from '../client/src/components/carousel.jsx';
import Container from '../client/src/components/container.jsx';
import ContainerMedia from '../client/src/components/containerMedia.jsx';
import ContainerMap from '../client/src/components/containerMap.jsx';
import Slide from '../client/src/components/slide.jsx';
import { SlideButton, Exit, Nav } from '../client/src/components/buttons.jsx';
import { StyledModal, StyledMainImage } from '../client/src/components/styles.jsx';

const home = {
  imageURLs: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
  tagsProcessed: ['FOR SALE'],
  address: '100 Main Street',
  price: '$100,000',
  rooms: '2 Beds 2 Baths',
};

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: () => ({ url: '/homes/1', path: '/homes/:id' }),
  };
});

import { MemoryRouter, useRouteMatch } from 'react-router-dom';

jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

describe('App', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/homes/1']}>
      <ModalPopUp home={home}/>
    </MemoryRouter>
  );

  it('loads main image', () => {
    expect(wrapper.find(MainImage)).toHaveLength(1);
  });

  it('loads carousel on click', () => {
    //apparently the Link render function rquires { button: 0 }, why ???
    wrapper.find('a').simulate('click', { button: 0});
    expect(wrapper.find(Container)).toHaveLength(1);
  });
});

describe('Modal popup', () => {
  it('disappears after clicking the exit button', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/homes/1']}>
        <ModalPopUp home={home}/>
      </MemoryRouter>
    );
    wrapper.find('a').simulate('click', { button: 0});
    expect(wrapper.find(Container)).toHaveLength(1);
    wrapper.find(Exit).simulate('click');
    expect(wrapper.find(Container)).toHaveLength(0);
  });

  it('disappears after clicking outside the popup', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/homes/1']}>
        <ModalPopUp home={home}/>
      </MemoryRouter>
    );
    wrapper.find('a').simulate('click', { button: 0});
    expect(wrapper.find(Container)).toHaveLength(1);
    wrapper.find(StyledModal).simulate('click');
    expect(wrapper.find(Container)).toHaveLength(0);
  });
});

describe('Carousel', () => {
  it('changes after left and right clicks', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/homes/1/photos']}>
        <Carousel home={home} innerWidth={1000} />
      </MemoryRouter>
    );

    const initial = wrapper.find(Slide).at(0).props();
    wrapper.find(SlideButton).at(0).simulate('click');
    let final = wrapper.find(Slide).at(0).props();
    expect(initial.src).toEqual('/img1.jpg');
    expect(final.src).toEqual('/img3.jpg');
    wrapper.find(SlideButton).at(1).simulate('click');
    wrapper.find(SlideButton).at(1).simulate('click');
    final = wrapper.find(Slide).at(0).props();
    expect(final.src).toEqual('/img2.jpg');
  });
});


/* Not exactly right, should updae the mock implementation for useRouteMatch to have the correct path, how???
Also, cannot figure out how to mock googl API since it is loaded with the html
*/
describe('Container', () => {

  it('changes after clicking tab', () => {
    jest.doMock('react-router-dom', () => {
      return {
        __esModule: true,
        ...jest.requireActual('react-router-dom'),
        useRouteMatch: () => ({ url: '/homes/1/photos', path: '/homes/1/:id' }),
      };
    });
    return import('react-router-dom').then(moduleName => {

        const wrapper = mount(
          <MemoryRouter initialEntries={['/homes/photos']}>
            <Container home={home} innerWidth={1000} />
          </MemoryRouter>
        )
        expect(wrapper.find(ContainerMedia)).toHaveLength(1);
        wrapper.find(Nav).at(1).simulate('click', { button: 0 });
        expect(wrapper.find(ContainerMap)).toHaveLength(1);
    });
  });
});