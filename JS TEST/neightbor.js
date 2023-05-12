const apiEndPoint = 'https://hackbear.tv/graph/'

async function fetchNeighbors(node) {
  try {
    return fetch(apiEndPoint + node).then(res => res.json());
  } catch (e) {
    console.log(e)
  }
}

async function searchGraph(start) {
  let nodeList = []
  let vistors = new Set()
  let neighbors = await fetchNeighbors(start)
  nodeList.push(...neighbors)
  vistors.add(start)
  while (nodeList.length > 0) {
    const item = nodeList.shift()
    let n = await fetchNeighbors(item)
    console.log(item)
    vistors.add(item)
    for (let neighbor of n) {
      if (!vistors.has(neighbor)) {
        nodeList.push(neighbor)
        vistors.add(neighbor)
      }
    }
  }
}
searchGraph(1)