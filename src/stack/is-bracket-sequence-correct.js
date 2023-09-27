// Основной принцип ПСП заключается в том, что не важно на сколько глубок
// уровень скобочной  вложенности.
// Как бы не велика была бы последовательность открывающих скобок,
// всегда за последней открывающей скобкой должна идти её закрывающая пара

const sequence = '(){[]()}((({})))[]';

function isBracketSequenceCorrect(seq) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>',
  };
  const stack = [];
  const openBrackets = Object.keys(map);
  let previous;

  for (const elem of seq) {
    if (openBrackets.includes(elem)) {
      stack.push(elem);
    }
    else if (stack.length !== 0) {
      previous = stack.pop();
      if (map[previous] !== elem) {
        return false;
      }
    }
    else {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
}


const result = isBracketSequenceCorrect(sequence);
console.log(result);
