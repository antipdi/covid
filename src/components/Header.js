import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  lnk: {
    textDecoration: 'none',
    color: '#fff',
  }
}));
// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb">
            <Link className={classes.lnk} to="/">Главная</Link>
          </Breadcrumbs> /
          <Breadcrumbs aria-label="breadcrumb">
            <Link className={classes.lnk} to="/country">Поиск по стране</Link>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
