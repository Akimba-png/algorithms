// Особенность поиска в шириру в том,
// что сначала просматриваются все элементы на одном уровне вложенности
// и, если искомый элемент не найден, поиск переходит на ступень ниже.

const graph = {};

graph.a = ['b', 'c'];
graph.b =['f'];
graph.c=['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
  const queue = [];
  queue.push(start);
  while (queue.length) {
    const currentNode = queue.shift();
    if (!graph[currentNode]) {
      graph[currentNode] = [];
    }
    if (graph[currentNode].includes(end)) {
      return true;
    }
    queue.push(...graph[currentNode]);
  }
  return false;
}

const result = breadthSearch(graph, 'a', 'g');
console.log(result);
