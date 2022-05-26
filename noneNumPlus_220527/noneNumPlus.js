function solution(numbers) {
    var answer = -1;
    const leng = numbers.length;
    const number = 9;
    const oneToNumPlus = number * (number + 1) / 2;
    for (let i = 0; i < leng; i++) {
        oneToNumPlus -= numbers[i];
    }
    answer=oneToNumPlus;
    return answer;
}

// numbers
