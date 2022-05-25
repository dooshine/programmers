function solution(s) {
    var answer = 0;
    let temp = '';
    let tempWord = '';
    const numWord = [
        { num:0, word:'zero'},
        { num:1, word:'one'},
        { num:2, word:'two'},
        { num:3, word:'three'},
        { num:4, word:'four'},
        { num:5, word:'five'},
        { num:6, word:'six'},
        { num:7, word:'seven'},
        { num:8, word:'eight'},
        { num:9, word:'nine'}
    ];

    for(let i=0; i<s.length; i++){
        let charCode = s.charCodeAt(i);
        if(charCode>=48 && charCode<=57){
            temp += s[i];
        } else {
            tempWord += s[i];
            for(let j=0; j<numWord.length; j++){
                if(tempWord === numWord[j].word){
                    temp += numWord[j].num;
                    tempWord ='';
                }
            }
        }
    }
    answer = Number(temp);
    return answer;
}