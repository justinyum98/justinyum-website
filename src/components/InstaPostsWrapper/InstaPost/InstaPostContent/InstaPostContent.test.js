/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import _ from 'lodash';
import * as faker from 'faker';
import InstaPostContent from '.';

describe('InstaPostContent', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  describe('when all props are successfully passed in', () => {
    let mockLikeCount;
    let mockCommentsCount;
    let mockCaption;
    let wrapper;

    beforeEach(() => {
      mockLikeCount = faker.random.number(999);
      mockCommentsCount = faker.random.number(999);
      mockCaption = faker.lorem.sentences(2);

      wrapper = shallow(
        <InstaPostContent
          likeCount={mockLikeCount}
          commentsCount={mockCommentsCount}
          caption={mockCaption}
        />,
      );
    });

    it('should render a CardContent component', () => {
      const componentName = wrapper.type().options.name;

      expect(componentName).toEqual('MuiCardContent');
    });

    it('should render likeCount and commentsCount', () => {
      const actualLikeCount = _.toInteger(wrapper.childAt(0).childAt(1).text());
      const actualCommentsCount = _.toInteger(wrapper.childAt(0).childAt(3).text());

      expect(actualLikeCount).toEqual(mockLikeCount);
      expect(actualCommentsCount).toEqual(mockCommentsCount);
    });

    it('should render caption', () => {
      const actualCaption = wrapper.childAt(1).text();

      expect(actualCaption).toEqual(mockCaption);
    });
  });

  describe('when no props are passed in', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<InstaPostContent />);
    });

    it('should set likeCount, commentsCount, and caption as undefined', () => {
      const reactionsChildren = wrapper.childAt(0).children().length;
      const captionChildren = wrapper.childAt(1).children().length;

      expect(reactionsChildren).toEqual(2);
      expect(captionChildren).toEqual(0);
    });
  });
});
