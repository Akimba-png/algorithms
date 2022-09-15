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


function sumRecursion(tree) {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.value;
    if (node.children) {
      sum += sumRecursion(node.children);
    }
  });
  return sum;
}

const result = sumRecursion(tree);
console.log(result);
