// @flow
import React from 'react';
import { render } from 'react-swarm-ui';

import Logo from './components/Logo'

render(
  <Logo
    width={0.2}
    height={0.2}
    right={0.05}
    bottom={0.05}
  />,
  'http://localhost:9092',
  () => console.log('running...')
);
