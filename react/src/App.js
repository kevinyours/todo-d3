import { range } from 'd3';
import React from 'react';
import Face from './components/Face';

// 2:18:46 Loading Data with Fetch, Promises, Aync & Await

const width = 166;
const height = 166;

const array = range(6 * 3);

function App() {
  return array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={6 + Math.random() * 9}
      eyeOffsetX={20 + Math.random() * 9}
      eyeOffsetY={20 + Math.random() * 15}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 10}
    />
  ));
}

export default App;
