// 22.07.11 오후 10시 30분 ~ 07.12.0130 -> 3시간

function solution(numbers) {
  var answer = "";
  const numArr = [];

  numbers.forEach((number) => {
    const numStr = number.toString();
    let stId = 0;
    let endId = numArr.length - 1;
    let target = 0;
    if (numArr.length === 0 || number === 0) {
      numArr.push(numStr);
    } else if (numArr.length === 1) {
      if (Number(numArr[0] + numStr) >= Number(numStr + numArr[0])) {
        numArr.push(numStr);
      } else {
        numArr.unshift(numStr);
      }
    } else {
      while (true) {
        target = Math.floor((stId + endId) / 2);
        if (target === stId) {
          if (Number(numArr[stId] + numStr) > Number(numStr + numArr[stId])) {
            if (
              Number(numArr[endId] + numStr) > Number(numStr + numArr[endId])
            ) {
              numArr.splice(endId + 1, 0, numStr);
            } else {
              numArr.splice(endId, 0, numStr);
            }
          } else {
            numArr.splice(stId, 0, numStr);
          }
          break;
        } else {
          if (
            Number(numArr[target] + numStr) > Number(numStr + numArr[target])
          ) {
            stId = target;
            continue;
          } else if (
            Number(numArr[target] + numStr) === Number(numStr + numArr[target])
          ) {
            numArr.splice(target, 0, numStr);
            break;
          } else {
            endId = target;
            continue;
          }
        }
      }
    }
  });

  answer = numArr.toString();
  answer = answer.replace(/,/g, "");
  if (Number(answer) === 0) {
    answer = "0";
  }

  return answer;
}

// const numbers = [
//   5, 4, 1, 8, 6, 48, 46, 5, 2, 1, 96, 65, 153, 489, 153, 1, 9, 2, 8, 36, 98, 7,
//   9, 5, 48,
// ];
const numbers = [
  5, 0, 4, 1, 8, 0, 6, 48, 46, 5, 2, 1, 96, 65, 153, 0, 489, 153, 0, 1, 9, 2, 8,
  36, 98, 0, 7, 9, 5, 48,
];

console.log(solution(numbers));

// const arr = [1, 5, 8, 3, 5, 489, 6, 7, 2, 1, 5, 8, 4];
// arr.sort((a, b) => a - b);
// console.log(arr);

//   const a = 6;
//   const b = 10;
//   const arr = [`${a}`, `${b}`];
//   if (Number(arr[0] + arr[1]) >= Number(arr[1] + arr[0])) {
//     console.log("a가 먼저다");
//   } else {
//     console.log("b가 먼저다");
//   }

// [1, 2, 3, 4, 5, 6, 7, 8];

// 5.8;
