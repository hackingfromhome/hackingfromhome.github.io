import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";

import logo from "./logo.png";

const useHeaderItemStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  headerCard: {
    marginBottom: theme.spacing(2),
  },
}));

const HeaderItem = ({ title, description, actionFn }) => {
  const classes = useHeaderItemStyles();

  return (
    <Card className={classes.headerCard}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={actionFn}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  headerLine: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  headerLogo: {
    width: "300px",
  },
  rightMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
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
          <Box className={classes.headerLine}>
            <HeaderItem
              title="About"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={() => console.log("about")}
            />
            <HeaderItem
              title="Register"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={() => console.log("Register")}
            />
          </Box>
          <Box className={classes.headerLine}>
            <HeaderItem
              title="Rules & Prize"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={() => console.log("rules")}
            />
            <HeaderItem
              title="Mentors"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={() => console.log("Mentors")}
            />
          </Box>
        </Grid>
      </Grid>
      <footer className={classes.footer}>Sponsors</footer>
    </div>
  );
};

export default Home;
