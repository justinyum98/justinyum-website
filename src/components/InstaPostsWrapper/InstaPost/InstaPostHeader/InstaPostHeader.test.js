/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import * as faker from 'faker';
import InstaPostHeader from '.';

describe('InstaPostHeader', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe('when all props are successfully passed in', () => {
    let mockUsername;
    let mockProfilePictureUrl;
    let wrapper;

    beforeEach(() => {
      mockUsername = faker.internet.userName();
      mockProfilePictureUrl = faker.image.imageUrl();
      wrapper = shallow(
        <InstaPostHeader
          username={mockUsername}
          profilePictureUrl={mockProfilePictureUrl}
        />,
      );
    });

    it('should pass profilePictureUrl into CardHeader avatar', () => {
      const actualProfilePictureUrl = wrapper.props().avatar.props.src;

      expect(actualProfilePictureUrl).toEqual(mockProfilePictureUrl);
    });

    it('should pass username into CardHeader title', () => {
      const actualUsername = wrapper.props().title;

      expect(actualUsername).toEqual(mockUsername);
    });
  });

  describe('when no props are passed in', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<InstaPostHeader />);
    });

    it('should set both profilePictureUrl and username as undefined', () => {
      const actualProfilePictureUrl = wrapper.props().avatar.props.src;
      const actualUsername = wrapper.props().title;

      expect(actualProfilePictureUrl).toBeUndefined();
      expect(actualUsername).toBeUndefined();
    });

    it('should render an Avatar with my initials JY', () => {
      const actualAvatar = wrapper.props().avatar;
      const placeholderInitials = actualAvatar.props.children;

      expect(placeholderInitials).toEqual('JY');
    });
  });
});
