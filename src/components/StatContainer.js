import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = theme => ({
  root: {
    backgroundColor: '#e8e8e8',
    width: '80%',
    height: '80%',
    position: 'absolute',
    top: '10%',
    left: '10%',
    border: '5px solid #000000',
    borderRadius: 50,
    display: 'flex',
  },
});

class Content extends React.Component {
  render() {
    const { classes } = this.props;

    return (<div className={classes.root}>
      {this.props.children}

    </div>);
  }
}

export default withStyles(useStyles)(Content)
