// 1️⃣ Initial State
const initialState = { count: 0 };

// 2️⃣ Reducer (chef)
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

// 3️⃣ Create Store (warehouse)
const store = Redux.createStore(counterReducer);

// 4️⃣ Subscribe → whenever store updates, update the UI
store.subscribe(() => {
  document.getElementById("count").innerText = store.getState().count;
});

// 5️⃣ Dispatch Actions (order slips)
function increment() {
  store.dispatch({ type: "INCREMENT" });
}
function decrement() {
  store.dispatch({ type: "DECREMENT" });
}
