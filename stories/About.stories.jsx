/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import About from '../src/components/About/About';

storiesOf('About', module)
  .add('default', () => <About />);
