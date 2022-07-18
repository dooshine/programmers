// START 22.07.12 PM 11:30

function solution(k, dungeons) {
  var answer = -1;
  let enterNum = 0;
  const max = [0];

  enterDungeon(k, dungeons, enterNum, max);
  answer = max[0];

  return answer;
}

const enterDungeon = (Fatigue, dungeons, enterNum, max) => {
  dungeons.forEach((dungeon, i) => {
    const restDungeons = [...dungeons];
    if (Fatigue >= dungeon[0]) {
      const restFatigue = Fatigue - dungeon[1];
      restDungeons.splice(i, 1);
      if (restDungeons.length === 0) {
        if (enterNum + 1 > max[0]) {
          max[0] = enterNum + 1;
        }
      } else {
        enterDungeon(restFatigue, restDungeons, enterNum + 1, max);
      }
    } else {
      if (i === dungeons.length - 1 && enterNum > max[0]) {
        max[0] = enterNum;
      }
    }
  });
};

const bigNum = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

console.log(solution(k, dungeons));
// dungeons[i][0] -> 최소 피로도
// dungeons[i][1] -> 소모 피로도
