// function solution(participant, completion) {
//     var answer = '';

//     for (let i = 0; i < participant.length; i++) {
//         let gotcha = false;
//         for (let j = 0; j < completion.length; j++) {
//             if (participant[i] === completion[j]) {
//                 participant.splice(i, 1);
//                 completion.splice(j, 1);
//                 i--;
//                 gotcha = true;
//                 break;
//             }
//         }
//         if (gotcha === false) {
//             answer = participant[i];
//             break;
//         }
//     }

//     return answer;
// }

function solution(participant, completion) {
    const hash = {}
    for(let i=0; i < participant.length; i++){
        const person = participant[i];
        if(person in hash){
            hash[person] += 1;
        }else{
            hash[person] = 1;
        }
    }

    for(let i=0; i < completion.length; i++){
        const person = completion[i];
        if(person in hash){
            hash[person] -= 1;
            if(hash[person] == 0){
                delete hash[person]
            }
        }
    }

    let answer
    for (const key in hash){
        answer = key;
    }

    console.log(hash, answer);
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"]
solution(participant, completion);

// completion.forEach((comple) => {
//     let partiLeng = parti.length;
//     for (let i = 0; i < partiLeng; i++) {
//         if (parti[i] === comple) {
//             parti.splice(i, 1);
//             i--;
//             break;
//         }
//     }
// });
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));



// let parti = [];
// let comple = [];

// participant.forEach((partici) => {
//     parti.push(partici);
// })
// completion.forEach((complet) => {
//     comple.push(complet);
// })

// for (let i = 0; i < parti.length; i++) {
//     let gotcha = false;
//     for (let j = 0; j < comple.length; j++) {
//         if (parti[i] === comple[j]) {
//             parti.splice(i, 1);
//             comple.splice(j, 1);
//             i--;
//             gotcha = true;
//             break;
//         }
//     }
//     if (gotcha === false) {
//         answer = parti[i];
//         break;
//     }
// }
