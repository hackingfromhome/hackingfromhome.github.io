import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import logo from "./logo.png";
import coinsquareLogo from "./coinsquare_transparent.png";

const ABOUT = "about";
const RULES_PRIZES = "rulesAndPrizes";
const REGISTER = "register";
const MENTORS = "mentors";

const Register = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Typography variant="h1" gutterBottom>
          Register
        </Typography>
        <Typography variant="body1" gutterBottom>
          Registration is not open yet, but you can subscribe to receive an
          email when the registration opens.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          After Registration
        </Typography>
        <Typography variant="body1" gutterBottom>
          After you register you will be invited to a Slack group where you will
          be able to connect with other participants, discuss ideas for projects
          and get to know the amazing people involved in the Hacking From Home
          hackathon.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box p="30px">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSedJfn1pVqKisP3fByc-_WfJfUhsB2Cmx1OtLZOY_2tFOOoUw/viewform?embedded=true"
            width="640"
            height="650"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Box>
      </Grid>
    </Grid>
  );
};

const RegisterButton = () => (
  <Box p="50px">
    <Button variant="outlined" size="large" fullWidth color="primary">
      <Typography variant="button" display="block" gutterBottom>
        REGISTER
      </Typography>
    </Button>
    <Typography variant="caption" display="block" gutterBottom>
      caption text
    </Typography>
  </Box>
);

const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Typography variant="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <RegisterButton />
      </Grid>
    </Grid>
  );
};

const RulesAndPrize = ({ actionFn }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Typography variant="h1" gutterBottom>
          Rules & Prize
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Rules
        </Typography>
        <Typography variant="body1" gutterBottom>
          <ul>
            <li>All code must be open source</li>
            <li>Teams must be 3 to 5 people</li>
            <li>The solution must be related to Social Distancing/COVID-19</li>
            <li>All docs should be in English</li>
          </ul>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Grading Criteria
        </Typography>
        <Typography variant="body1" gutterBottom>
          <ul>
            <li>Compliance to the rules</li>
            <li>Completeness / Readiness</li>
            <li>Applicability</li>
            <li>User experience</li>
            <li>Read me/ docs</li>
          </ul>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Prize
        </Typography>
        <Typography variant="body1" gutterBottom>
          1 ETH Coin
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <RegisterButton actionFn={actionFn} />
      </Grid>
    </Grid>
  );
};

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
  sponsorLogo: {
    width: "100px",
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
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [display, setDisplay] = useState(ABOUT);

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
              actionFn={() => setDisplay(ABOUT)}
            />
            <HeaderItem
              title="Register"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={() => setDisplay(REGISTER)}
            />
          </Box>
          <Box className={classes.headerLine}>
            <HeaderItem
              title="Rules & Prize"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={() => setDisplay(RULES_PRIZES)}
            />
            <HeaderItem
              title="Mentors"
              description="Some default text to fill some space, and something more so there is
            more text"
              actionFn={setDisplay}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Box display={display === ABOUT ? "block" : "none"}>
        <About />
      </Box>
      <Box display={display === RULES_PRIZES ? "block" : "none"}>
        <RulesAndPrize />
      </Box>
      <Box display={display === REGISTER ? "block" : "none"}>
        <Register />
      </Box>
      <Divider variant="middle" />
      <footer className={classes.footer}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sponsors
        </Typography>
        <Box>
          <a href="https://coinsquare.com/" target="_blank">
            <img src={coinsquareLogo} className={classes.sponsorLogo} />
            <Typography variant="caption" display="block" gutterBottom>
              Coinsquare
            </Typography>
          </a>
        </Box>
      </footer>
    </div>
  );
};

export default Home;
