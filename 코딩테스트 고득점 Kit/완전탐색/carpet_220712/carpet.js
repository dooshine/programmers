// START 22.07.12 PM 11:20
// END 22.07.12 PM 11:30

function solution(brown, yellow) {
  var answer = [];
  let height = 2;
  let sum = brown / 2 + 2;
  let length = sum - height;

  while (length >= height) {
    if ((length - 2) * (height - 2) === yellow) {
      answer.push(length, height);
    }
    length--;
    height++;
  }

  return answer;
}

const brown = 24;
const yellow = 24;

console.log(solution(brown, yellow));

// 가로는 세로보다 길거나 같다 -> 세로가 2부터 시작해서 3까지
// brown + 4 / 2 == 가로세로 합(가로 세로는 최소 2)
// yellow = (가로-2)*(세로-2)
