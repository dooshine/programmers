function locateChange(hand, nowLocate, futureLocate) {
    nowLocate[0] = futureLocate.vAxis;
    nowLocate[1] = futureLocate.hAxis;
    return (hand === 'L' ? 'L' : 'R');
}
function distanceTwo(nowLocate, inputLocate) {
    let xDiffer = Math.abs(nowLocate[0] - inputLocate.vAxis);
    let yDiffer = Math.abs(nowLocate[1] - inputLocate.hAxis);
    let dis = xDiffer + yDiffer;
    return dis;
}

function solution(numbers, hand) {
    var answer = '';
    let nowLHLocate = [-1, 1];
    let nowRHLocate = [1, 1];
    const numLocation = [
        { key: 0, vAxis: 0, hAxis: 1 },
        { key: 1, vAxis: -1, hAxis: 4 },
        { key: 2, vAxis: 0, hAxis: 4 },
        { key: 3, vAxis: 1, hAxis: 4 },
        { key: 4, vAxis: -1, hAxis: 3 },
        { key: 5, vAxis: 0, hAxis: 3 },
        { key: 6, vAxis: 1, hAxis: 3 },
        { key: 7, vAxis: -1, hAxis: 2 },
        { key: 8, vAxis: 0, hAxis: 2 },
        { key: 9, vAxis: 1, hAxis: 2 }
    ];

    for (let i = 0; i < numbers.length; i++) {
        let inputData = numLocation[numbers[i]];
        if (inputData.vAxis === -1) {
            answer += locateChange('L', nowLHLocate, inputData);
            // answer에 L추가, nowLHLocate 위치 바꿈
        } else if (inputData.vAxis === 1) {
            answer += locateChange('R', nowRHLocate, inputData);
            // answer에 R추가, nowRHLocate 위치 바꿈
        } else {
            let leftDistance = distanceTwo(nowLHLocate, inputData);
            let rightDistance = distanceTwo(nowRHLocate, inputData);
            if (leftDistance < rightDistance) {
                answer += locateChange('L', nowLHLocate, inputData);
            } else if (rightDistance < leftDistance) {
                answer += locateChange('R', nowRHLocate, inputData);
            } else {
                if (hand === 'left') {
                    answer += locateChange('L', nowLHLocate, inputData);
                } else {
                    answer += locateChange('R', nowRHLocate, inputData);
                }
            }
            // 거리 비교하여 더 짧은쪽이 있을 경우 answer에 해당손 추가, 해당 Locate 위치 바꿈
            // 거리가 같을 경우 hand가 right경우 r, left일경우 L
        }
    }
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))


// 패드 0 1 2 3 4 5 6 7 8 9
// 현재 위치 leftHandOn = '*', rightHandOn = '#'
// 1 4 7 => leftHand, lefthand 위치변함
// 369 => righthand, righthand 위치변함
// object numLocation [-1 4] [0 4] [1 4]
// 변수 [왼손 현재위치] [오른손 현재위치]