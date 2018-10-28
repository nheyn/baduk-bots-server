// @flow
import React from 'react';
import { render } from 'react-swarm-ui';

import App from './components/App'

render(
  <App />,
  'http://localhost:9092',
  () => console.log('running...')
);
