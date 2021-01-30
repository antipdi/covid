import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = theme => ({
  root: {
    padding: '5px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100vh",
    marginTop: theme.spacing(2),
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
});

class Nav extends React.Component {
  constructor() {
    super();
    var city;
  }
  getData = () => {
    fetch('https://api.covid19api.com/summary').then(response => response.json()).then(data => {
      for(let i = 0; i < 188; i++) {
        if (data['Countries'][i]['Country'] == this.city || data['Countries'][i]['Slug'] == this.city || data['Countries'][i]['CountryCode'] == this.city) {
          let _data = {
            NewConfirmed: data['Countries'][i]['NewConfirmed'],
            NewDeaths: data['Countries'][i]['NewDeaths'],
            NewRecovered: data['Countries'][i]['NewRecovered'],
            TotalConfirmed: data['Countries'][i]['TotalConfirmed'],
            TotalDeaths: data['Countries'][i]['TotalDeaths'],
            TotalRecovered: data['Countries'][i]['TotalRecovered'],
            date: data['Date']
          }
          this.props.Callback(_data);
          console.log("AFTERCALLBACK")
        }
      }
      console.log("NOTFOUND")
    }).catch(err => alert("Wro"))
  }

  handleChange = (event) => {
    this.city = event.target.value
  }

  render() {

    const {classes} = this.props;

    return (<Paper component="form" className={classes.root}>
      <InputBase onChange={this.handleChange} className={classes.input} placeholder="Введите полное название страны или код страны" inputProps={{
          'aria-label' : 'search google maps'
        }}/>
      <IconButton onClick={this.getData.bind(this)} className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </Paper>)
  }
}

export default withStyles(useStyles)(Nav)
