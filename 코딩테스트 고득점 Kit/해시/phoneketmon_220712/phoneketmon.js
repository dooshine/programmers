// 22.07.12 오후 7시 시작
function solution(nums) {
  var answer = 0;
  const phoneketmons = {};
  nums.forEach((element, i) => {
    if (phoneketmons[element] === undefined) {
      phoneketmons[element] = [i];
    } else {
      phoneketmons[element].push(i);
    }
  });
  const count = Object.keys(phoneketmons).length;
  if (count > nums.length / 2) {
    answer = nums.length / 2;
  } else {
    answer = count;
  }

  return answer;
}

const nums = [3, 3, 3, 2, 2, 4];

console.log(solution(nums));
