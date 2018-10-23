import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  enabled: {
    color: "black"
  },
  disabled: {
    textDecoration: "line-through",
    color: "gray"
  }
});

const todoListItem = props => {
  const { index, item, enabled, classes } = props;
  const listItemClass = enabled ? classes.enabled : classes.disabled;
  return (
    <ListItem dense button onClick={() => props.handleToggle(index)}>
      <ListItemText primary={item} classes={{ primary: listItemClass }} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => props.handleDelete(index)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

todoListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(todoListItem);
