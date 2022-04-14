import React from 'react';
import BackgroundCircle from './BackgroundCircle';
import Eyes from './Eyes';
import FaceContainer from './FaceContainer';
import Mouth from './Mouth';

export function Face({
  width,
  height,
  centerX = width / 2,
  centerY = height / 2,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />{' '}
    </FaceContainer>
  );
}

export default Face;
