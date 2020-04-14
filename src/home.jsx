import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import logo from "./banner.png";
import fran from "./fran.png";
import farinazzo from "./farinazzo.png";
import coinsquareLogo from "./coinsquare_transparent.png";

const ABOUT = "about";
const RULES_PRIZES = "rulesAndPrizes";
const REGISTER = "register";
const MENTORS = "mentors";
const MENTORS_LIST = [
  {
    image: "https://avatars3.githubusercontent.com/u/410616",
    name: "Danilo Penna Queiroz",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Software Developer at Nulogy",
    linkedin: "https://www.linkedin.com/in/daniloqueiroz/",
    gitHub: "https://github.com/daniloqueiroz"
  },
  {
    image: fran,
    name: "Franchesca Tingting",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Software Developer at Nulogy",
    linkedin: "https://www.linkedin.com/in/franchescatingting/",
    github: "hah"
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQE_iJs0-ZhKFw/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=kWoS80dbF6c4mDFFxldxrYLJpHVhjPgVevOJVMEKVWI",
    name: "Leonardo Lima",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Software Developer at Nulogy",
    linkedin: "https://www.linkedin.com/in/leosilvalima/",
    github: "https://github.com/LeoSL"
  },
  {
    image: "https://avatars0.githubusercontent.com/u/2237774",
    name: "Lucas Furtado",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Software Developer at Nulogy",
    linkedin: "https://www.linkedin.com/in/lucasslf/",
    github: "https://github.com/lucasslf"
  },
  {
    image: "https://avatars2.githubusercontent.com/u/7313714",
    name: "Luciano Medeiros Marcelino",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Software Developer at Nulogy",
    linkedin: "https://www.linkedin.com/in/marcelinoluciano/",
    github: "https://github.com/marcelinol"
  },
  {
    image: farinazzo,
    name: "Raphael Farinazzo",
    info:
      "Raphael Farinazzo is an entrepreneur, acting in the events business, as well as in software's. He has 15 years of experience in Marketing and Technology, specially  Product Management. He's also Head of Product at Involves, a trade promotion / merchandising SaaS scale-up.",
    linkedin: "https://www.linkedin.com/in/rfarinazzo/",
    github: "https://github.com/rfarinazzo"
  }
];

const registerStyles = makeStyles(theme => ({
  frame: {
    justifyContent: "center"
  }
}));

const Register = () => {
  const classes = registerStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box p="30px">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSedJfn1pVqKisP3fByc-_WfJfUhsB2Cmx1OtLZOY_2tFOOoUw/viewform?embedded=true"
            width="640"
            height="650"
            frameborder="0"
            marginheight="0"
            className={classes.frame}
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p="30px"></Box>
      </Grid>
    </Grid>
  );
};

const buttonStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "yellow",
    lineHeight: 1.5,
    height: "42px",
    "&:hover": {
      backgroundColor: "#fff9c4"
    }
  }
}));

const RegisterButton = ({ registerFn }) => {
  const classes = buttonStyles();

  return (
    <Box p="60px">
      <Button
        variant="button"
        size="large"
        width="60%"
        backgroundColor="yellow"
        fullWidth
        block
        gutterBottom
        className={classes.root}
        onClick={registerFn}
      >
        Register
      </Button>
    </Box>
  );
};

const About = ({ registerFn }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.body1. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Why? When?
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <RegisterButton registerFn={registerFn} />
      </Grid>
    </Grid>
  );
};

const RulesAndPrize = ({ registerFn }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Typography variant="h3" component="h1" gutterBottom>
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
        <RegisterButton registerFn={registerFn} />
      </Grid>
    </Grid>
  );
};

const mentorCardStyles = makeStyles(theme => ({
  root: {
    maxWidth: 445,
    backgroundColor: "#fafafa",
    margin: theme.spacing(2),
    fontSize: 18
  },
  media: {
    height: 300
  }
}));

const MentorCard = ({ image, name, info, linkedin, github }) => {
  const classes = mentorCardStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="mentor photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={linkedin} target="_blank">
          <LinkedInIcon></LinkedInIcon>
        </a>
        <a href={github} target="_blank">
          <GitHubIcon></GitHubIcon>
        </a>
      </CardActions>
    </Card>
  );
};

const mentorStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    height: "100%"
  }
});

const Mentors = () => {
  const classes = mentorStyles();

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Mentors
      </Typography>
      <Grid container spacing={3}>
        {MENTORS_LIST.map((mentor, _index) => {
          return (
            <Grid item xs={3} className={classes.row}>
              <MentorCard
                image={mentor.image}
                name={mentor.name}
                info={mentor.info}
                linkedin={mentor.linkedin}
                github={mentor.github}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const useHeaderItemStyles = makeStyles(theme => ({
  title: {
    fontSize: 20
  },
  headerCard: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#fff9c4"
  }
}));

const HeaderItem = ({ title, actionFn }) => {
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
      </CardContent>
      <CardActions>
        <Button size="small" onClick={actionFn}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    backgroundColor: "#eeeeee"
  },
  headerLine: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  headerLogo: {
    width: "70%",
    height: "fit - content",
    padding: "inherit",
    display: "flex",
    justifyContent: "center"
  },
  sponsorLogo: {
    width: "100px"
  },
  rightMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    backgroundColor: "yellow"
  },
  leftMenu: {
    backgroundColor: "yellow"
  },
  divider: {
    marginBottom: "15px"
  },
  footer: {
    padding: theme.spacing(3),
    textAlign: "center"
  }
}));

const Home = () => {
  const classes = useStyles();
  const [display, setDisplay] = useState(ABOUT);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={5} className={classes.leftMenu}>
          <img src={logo} className={classes.headerLogo} />
        </Grid>
        <Grid item xs={7} className={classes.rightMenu}>
          <Box className={classes.headerLine}>
            <HeaderItem title="About" actionFn={() => setDisplay(ABOUT)} />
            <HeaderItem
              title="Register"
              actionFn={() => setDisplay(REGISTER)}
            />
          </Box>
          <Box className={classes.headerLine}>
            <HeaderItem
              title="Rules & Prize"
              actionFn={() => setDisplay(RULES_PRIZES)}
            />
            <HeaderItem title="Mentors" actionFn={() => setDisplay(MENTORS)} />
          </Box>
        </Grid>
      </Grid>
      <div className={classes.root}>
        <Box display={display === ABOUT ? "block" : "none"}>
          <About registerFn={() => setDisplay(REGISTER)} />
        </Box>
        <Box display={display === RULES_PRIZES ? "block" : "none"}>
          <RulesAndPrize registerFn={() => setDisplay(REGISTER)} />
        </Box>
        <Box display={display === REGISTER ? "block" : "none"}>
          <Register />
        </Box>
        <Box display={display === MENTORS ? "block" : "none"}>
          <Mentors />
        </Box>
        <footer className={classes.footer}>
          <Divider className={classes.divider} />
          <Typography variant="h3" component="h1" gutterBottom>
            Sponsors
          </Typography>
          <Box pt="10px">
            <a href="https://coinsquare.com/" target="_blank">
              <img src={coinsquareLogo} className={classes.sponsorLogo} />
              {/* <Typography variant="caption" display="block" gutterBottom>
              Coinsquare
            </Typography> */}
            </a>
          </Box>
        </footer>
      </div>
    </>
  );
};

export default Home;
