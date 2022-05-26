function solution(absolutes, signs) {
    var answer = 123456789;
    const leng = absolutes.length;
    let numSum = 0;
    for(let i=0; i<leng; i++){
        if(signs[i]){
            numSum += absolutes[i];
        } else {
            numSum -= absolutes[i];
        }
    }
    answer = numSum;

    return answer;
}