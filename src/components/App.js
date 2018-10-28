// @flow
import React from 'react';

import Logo from './Logo';

type Props = {};
type State = {
  right: number,
  bottom: number,
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      right: 0.05,
      bottom: 0.05,
    };
  }

  render() {
    const { right, bottom } = this.state;

    return (
      <Logo
        width={0.2}
        height={0.2}
        right={right}
        bottom={bottom}
        onChangePosition={(zooid) => {
          this.setState(({ right, bottom }) => ({
            right: zooid.pos[0],
            bottom: zooid.pos[1],
          }));
        }}
      />
    );
  }
}
