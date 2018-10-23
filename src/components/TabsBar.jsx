import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { VisibilityFilters as visibilityFilters } from "../actions";

const styles = {
  root: {
    flexGrow: 1
  }
};

class TabsBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.props.filter}
          onChange={this.props.handleTabClick}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All Todos" value={visibilityFilters.SHOW_ALL} />
          <Tab label="Done" value={visibilityFilters.SHOW_COMPLETED} />
          <Tab label="Todo" value={visibilityFilters.SHOW_ACTIVE} />
        </Tabs>
      </Paper>
    );
  }
}

TabsBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsBar);
