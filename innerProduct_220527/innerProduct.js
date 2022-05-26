function solution(a, b) {
    var answer = 1234567890;
    let sum = 0;
    const leng = a.length;
    for(let i=0; i<leng; i++){
        sum += a[i]*b[i];
    }
    answer = sum;
    return answer;
}