// 22.07.09 12시40분 시작, 2시 40분 종료 -> 2시간 소요

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const onBridge = [];
  let onBridgeWeight = 0;
  let enterTime = 1;
  const leng = truck_weights.length;

  for (let i = 0; i < leng; i++) {
    const nowTruck = truck_weights.shift();
    if (onBridge.length !== 0) {
      while (onBridge[0][1] + bridge_length < enterTime) {
        const outTruck = onBridge.shift();
        onBridgeWeight -= outTruck[0];
      }
    }
    while (
      onBridgeWeight + nowTruck >
      weight
      //   || onBridge.length >= bridge_length
    ) {
      const outTruck = onBridge.shift();
      enterTime = outTruck[1] + bridge_length;
      onBridgeWeight -= outTruck[0];
    }

    onBridge.push([nowTruck, enterTime++]);
    onBridgeWeight += nowTruck;
    console.log(
      "onBridge:",
      onBridge,
      "onBridgeWeight:",
      onBridgeWeight,
      "enterTime:",
      enterTime
    );
  }

  const lastTruck = onBridge.pop();
  answer = bridge_length + lastTruck[1];
  return answer;
}

const bridge_length = 24;
const weight = 15;
const truck_weights = [
  5, 1, 8, 4, 3, 8, 7, 9, 11, 2, 5, 4, 3, 12, 5, 7, 5, 1, 8, 7, 9, 7, 14,
];

console.log(solution(bridge_length, weight, truck_weights));
