/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingProjects from '../src/components/LoadingProjects/LoadingProjects';

storiesOf('LoadingProjects', module)
  .add('default', () => <LoadingProjects />);
