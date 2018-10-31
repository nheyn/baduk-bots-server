// @flow
import React from 'react';

type Props = {
  color: [number, number, number], //TODO, export type type from react-swarm-ui
  stoneCount: number,
  stoneSize: number, //TODO, get from context provied by react-swarm-ui
  width: number, //TODO, use relitive positioning, needs to be added to react-swarm-ui
  height: number, //TODO, use relitive positioning, needs to be added to react-swarm-ui
  right: number, //TODO, use relitive positioning, needs to be added to react-swarm-ui
  bottom: number, //TODO, use relitive positioning, needs to be added to react-swarm-ui
};

/**
 * The 'bowl' for stones not on the board.
 */
export default function StoneBowl({ color, ...otherProps }: Props) {
  return (
    <>
      {getLocations(otherProps).map((destination, i) =>
        <zooid key={i} destination={destination} color={color}  />
      )}
    </>
  );
}

function getLocations(props: *): Array<{ right: number, bottom: number }> {
  const { stoneCount, stoneSize, width, height, right, bottom } = props;

  const columnCapacity = Math.floor(height / stoneSize);
  let lastLoc;
  let locs = [];
  for (let i=0; i<stoneCount; i++) {
    let nextLoc;
    if (lastLoc === undefined) {
      nextLoc = {
        right: right,
        bottom: bottom,
      };
    }
    else {
      nextLoc = {
        right: lastLoc.right,
        bottom: lastLoc.bottom + (stoneSize*1.5)
      };

      if (nextLoc.bottom >= (bottom + height)) {
        nextLoc = {
          right: lastLoc.right + (stoneSize*1.5),
          bottom: bottom,
        };
      }
    }

    locs = [ ...locs, nextLoc ];
    lastLoc = nextLoc;
  }
  return locs;
}
