import React from 'react';
import Home from '../components/Home'
import Header from '../components/Header'
import StatContainer from '../components/StatContainer'
import { makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  bg: {
    background: 'linear-gradient(#c4c4c4, #545454)',
    height: "100vh",
    flexGrow: 1
  },
}));

export default function Main(props) {

  const classes = useStyles();

  return (<div className={classes.bg}>
    <Header />
    <StatContainer>
      <Home />
    </StatContainer>
  </div>);

}
