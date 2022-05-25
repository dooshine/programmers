// 1단계, toLowerCase
function toLowerCase(str) {
    let lowerCaseStr = str.toLowerCase();
    return lowerCaseStr;
}
// 2단계, ASCII code로 변환(charCodeAt)하여 소문자, 숫자, 빼기, 밑줄, 마침표일 때, noSCStr에 더해서 noSCStr return
function noSC(str) {
    let noSCStr = '';
    for(let i=0; i<str.length; i++){
        let char = str.charCodeAt(i);
        if( (char>=97&&char<=122) || (char>=48 && char<=57) || 
             char===45 || char===95 || char===46 ) {
            noSCStr += str[i];
        }
    }
    return noSCStr;
}
// 3단계, .. 제거, stack을 선언하여,
// str[i]가 '.'이라면 stack 추가, stack 추가 후 stack이 2면 str에 char추가X  continue, stack이 1이면 str에 char 추가
// str[i]가 '.'아니라면 stack =0, char str에 추가
function noPeriodDouble(str) {
    let noPeriodDoubleStr = '';
    let stack = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]==='.'){
            stack++;
            if(stack===2){
                stack--;
                continue;
            } else {
                noPeriodDoubleStr+=str[i];
            }
        } else {
            stack = 0;
            noPeriodDoubleStr+=str[i];
        }
    }
    return noPeriodDoubleStr;
}
// 4단계 첫, 끝 '.'제거
function noPeriodFE(str) {
    const leng = str.length;
    let noPeriodFEStr = '';
    if(str[0]==='.'){
        if(str[leng-1]==='.'){
            for(let i=1; i<leng-1; i++){
                noPeriodFEStr+=str[i];
            }
        } else {
            for(let i=1; i<leng; i++){
                noPeriodFEStr+=str[i];
            }
        }
    } else {
        if(str[leng-1]==='.'){
            for(let i=0; i<leng-1; i++){
                noPeriodFEStr+=str[i];
            }
        } else {
            for(let i=0; i<leng; i++){
                noPeriodFEStr+=str[i];
            }
        }
    }
    return noPeriodFEStr;
}
// 5단계, 빈 문자열이라면 a대입
function emptyToA(str) {
    let emptyToAStr;
    if ( str.length === 0) {
        emptyToAStr = 'a';
    } else {
        emptyToAStr = str;
    }
    return emptyToAStr;
}
// 6단계, 16자 이상이면 제거
function lengLessThanSixteen(str) {
    let lengLessThanSixteenStr = '';
    const maxLeng = 16;
    const leng = str.length;
    if ( leng >= maxLeng ) {
        for(let i =0; i<maxLeng-2; i++) {
            lengLessThanSixteenStr += str[i];
        }
        if (!(str[maxLeng-2] === '.')){
            lengLessThanSixteenStr += str[maxLeng-2];
        }
    } else {
        for(let i =0; i<leng; i++) {
            lengLessThanSixteenStr += str[i];
        }
    }
    return lengLessThanSixteenStr;
}
// 7단계, 2자이하면 마지막 부분 길이 3될때까지 반복
function lengMinimumThree(str) {
    let lengMinimumThreeStr = '';
    const leng = str.length;
    const minimumLeng = 3;
    lengMinimumThreeStr = str;
    if(leng<=2) {
        while(lengMinimumThreeStr.length<3)
        lengMinimumThreeStr += str[leng-1];
    }
    return lengMinimumThreeStr;
}

function solution(new_id) {
    let answer = null;
    let tempStr = null;
    
    tempStr = toLowerCase(new_id);
    tempStr = noSC(tempStr);
    tempStr = noPeriodDouble(tempStr);
    tempStr = noPeriodFE(tempStr);
    tempStr = emptyToA(tempStr);
    tempStr = lengLessThanSixteen(tempStr);
    tempStr = lengMinimumThree(tempStr);
    
    answer = tempStr;
    return answer;
}