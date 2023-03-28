function chess(n) {
  let chessTable = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if ((i + j) % 2 === 0) {
        chessTable += ' ';
      } else {
        chessTable += '#';
      }
      if (j === 8) {
        chessTable += '\n';
      }
    }
  }
  return chessTable;
}

console.log(chess(8));
