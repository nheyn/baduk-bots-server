// @flow
import React from 'react';

import Game from './Game';
import Logo from './Logo';

type Props = {};
type State = {
  hasLoaded: boolean,
  hasGameStarted: boolean,
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasLoaded: false,
      hasGameStarted: false,
    };
  }

  componentDidMount() {
    //TODO, figure out beter way todo this
    setTimeout(() => {
      this.setState({ hasLoaded: true  }, () => console.log('loaded'));
    }, 2000)
  }

  render() {
    const { hasLoaded, hasGameStarted } = this.state;

    return hasGameStarted?
      <Game stonesPerPlayer={15} />:
      <Logo
        width={0.2}
        height={0.2}
        right={0.2}
        bottom={0.2}
        onChangePosition={
          hasLoaded?
            () => this.setState({ hasGameStarted: true }):
            undefined
        }
      />;
  }
}
