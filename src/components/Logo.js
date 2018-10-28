// @flow
import React from 'react';

type Props = {
  width: number,
  height: number,
  bottom: number,
  right: number,
  onChangePosition?: (zooid: *) => void,
};

const blue = [0, 0, 255];
const black = [0, 0, 0];
const white = [255, 255, 255];

/**
 * Display the Baduk Logo.
 */
export default function Logo(props: Props) {
  const stonesWidth = props.width * (3/4) * (1/4);
  const stonesHeight = props.height * (3/4) * (1/4);

  return (
    <OuterBox {...props}>
      <InnerBox {...props} />
      <Stones
        width={stonesWidth}
        height={stonesHeight}
        right={props.right + (stonesWidth * (17/16))}
        bottom={props.bottom + (stonesHeight * (17/16))}
      />
    </OuterBox>
  );
}

function OuterBox(props) {
  const { width, height, right, bottom, onChangePosition, children } = props;

  return (
    <>
      <zooid
        destination={{ right, bottom }}
        color={blue}
        onChangePosition={onChangePosition}
      />
      <zooid destination={{ right, bottom: bottom + height }} color={blue} />
      <zooid destination={{ right: right + width, bottom }} color={blue} />
      <zooid
        destination={{ right: right + width, bottom: bottom + height }}
        color={blue}
      />
      {children}
    </>
  );
}

function InnerBox({ width, height, right, bottom }) {
  const xOffset = (width * (11/16));
  const yOffset = (height * (11/16));

  return (
    <>
      <zooid destination={{ right, bottom: bottom + yOffset }} color={blue} />
      <zooid destination={{ right: right + xOffset, bottom }} color={blue} />
      <zooid
        destination={{ right: right + xOffset, bottom: bottom + yOffset }}
        color={blue}
      />
    </>
  );
}

function Stones({ width, height, right, bottom }) {
  return (
    <>
      <zooid destination={{ right, bottom }} color={black} />
      <zooid destination={{ right, bottom: bottom + height }} color={white} />
      <zooid destination={{ right: right + width, bottom }} color={white} />
      <zooid
        destination={{ right: right + width, bottom: bottom + height }}
        color={black}
      />
    </>
  )
}
