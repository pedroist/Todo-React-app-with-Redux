const list = {
  currentId: 2,
  data: [
    { id: 0, item: "Todo 1", enabled: true },
    { id: 1, item: "Todo 2", enabled: true },
    { id: 2, item: "Todo 3", enabled: false }
  ]
};

const todosReducer = (state = list, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let nextId = state.currentId;
      nextId++;
      debugger;
      return {
        currentId: nextId,
        data: [
          ...state.data,
          {
            id: nextId,
            item: action.item.item,
            enabled: action.item.enabled
          }
        ]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        data: state.data.map(
          todo =>
            todo.id === action.id ? { ...todo, enabled: !todo.enabled } : todo
        )
      };
    case "DELETE_TODO":
      debugger;
      let updatedList = [...state.data];
      let index = updatedList.findIndex(item => item.id === action.id);
      if (index > -1) {
        updatedList.splice(index, 1);
      }

      return {
        ...state,
        data: updatedList
      };
    default:
      return state;
  }
};

export default todosReducer;
