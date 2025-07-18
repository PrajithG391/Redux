
const initialState = { count: 0 };


function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}


const store = Redux.createStore(counterReducer);


store.subscribe(() => {
  document.getElementById("count").innerText = store.getState().count;
});


function increment() {
  store.dispatch({ type: "INCREMENT" });
}
function decrement() {
  store.dispatch({ type: "DECREMENT" });
}
