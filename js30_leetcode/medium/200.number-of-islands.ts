
const directions = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
}
const floodIsland = (i: number, j: number, grid: string[][]) => {
  let outOfMap = (() => {
    if (grid[i] && grid[i][j]) {
      return false
    }
    return true
  })()
  if (outOfMap) return
  if (grid[i][j] === '0') return
  grid[i][j] = '0'
  for (let [row, colum] of Object.values(directions)) {
    floodIsland(i + row, j + colum, grid)
  }
}
// 解題思路 1. 如果發現是陸地，島嶼數量 +1 ，然後將上下左右鄰居填平成大海
const numIslands = (grid: string[][]): number => {
  let islandCount = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islandCount++
        floodIsland(i, j, grid)
      }
    }
  }
  return islandCount
};
let input = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]
