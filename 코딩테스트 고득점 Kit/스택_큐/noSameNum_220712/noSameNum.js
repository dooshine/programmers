// 22.07.12 오후5시시작, 오후 5시 15분 종료

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      answer.push(arr[i]);
      continue;
    }
    const lastAnswer = answer[answer.length - 1];
    if (lastAnswer !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
