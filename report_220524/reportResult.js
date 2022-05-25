function solution(id_list, report, k) {
    const leng = id_list.length;
    let arr1 = Array.from(Array(leng), ()=> Array(leng).fill(0));
    let arr2 = Array(leng).fill(0);
    let answer = Array(leng).fill(0);

    
    // report 조사,
    // report[i]에서 신고한, 신고당한 사람이름 추출, 이름 비교하여 인덱스 추출
    for(let i=0; i<report.length; i++){
        let reportId = null;
        let reportedId = null;
        let reportIndex = null;
        let reportedIndex = null;
        // report[i]에서 신고한 reportId와 reportedId 추출
        for(let j=0; j<report[i].length;j++){
            if(report[i][j] === ' '){
                reportId=report[i].substring(0,j);
                reportedId=report[i].substring(j+1,report[i].length);
                break;
            }
        }
        // id_list에서 reportId,reported index찾기
        for (let j=0; j<leng; j++){
            if(id_list[j] === reportId){
                reportIndex = j;
            } else if(id_list[j] === reportedId){
                reportedIndex = j;
            }
        }
        // arr1은 reportedIndex를 가진 사람이 reportIndex를 가진 사람에게 report 당했을 때,
        // report 내용이 중복이 아닐때만 기록하고, arr2는 reported의 수를 기록
        if ( arr1[reportedIndex][reportIndex] === 0){
            arr1[reportedIndex][reportIndex]=1;
            arr2[reportedIndex]+=1;
        }
    }
    
    // arr2를 조사하여 k번 이상 report 당했을 때, arr1을 참고하여 메세지를 받는 answer 배열값 +
    for(let i=0; i<leng; i++){
        if(arr2[i]>=k){
            for(let j=0; j<leng; j++){
                if(arr1[i][j] === 1){
                    answer[j]+=1;
                }
            }
        }
    }

    return answer;
}