// 22.07.12 10시 20분 시작
function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      if (i === citations.length - 1) {
        answer = citations.length;
        break;
      }
      continue;
    } else {
      if (i === 0) {
        answer = 0;
        break;
      }
      answer = i;
      break;
    }
  }
  return answer;
}

// h, 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고, 나머지 논문이 h번 이하 인용, h의 최댓값이 이 과학자의 H-index

const citations = [3, 0, 6, 1, 5];

console.log(solution(citations));
