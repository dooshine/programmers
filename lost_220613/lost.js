function solution(n, lost, reserve) {
    var answer = makeInputArray(n, lost, reserve);
    return answer;
}
function makeInputArray(n, lost, reserve) {
    let classNum = 0;//////
    const inputArray = [];
    for (let i = 0; i < n; i++) {
        inputArray.push({ index: i, lostB: false, reserveB: false });
    }
    lost.forEach(element => {
        inputArray[element - 1]['lostB'] = true;
    })
    reserve.forEach(element => {
        inputArray[element - 1]['reserveB'] = true;
    })
    inputArray.forEach(element => {
        if (!(element.lostB) && element.reserveB) {
            element.clothes = 2;
        } else if (!(!(element.lostB) || element.reserveB)) {
            element.clothes = 0;
        } else {
            element.clothes = 1;
        }
    })
    inputArray.forEach(element => {
        if (element.clothes === 0) {
            if (element.index === 0) {
                if (inputArray[element.index + 1].clothes === 2) {
                    element.clothes = 1;
                    inputArray[element.index + 1].clothes = 1;
                    classNum++;
                }
            } else if (element.index === inputArray.length - 1) {
                if (inputArray[element.index - 1].clothes === 2) {
                    element.clothes = 1;
                    inputArray[element.index - 1].clothes = 1;
                    classNum++;
                }
            } else {
                if (inputArray[element.index - 1].clothes === 2) {
                    element.clothes = 1;
                    inputArray[element.index - 1].clothes = 1;
                    classNum++;
                } else if (inputArray[element.index + 1].clothes === 2) {
                    element.clothes = 1;
                    inputArray[element.index + 1].clothes = 1;
                    classNum++;
                }
            } 
        } else {
            classNum++;
        }
    })
    return classNum;
}
// 잃지않고 여벌챙김, 잃지않고 여벌안챙김
// 잃고 여벌챙김, 잃고 여벌안챙김
const n = 3;
const lost = [3]
const reserve = [1]
makeInputArray(n, lost, reserve);