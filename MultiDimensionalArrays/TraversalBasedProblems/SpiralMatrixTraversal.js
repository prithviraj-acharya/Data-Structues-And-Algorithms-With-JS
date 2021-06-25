/**
 * Problem statement:
 * You are given a 2-D array 'MATRIX' of dimensions N x M, of
 * integers. You need to return the spiral path of the matrix.
 */

let spiralMatrixTraversal = function (arr) {
  let numberOfRows = arr.length - 1;
  let numberOfColumns = arr[0].length - 1;

  let directionalVar = 0;

  let top = 0;
  let bottom = numberOfRows;
  let left = 0;
  let right = numberOfColumns;

  let traversalArr = [];

  while (top <= bottom && left <= right) {
    if (directionalVar === 0) {
      for (let i = left; i <= right; i++) {
        traversalArr.push(arr[top][i]);
      }

      top += 1;
    } else if (directionalVar === 1) {
      for (let i = top; i <= bottom; i++) {
        traversalArr.push(arr[i][right]);
      }

      right -= 1;
    } else if (directionalVar === 2) {
      for (let i = right; i >= left; i--) {
        traversalArr.push(arr[bottom][i]);
      }

      bottom -= 1;
    } else if (directionalVar === 3) {
      for (let i = bottom; i >= top; i--) {
        traversalArr.push(arr[i][left]);
      }

      left += 1;
    }

    directionalVar = (directionalVar + 1) % 4;
  }

  return traversalArr;
};
