/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '../src/components/Home/Home';

storiesOf('Home', module)
  .add('default', () => <Home />);
