import { csv } from 'd3';
import { useEffect, useState } from 'react';

// 4:26:43 Visualizing Data with React & D3

const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };
const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return <div>Data is {data ? 'loaded' : 'loading'}</div>;

  // const [mousePosition, setMousePosition] = useState(initialMousePosition);

  // const handleMouseMove = useCallback(
  //   (event) => {
  //     const { clientX, clientY } = event;
  //     setMousePosition({ x: clientX, y: clientY });
  //   },
  //   [setMousePosition]
  // );

  // return (
  //   <svg width={width} height={height} onMouseMove={handleMouseMove}>
  //     <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
  //   </svg>
  // );
}

// const array = range(6 * 3);

// function App() {
//   return array.map(() => (
//     <Face
//       width={width}
//       height={height}
//       centerX={width / 2}
//       centerY={height / 2}
//       strokeWidth={6 + Math.random() * 9}
//       eyeOffsetX={20 + Math.random() * 9}
//       eyeOffsetY={20 + Math.random() * 15}
//       eyeRadius={5 + Math.random() * 10}
//       mouthWidth={7 + Math.random() * 9}
//       mouthRadius={30 + Math.random() * 10}
//     />
//   ));
// }

export default App;
