import { VisibilityFilters } from "../actions";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, deleteTodo } from "../actions";

const getFilteredItems = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items;
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter(item => !item.enabled);
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter(item => item.enabled);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  debugger;
  return {
    list: {
      ...state,
      data: getFilteredItems(
        state.todosReducer.data,
        state.visibilityFilterReducer
      )
    }
  };
};

const mapDispatchToProps = dispatch => ({
  handleToggle: id => dispatch(toggleTodo(id)),
  handleDelete: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
