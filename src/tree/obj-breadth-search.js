const obj = {
  id: 1,
  lvl: 'level 1',
  point: 'point level 1',
  nested: {
    id: 2,
    lvl: 'level 2',
    nested: {
      id: 3,
      lvl: 'level 3',
      nested: {
        id: 4,
        lvl: 'level 4',
        nested: {
          id: 5,
          level: 'level 5',
          point: 'point level 5'
        }
      },
    }
  },
  another: {
    id: 6,
    level: 'level 2',
    point: 'point level 2',
  },
};

function breadthFirstSearch(obj, target) {
  const queue = [];
  queue.push(obj);
  let node;
  while (queue.length) {
    node = queue.shift();
    if (Object.hasOwn(node, target)) {
      return node[target];
    }
    const keys = Object.keys(node);
    for (const key of keys) {
      if (typeof node[key] === 'object') {
        queue.push(node[key]);
      }
    }
  }
  return null;
}

const result = breadthFirstSearch(obj, 'point');
console.log(result);
