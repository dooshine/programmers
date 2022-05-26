function solution(nums) {
    var answer = -1;
    const leng = nums.length;
    let threeNumSum = 0;
    let primeNumberCount;
    for(let i=0; i<leng; i++){
        for(let j=0; j<leng; j++){
            if(i===j){
                continue;
            } else {
                for(let k=0; k<leng; k++){
                    if( k===i || k===j){
                        continue;
                    } else {
                        threeNumSum=nums[i]+nums[j]+num[k];
                        primeNumberCount += isPrimeNumber(threeNumSum);
                    }
                }
            }
        }

    }
}

function isPrimeNumber (num) {
    for(let i=2;i<num;i++){
        if(num===2){
            return 1;
        } else {
            if(num%i ===0){
                return 0;
            }
        }
    }
}