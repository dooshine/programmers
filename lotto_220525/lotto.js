function solution(lottos, win_nums) {
    let answer = [];
    let zeroNum = 0;
    let correctNum = 0;
    // lottos의 모든 요소들을 차례로 검사하되, 0이면 zeroNum을 증가, win_nums와 같은 번호가 있다면 correctNum 증가
    for(let i=0; i<lottos.length; i++){
        if(lottos[i] === 0){
            zeroNum++;
        } else {
            for(let j=0; j<win_nums.length; j++){
                if(lottos[i] === win_nums[j]){
                    correctNum++;
                }
            }
        }
    }
    
    answer[0] = ( correctNum===0 && zeroNum===0 ? 6 : 6-correctNum-zeroNum+1 );
    answer[1] = ( correctNum===0 ? 6 : 7-correctNum );
    // 0<=zN<=6-cN
    // 최대 6-cN-zN+1, 최소 cN==0 => 6, 7-cN
    return answer;
}