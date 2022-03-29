// const pBrowser = document.querySelector('p');
const el = d3
  .select('body')
  .append('p')
  // .attr('class', 'foo')
  .classed('foo', true) // true: 추가, false: 제거
  .classed('bar', true)
  .text('Hello World')
  .style('color', 'teal');

// console.log(pBrowser);
console.log(el);
