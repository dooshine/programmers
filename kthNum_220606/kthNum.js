function solution(array, commands) {
    var answer = [];
    commands.forEach(element => {
        let tempArr = [];
        tempArr = array.slice(element[0]-1, element[1]);
        tempArr.sort( function(a,b){
            return a-b;
        });
        answer.push(tempArr[element[2]-1]);
    });
    return answer;
}

let array1 = [1, 5, 2, 6, 3, 7, 4];
const command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

solution(array1, command);