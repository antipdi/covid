import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: 72,
    padding: 12,
    borderBottom: '2px solid #000000',
    borderRadius: 50
  },
  casesContainer: {
    position: 'flex',
    padding: 8,
    margin: 16,
    flexDirection: 'columns',
    justifyContent: 'center'
  },
  caseItem: {
    border: '1px solid #000000',
    display: 'flex',
    borderRadius: 25,
    margin: 32,
    height: '180%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  hItem: {
    fontSize: 19,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  date: {
    flex: 1
  }
});

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      day: new Date()
    }

    this.getData();
  }

  getData = () => {
    fetch('https://api.covid19api.com/summary').then(response => response.json()).then(data => {
      console.log(data)
      let _data = {
        NewConfirmed: data['Global']['NewConfirmed'],
        NewDeaths: data['Global']['NewDeaths'],
        NewRecovered: data['Global']['NewRecovered'],
        TotalConfirmed: data['Global']['TotalConfirmed'],
        TotalDeaths: data['Global']['TotalDeaths'],
        TotalRecovered: data['Global']['TotalRecovered'],
        date: data['Date']
      }
      this.setState({ data: _data })
      //console.log(_data)
    }).catch(err => alert("Wro"))
  }

  render() {
    const { classes } = this.props;

    return (<div className={classes.root}>
      <div className={classes.header}>Глобальные данные Covid-19</div>
      <Grid container="container" spacing={8} className={classes.casesContainer}>
        <Grid item="item" xs={3} className={classes.caseItem}>
          <div style={{
            flex: 10
          }}>
            <div className={classes.hItem}>
              <b>
                Подтверждено
              </b>
            </div>
            <div style={{
              marginTop: 48
            }}>
              За сегодняшний день:  {getNumberWithSpaces(this.state.data.NewConfirmed)}
            </div>
            <div>
              Общее количество: {getNumberWithSpaces(this.state.data.TotalConfirmed)}
            </div>
          </div>
          <div className={classes.date}>
            Эта статистика за:{getDate(String(this.state.data.date))}
            {/* <code>{this.state.day.getDate()}.{this.state.day.getMonth() + 1}.{this.state.day.getFullYear()}</code> */}
          </div>
        </Grid>
        <Grid item="item" xs={3} className={classes.caseItem}>
          <div style={{
            flex: 10
          }}>
            <div className={classes.hItem}>
              <b>
                Выздоровело
              </b>
            </div>
            <div style={{
              marginTop: 48
            }}>
              За сегодняшний день: {getNumberWithSpaces(this.state.data.NewRecovered)}
            </div>
            <div>
              Общее количество: {getNumberWithSpaces(this.state.data.TotalRecovered)}
            </div>
          </div>
          <div className={classes.date}>
            Эта статистика за:{getDate(String(this.state.data.date))}
           
          </div>
        </Grid>
        <Grid item="item" xs={3} className={classes.caseItem}>
          <div style={{
            flex: 10
          }}>
            <div className={classes.hItem}>
              <b>
                Умерло
              </b>
            </div>
            <div style={{
              marginTop: 48
            }}>
              За сегодняшний день: {getNumberWithSpaces(this.state.data.NewDeaths)}
            </div>
            <div>
              Общее количество: {getNumberWithSpaces(this.state.data.TotalDeaths)}
            </div>
          </div>
          <div className={classes.date}>
            Эта статистика за:
            {getDate(String(this.state.data.date))}
          </div>
        </Grid>
      </Grid>
    </div>);
  }
}

export default withStyles(useStyles)(Content)

function getNumberWithSpaces(num) {
  //console.log(num);
  let str = "";
  while (num > 0) {
    let t = String(num % 1000);
    num = Math.floor(num / 1000);
    str = " " + t + str;

  }
  return str;
};

export function getDate(str) {
  return " " + str.slice(0, 10)
}