function sumFor(list) {
  let total = 0;
  for (const num of list) {
    total += num;
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (num0, num1) { return num0 + num1; });
}

const list = [2, 5, 12, 54, 32, 65, 23];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
