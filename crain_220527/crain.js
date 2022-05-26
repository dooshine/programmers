function solution(board, moves) {
    var answer = 0;
    const boardLeng = board.length;
    const movesLeng = moves.length;
    let stack = [];

    for (let i = 0; i < movesLeng; i++) {
        for (let j = 0; j < boardLeng; j++) {
            let pick = board[j][moves[i]-1];
            if (pick !== 0) {
                if (stack.length === 0) {
                    stack.push(pick);
                } else {
                    if (stack[stack.length - 1] === pick) {
                        stack.pop();
                        answer++;
                    } else {
                        stack.push(pick);
                    }
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return answer*2;
}

// 2차원 배열(n*n)에 인형들 정보 담겨있다.
// moves 배열에는 몇번째 배열에서 가져오는지
// [[0, 0, 0, 0, 0],
// [0, 0, 1, 0, 3],
// [0, 2, 5, 0, 1],
// [4, 2, 4, 4, 2],
// [3, 5, 1, 3, 1]]
