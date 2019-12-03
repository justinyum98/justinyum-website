/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import * as faker from 'faker';
import InstaPostMedia from '.';

describe('InstaPostMedia', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  describe('when all props are successfully passed in', () => {
    describe('when the media is an image', () => {
      const mediaType = 'IMAGE';
      const mockMediaUrl = faker.image.imageUrl();
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(
          <InstaPostMedia
            mediaType={mediaType}
            mediaUrl={mockMediaUrl}
          />,
        );
      });

      it('should render CardMedia img component set to mediaUrl', () => {
        const componentName = wrapper.childAt(0).type().options.name;
        const componentType = wrapper.childAt(0).props().component;
        const actualMediaUrl = wrapper.childAt(0).props().src;

        expect(componentName).toEqual('MuiCardMedia');
        expect(componentType).toEqual('img');
        expect(actualMediaUrl).toEqual(mockMediaUrl);
      });
    });

    describe('when the media is a video', () => {
      const mediaType = 'VIDEO';
      const mockMediaUrl = 'https://example.video.com/mp4';
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(
          <InstaPostMedia
            mediaType={mediaType}
            mediaUrl={mockMediaUrl}
          />,
        );
      });

      it('should render CardMedia video component set to mediaUrl', () => {
        const componentName = wrapper.childAt(0).type().options.name;
        const componentType = wrapper.childAt(0).props().component;
        const actualMediaUrl = wrapper.childAt(0).childAt(0).props().src;

        expect(componentName).toEqual('MuiCardMedia');
        expect(componentType).toEqual('video');
        expect(actualMediaUrl).toEqual(mockMediaUrl);
      });
    });
  });

  describe('when no props are passed in', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<InstaPostMedia />);
    });

    it('should render a CardMedia img component with mediaUrl as undefined', () => {
      const componentName = wrapper.childAt(0).type().options.name;
      const componentType = wrapper.childAt(0).props().component;
      const actualMediaUrl = wrapper.childAt(0).props().image;

      expect(componentName).toEqual('MuiCardMedia');
      expect(componentType).toEqual('img');
      expect(actualMediaUrl).toBeUndefined();
    });

    it('should have placeholder text in case of error loading image', () => {
      const placeholderText = wrapper.childAt(0).props().alt;

      expect(placeholderText).toEqual('Error in loading image.');
    });
  });
});
