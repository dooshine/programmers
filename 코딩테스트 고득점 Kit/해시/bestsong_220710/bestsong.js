// 22.07.10 1500시작 (1시간)
// 22.07.11 오후 1시 시작, 오후 2시 30분 종료

function solution(genres, plays) {
  var answer = [];
  const total = {};
  const genresOrder = {};
  for (let i = 0; i < genres.length; i++) {
    if (total[genres[i]] === undefined) {
      total[genres[i]] = new Array();
      total[genres[i]].push([i, plays[i]]);
    } else {
      total[genres[i]].push([i, plays[i]]);
    }
  }
  for (key in total) {
    let genre = total[key];
    let sum = 0;
    for (let i = 0; i < genre.length; i++) {
      sum += genre[i][1];
    }
    genresOrder[sum] = key;

    if (genre.length > 1) {
      if (genre[1][1] > genre[0][1]) {
        let temp = genre[0];
        genre[0] = genre[1];
        genre[1] = temp;
      }

      for (let i = 1; i < genre.length; i++) {
        if (genre[i][1] > genre[1][1]) {
          let temp = genre[1];
          genre[1] = genre[i];
          genre[i] = temp;
          if (genre[1][1] > genre[0][1]) {
            let temp = genre[0];
            genre[0] = genre[1];
            genre[1] = temp;
          }
        }
      }
    }
  }
  console.log(total);

  const genresTP = Object.keys(genresOrder).reverse();
  genresTP.forEach((element) => {
    let genre = genresOrder[element];
    if (total[genre].length === 1) {
      answer.push(total[genre][0][0]);
    } else {
      answer.push(total[genre][0][0]);
      answer.push(total[genre][1][0]);
    }
  });
  console.log(genresOrder);

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));

// 장르별로 plays 횟수 다 더해서
// genre의 순서를 정해
// genre 중 2개 이상이면 개중 play 횟수가 가장 높은 순으로 2개를 선택해서 순서 부여, 1개면 순서 부여

// for (let i = 0; i < genres.length; i++) {
//   const ith = { genre: genres[i], plays: plays[i] };
//   total[i] = ith;
// }
