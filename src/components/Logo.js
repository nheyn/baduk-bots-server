// @flow
import React from 'react';

type Props = {
  width: number,
  height: number,
  bottom: number,
  right: number,
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

function OuterBox({ width, height, right, bottom, children }) {
  return (
    <>
      <zooid des={[right, bottom]} col={blue} />
      <zooid des={[right, right + width]} col={blue} />
      <zooid des={[right + width, right]} col={blue} />
      <zooid des={[right + width, right + width]} col={blue} />
      {children}
    </>
  );
}

function InnerBox({ width, height, right, bottom }) {
  const xOffset = (width * (11/16));
  const yOffset = (height * (11/16));

  return (
    <>
      <zooid des={[right, bottom + yOffset]} col={blue} />
      <zooid des={[right + xOffset, bottom]} col={blue} />
      <zooid des={[right + xOffset, bottom + yOffset]} col={blue} />
    </>
  );
}

function Stones({ width, height, right, bottom }) {
  return (
    <>
      <zooid des={[right, bottom]} col={black} />
      <zooid des={[right, bottom + height]} col={white} />
      <zooid des={[right + width, bottom]} col={white} />
      <zooid des={[right + width, bottom + height]} col={black} />
    </>
  )
}
