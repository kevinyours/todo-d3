/**
 * https://github.com/d3/d3-fetch
 */

async function getData() {
  // const data = await d3.json('data.json');
  const data = await d3.csv('data.csv');
  console.log(data);
}

getData();
