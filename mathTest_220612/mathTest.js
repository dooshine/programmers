function solution(answers) {
    var answer = [];
    answer = answerCount(answers);
    return answer;
}

// 1번 수포자가 찍는 방식: [1, 2, 3, 4, 5], 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: [2, 1, 2, 3, 2, 4, 2, 5], 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

const answerCount = (answers) => {
    const first = [{ key: 1, next: 1 }, { key: 2, next: 2 }, { key: 3, next: 3 }, { key: 4, next: 4 }, { key: 5, next: 0 }];
    const second = [{ key: 2, next: 1 }, { key: 1, next: 2 }, { key: 2, next: 3 }, { key: 3, next: 4 }, { key: 2, next: 5 }, { key: 4, next: 6 }, { key: 2, next: 7 }, { key: 5, next: 0 }];
    const third = [{ key: 3, next: 1 }, { key: 3, next: 2 }, { key: 1, next: 3 }, { key: 1, next: 4 }, { key: 2, next: 5 }, { key: 2, next: 6 }, { key: 4, next: 7 }, { key: 4, next: 8 }, { key: 5, next: 9 }, { key: 5, next: 0 }];
    const index = { firstId: 0, secondId: 0, thirdId: 0 };
    const count = { '1': 0, '2': 0, '3': 0 };
    for(let i=0; i<answers.length; i++){
        if(answers[i]===first[index.firstId].key){
            count['1']++;
        }
        if(answers[i]===second[index.secondId].key){
            count['2']++;
        }
        if(answers[i]===third[index.thirdId].key){
            count['3']++;
        }
        index.firstId=first[index.firstId].next;
        index.secondId=second[index.secondId].next;
        index.thirdId=third[index.thirdId].next;
    }
    console.log(count);
    let answer=[];
    let maxCount=-1;
    for(let key in count){
        if(count[key]>maxCount){
            answer=[Number(key)];
            maxCount=count[key];
        } else if(count[key]===maxCount){
            answer.push(Number(key));
        }
    }
    return answer;
}

let answers = [1,3,2,4,2];

solution(answers);