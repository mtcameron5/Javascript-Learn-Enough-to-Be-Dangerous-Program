let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeFilter(states) {
  let singleWordStates = [];
  states.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singleWordStates.push(state);
    }
  });
  return singleWordStates;
}
console.log(imperativeFilter(states));

function functionalFilter(states) {
  return states.filter(state => state.split(/\s+/).length === 1);
}

console.log(functionalFilter(states));
