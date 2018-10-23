export const addTodo = item => ({
  type: "ADD_TODO",
  item
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

export const setVisbilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

//FALTA DELETE ACTION

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
