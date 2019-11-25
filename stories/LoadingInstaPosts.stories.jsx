/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingInstaPosts from '../src/components/LoadingInstaPosts/LoadingInstaPosts';

storiesOf('LoadingInstaPosts', module)
  .add('default', () => <LoadingInstaPosts />);
