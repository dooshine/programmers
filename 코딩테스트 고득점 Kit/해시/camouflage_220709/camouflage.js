function solution(clothes) {
  var answer = 1;
  const clothesObj = {};
  clothes.forEach((element) => {
    console.log(element[1]);
    if (clothesObj[element[1]] === undefined) {
      clothesObj[element[1]] = new Array();
      clothesObj[element[1]].push(element[0]);
    } else {
      clothesObj[element[1]].push(element[0]);
    }
  });
  for (key in clothesObj) {
    answer *= clothesObj[key].length + 1;
  }
  answer--;
  console.log(clothesObj);
  return answer;
}

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

solution(clothes);
