import React, { Component } from "react";
import "./App.css";
import DenseAppBar from "./components/appBar";
import FilteredTodoList from "./containers/visibleTodoListContainer";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FormDialog from "./components/Dialog";
import TabsBar from "./components/TabsBar";
import { connect } from "react-redux";
import { addTodo, setVisbilityFilter } from "./actions";

const addButtonStyle = {
  marginTop: "5%",
  marginRight: "5px",
  float: "right"
};

class App extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = entry => {
    this.props.addTodo({ item: entry, enabled: true });
    this.setState({ open: false });
  };

  handleTabClick = (event, filter) => {
    console.log("filter: " + filter);
    this.props.setFilter(filter);
  };

  render() {
    return (
      <React.Fragment>
        <DenseAppBar />
        <TabsBar
          filter={this.props.filter}
          handleTabClick={this.handleTabClick}
        />
        <FilteredTodoList />
        <FormDialog
          open={this.state.open}
          handleClose={this.handleClose}
          handleSave={this.handleSave}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
          style={addButtonStyle}
        >
          <AddIcon />
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.visibilityFilterReducer,
    list: state.todosReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTodo: newTodo => dispatch(addTodo(newTodo)),
    setFilter: filter => dispatch(setVisbilityFilter(filter))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
