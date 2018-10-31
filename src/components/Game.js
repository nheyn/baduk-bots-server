// @flow
import React from 'react';

import StoneBowl from './StoneBowl';

type Props = {};
type State = {
  turn: [number, number, number], //TODO, export type type from react-swarm-ui
  blackBowlCount: number,
  whiteBowlCount: number,
};

const black = [0, 0, 0];
const white = [255, 255, 255];

export default class Game extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      turn: black,
      blackBowlCount: 14,
      whiteBowlCount: 15,
    };
  }

  render() {
    const { turn, blackBowlCount, whiteBowlCount } = this.state;

    return (
      <>
        <StoneBowl
          color={black}
          stoneCount={blackBowlCount}
          stoneSize={0.02}
          width={0.1}
          height={0.2}
          right={0.06}
          bottom={0.06}
        />
        <zooid
          destination={{
            right: 0.06 + (0.1 / 2),
            bottom: ((0.06 + 0.2) + 0.36) / 2,
          }}
          color={turn}
        />
        <StoneBowl
          color={white}
          stoneCount={whiteBowlCount}
          stoneSize={0.02}
          width={0.1}
          height={0.2}
          right={0.06}
          bottom={0.36}
        />
      </>
    );
  }
}
