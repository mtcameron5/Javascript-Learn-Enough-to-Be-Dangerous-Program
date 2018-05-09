let a = [1,2,3,4,5,6,7,8,9,10];

// reduce: Iterative solution
function iterativeSum(array) {
  let total = 0;
  array.forEach(function(n) {
    total += n
  });
  return total;
}
console.log(iterativeSum(a));

// reduce: Functional solution

function functionalSum(array) {
  return array.reduce((total, n) => { return total += n });
}

console.log(functionalSum(a));

function imperativeLengths(state) {
  let lengths = {};
  states.forEach(function(state) {
    lengths[state] = state.length;
  });
  return lengths;
}
console.log(imperativeLengths(state));


function functionalLengths(states) {
  return states.reduce((lengths, state) => lengths[state] = state.length;
  return lengths;
}, {});
}
console.log(functionalLengths(states));
