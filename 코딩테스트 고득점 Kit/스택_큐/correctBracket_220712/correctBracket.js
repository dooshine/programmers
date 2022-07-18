// 22.07.12 오후5시15분 시작,

function solution(s) {
  var answer = true;
  const stk = [];
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      if (s.charAt(i) === ")") {
        answer = false;
        break;
      } else {
        stk.push(s.charAt(i));
      }
    } else {
      if (s.charAt(i) === "(") {
        stk.push(s.charAt(i));
      } else if (stk[stk.length - 1] !== "(") {
        answer = false;
        break;
      } else if (stk[stk.length - 1] === "(") {
        stk.pop();
      }
    }
    console.log(stk);
  }

  if (stk.length !== 0) {
    answer = false;
  }
  return answer;
}

const s = "(()(";
console.log(solution(s));
