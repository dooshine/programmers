function solution(progresses, speeds) {
    var answer = [];
    let distributeDay = 0;
    let distributeNum = 1;
    const remain = progresses.map(element => 100 - element);
    const distributeDate = remain.map((element, i) => Math.ceil(element / speeds[i]));

    distributeDay = distributeDate[0]
    for (let i = 1; i < progresses.length; i++) {
        if (distributeDate[i] > distributeDay) {
            distributeDay = distributeDate[i];
            answer.push(distributeNum);
            distributeNum = 1;
        } else {
            distributeNum++;
        }
    }
    answer.push(distributeNum);

    return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

solution(progresses, speeds);