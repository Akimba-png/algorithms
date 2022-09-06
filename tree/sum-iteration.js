const tree = [
  {
    value: 5,
    children: [
      {
        value: 10,
        children: [
          {
            value: 11,
          },
        ],
      },
      {
        value: 7,
        children: [
          {
            value: 5,
            children: [
              {
                value: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 5,
    children: [
      {
        value: 10,
      },
      {
        value: 15,
      },
    ],
  },
];

function sumIteration(tree) {
  if (!tree.length) {
    return 0;
  }

  let sum = 0;
  const stack = [];
  tree.forEach(node => stack.push(node));

  while (stack.length) {
    const currentNode = stack.pop();
    sum +=  currentNode.value;
    if (currentNode.children) {
      stack.push(...currentNode.children);
    }
  }
  return sum;
}

const result = sumIteration(tree);
console.log(result);
