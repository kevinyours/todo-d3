const data = [10, 20, 30, 40, 50];

const el = d3.select('ul').selectAll('li').data(data);
// .join(
//   (enter) => {
//     return enter.append('li').style('color', 'purple');
//   }, // d3 로 추가되는 엘리먼트
//   (update) => update.style('color', 'green'), // 기존에 존재하던 엘리먼트
//   (exit) => exit.remove() // exit
// )
// .text((d) => d);

el.enter()
  .append('li')
  .text((d) => d);

el.exit().remove();

console.log(el);
