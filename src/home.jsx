import React from 'react';
import { Paper, makeStyles, Grid } from '@material-ui/core';
import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  headerLogo: {
    width: '300px',
  },
  rightMenu: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={logo} className={classes.headerLogo} />
        </Grid>
        <Grid item xs={6} className={classes.rightMenu}>
          <Paper className={classes.paper}>About</Paper>
          <Paper className={classes.paper}>Rules & Prize</Paper>
        </Grid>
      </Grid>
      < footer className={classes.footer} >
        Sponsors
      </footer >
    </div>
  );
}

export default Home;
