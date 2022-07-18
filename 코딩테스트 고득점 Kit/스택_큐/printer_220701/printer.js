// 4H
function solution(priorities, location) {
  var answer = 0;
  const print = {};
  let order = 1;
  let prePoint = -1;
  const printOrder = new Array(priorities.length).fill(0);
  for (let i = 0; i < priorities.length; i++) {
    if (print[10 - priorities[i]] === undefined) {
      print[10 - priorities[i]] = new Array();
      print[10 - priorities[i]].push(i);
    } else {
      print[10 - priorities[i]].push(i);
    }
  }

  console.dir(print);
  for (key in print) {
    let point = 0;
    let leng = print[key].length;
    // console.dir(print[key]);
    // console.log(leng);
    // console.log(prePoint);

    for (let i = 0; i < leng; i++) {
      if (print[key][i] > prePoint) {
        if (i === 0) {
          prePoint = print[key][leng - 1];
          point = i;
          console.log(point);
          break;
        }
        prePoint = print[key][i - 1];
        point = i;
        console.log(point);
        break;
      } else if (i === leng - 1) {
        point = 0;
        prePoint = print[key][leng - 1];
      }
    }

    for (let i = point; i < leng; i++) {
      printOrder[print[key][i]] = order++;
    }

    for (let i = 0; i < point; i++) {
      printOrder[print[key][i]] = order++;
    }
  }

  console.log(printOrder);
  answer = printOrder[location];
  return answer;
}

const test = 10;
const testArray = new Array(test);
testArray.forEach((element) => console.log(element));

const priorities = [
  5, 6, 3, 4, 8, 6, 1, 2, 3, 4, 5, 8, 3, 5, 1, 8, 7, 6, 5, 4, 8, 9, 2, 3, 1, 8,
  7, 4, 5, 3, 4, 5, 3, 7, 8,
];
const location = 5;

console.log(solution(priorities, location));
