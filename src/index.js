// @flow
import React from 'react';
import { render, createDocument } from 'react-swarm-ui';

import App from './components/App';

render(
  <App />,
  createDocument('http://localhost:9092'),
  () => console.log('running...')
);
