// Алгоритм находит кратчайшие пути от одной из вершин графа
// до всех остальных (работает только для графов без рёбер
// отрицательного веса).

const graph = {};

graph.a ={b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

function dijkstraSearch(graph, start) {
  const costTable = {};
  const processed = [];
  let neighbour = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      costTable[node] = graph[start][node] || Infinity;
    }
  });

  let cheapestNode = getCheapestNode(costTable, processed);

  while (cheapestNode) {
    neighbour = graph[cheapestNode];
    Object.keys(neighbour).forEach((node) => {
      costTable[node] = costTable[cheapestNode] + neighbour[node];
    });
    processed.push(cheapestNode);
    cheapestNode = getCheapestNode(costTable, processed);
  }

  return costTable;
}

function getCheapestNode(costTable, processed) {
  let cheapestNode;
  let cheapestCost = Infinity;
  Object.keys(costTable).forEach((node) => {
    if (costTable[node] < cheapestCost && !processed.includes(node)) {
      cheapestNode = node;
      cheapestCost = costTable[node];
    }
  });
  return cheapestNode;
}

const result = dijkstraSearch(graph, 'a');
console.log(result);


// Алгоритм поиска Дейкстра ищет минимальный путь до вершины в графе.
// 1. На первом этапе необходимо заполнить таблицу вершин с указанием их стоимости;
// 1.1. Стартовая вершина в таблицу не входит;
// 1.2. Реальную стоймость указываем только для тех вершин, в которые можно добраться из стартовой вершины;
// 1.3. Для всех остальных вершин указываем бесконечно большую стоймость;

// 2. На втором этапе из всей таблицы стоимостей ищем вершину с минимальной стоймостью;
// 2.1. Для этого искомая вершина должна иметь самую низкую стоимость в таблице и не входить в массив уже обработанных вершин;

// 3. В таблице стоимостей обновляем общую стоймость у соседних (вложенных), с найденной на прошлом шаге, вершины с минимальной стоймостью;
// 3.1. Общая стоймость складывается из стоймостей от самой начальной точки + стоймость точки с минимальной стоймостью наденной на шаге 2;
// 3.2. Обработанную вершину с минимальной стоймостью добавляем в массив обработанных вершин;
// 3.3. Ищем новую вершину с минимальной стоймостью и в таблице стоймостей обновляем общую стоймость её дочерних вершин (т.е. зацикливаем шаг 2 и 3);
// 3.3. На последней итерации цикла вершина с минимальной стоймостью будет undefined и мы выходим из цикла;

// 4. Возвращаем таблицу стоймостей;
