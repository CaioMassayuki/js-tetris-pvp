export function checkMatrixIndex(matrix, action) {
  for (let line = 0; line < matrix.length; line++) {
    for (let column = 0; column < matrix[line].length; column++) {
      action(line, column)
    }
  }
}