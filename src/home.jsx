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
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import logo from "./banner.png";
import fran from "./fran.png";
import farinazzo from "./farinazzo.png";
import coinsquareLogo from "./coinsquare_transparent.png";
import leo from "./leo.jpg";
import luciano from "./luciano.png";
import gabriela from "./gabriela.jpg";
import martin from "./martin.jpg";

const ABOUT = "about";
const RULES_PRIZES = "rulesAndPrizes";
const REGISTER = "register";
const MENTORS = "mentors";
const MENTORS_LIST = [
  {
    image: farinazzo,
    type: "Mentor",
    name: "Raphael Farinazzo",
    info:
      "Raphael Farinazzo is an entrepreneur, acting in the events business, as well as in software's. He has 15 years of experience in Marketing and Technology, specially  Product Management. He's also Head of Product at Involves, a trade promotion / merchandising SaaS scale-up.",
    linkedin: "https://www.linkedin.com/in/rfarinazzo/",
    github: "https://github.com/rfarinazzo"
  },
  {
    image: fran,
    type: "Mentor",
    name: "Franchesca Tingting",
    info: "Senior Product Designer at EventMobi",
    linkedin: "https://www.linkedin.com/in/franchescatingting/",
    github: "https://www.linkedin.com/in/franchescatingting/"
  },
  {
    image: gabriela,
    type: "Mentor",
    name: "Gabriela",
    info:
      "Gabriela Navarro is a DevOps Engineer at Coinsquare. She has 5 years of experience in Software Engineering as a backend and DevOps engineer.",
    linkedin: "",
    github: ""
  },
  {
    image: martin,
    type: "Mentor",
    name: "Martin",
    info:
      "Martin Kuplens-Ewart is a product manager, currently working in the fintech sector. He has over 20 years experience shaping and creating web-based software for community, collaboration, and celebration.",
    linkedin: "",
    github: ""
  },
  {
    image: "https://avatars3.githubusercontent.com/u/410616",
    type: "Mentor/STAFF",
    name: "Danilo Penna Queiroz",
    info: "Tech Lead at Coinsquare",
    linkedin: "https://www.linkedin.com/in/daniloqueiroz/",
    github: "https://github.com/daniloqueiroz"
  },
  {
    image: leo,
    type: "Mentor/STAFF",
    name: "Leonardo Lima",
    info:
      "Software Developer and Journalist. The reason why I wake up every morning is to work & collaborate with meaningful, multidisciplinary and empathetic projects. More about me & my work @ https://leosl.github.io",
    linkedin: "https://www.linkedin.com/in/leosilvalima/",
    github: "https://github.com/LeoSL"
  },
  {
    image: "https://avatars0.githubusercontent.com/u/2237774",
    type: "Mentor/STAFF",
    name: "Lucas Furtado",
    info: "Software Engineer at EventMobi",
    linkedin: "https://www.linkedin.com/in/lucasslf/",
    github: "https://github.com/lucasslf"
  },
  {
    image: luciano,
    type: "Mentor/STAFF",
    name: "Luciano Medeiros Marcelino",
    info:
      "Luciano is a full stack software developer with experience with different products in different level of maturities. He's focused on Ruby on Rails applications and is currently working with Rest and GraphQL APIs.",
    linkedin: "https://www.linkedin.com/in/marcelinoluciano/",
    github: "https://github.com/marcelinol"
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
        backgroundColor="#fcff4a"
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
        <Typography variant="body1" align="justify" gutterBottom>
          Hacking from Home is your chance to make a difference during the
          quarantine. It is a virtual hackathon organised by a group of local
          developers that, worrying about the impact of Covid-19 in our
          community, wanted to find something to mobilise it.
          <br />
          <br />
          Focusing on social distancing issues, Hacking from Home challenges
          teams of 3 to 5 people to come up with solutions that will help people
          to deal with the isolation caused by the measures to combat the virus.
          <br />
          <br />
          The hackathon will take place from the 24th to the 26th of April and
          will be completely remote. Teams will be invited to join the event’s
          Slack workspace where they will be introduced to the mentors and will
          be able to book conversations with them. Since we can’t be in the
          frontline with the doctors, wipe the dust off, gather your team and
          come to be the rearline in the fight against Covid-19! From there we
          can contribute to make life easier in our community.
          <br />
          <br />
          Register Now!
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
        <Typography variant="body1" align="justify" gutterBottom>
          In order to make it a fair and respectful competition, we have a few
          set of rules:
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Rulebook
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          <ol>
            <li>
              All code developed during the Hackathon must be open source;
            </li>
            <li>Teams must from 3 to 5 people;</li>
            <li>
              The solution must be related to Social Distancing / COVID-19 /
              Remote Work;
            </li>
            <li>
              All documentation, code and other materials must English as an
              official language;
            </li>
            <li>
              Every participant, mentor and organization staff must follow the
              Code of Conduct below;
            </li>
          </ol>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Code of Conduct
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          By participating in the Hack From Home event, you agree to abide by
          the following code of conduct.
          <ol>
            <li>
              Please treat all other hackers with the utmost respect. We ask
              that you act kindly, behave professionally, and do not insult or
              put down other attendees. Remember that harassment and racist,
              sexist, or exclusionary jokes are not appropriate for this event.
              If at any point you see a fellow hacker being harassed, please
              talk to any hackathon organizer using the Slack group (check the
              [Staff] tag on Mentors page) or send an email to
              contact@hackingfromhome.ca.
            </li>
            <li>
              Please treat our sponsors, organizers, and judges with the utmost
              respect. Without them, nothing would be possible. Consider taking
              some time out of your work to go meet and speak with them. If they
              come over to talk to you, we ask that you give them a bit of your
              time. They're here for you! Show them you appreciate it.
            </li>
          </ol>
          <strong>
            Failure to comply with the above-stated Rules and Code of Conduct
            may result in the offending team's disqualification, and mentor or
            staff expulsion.
          </strong>
          <br />
          <br />
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Grading Criteria
        </Typography>
        At the end of the event, the mentors will use the following criteria to
        grade the projects. Each item will receive a note from 0 to 10.
        <br />
        <ul>
          <li>Compliance to the rules above</li>
          <li>Completeness / Readiness</li>
          <li>Applicability</li>
          <li>User experience</li>
          <li>Read-me (Github) / overall documentation</li>
        </ul>
        <Typography variant="h6" component="h2" gutterBottom>
          Prize
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          In partnership with Coinsquare, we're giving 1 (one) ETH crypto coin
          to the winning team. Also the winning team's project will appear on
          all our Social Media channels.
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
    width: 445,
    backgroundColor: "#fafafa",
    margin: theme.spacing(0)
  },
  content: {
    minHeight: 180
  },
  media: {
    height: 400
  }
}));

const MentorCard = ({ image, name, type, info, linkedin, github }) => {
  const classes = mentorCardStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="mentor photo"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={linkedin} target="_blank">
          <LinkedInIcon color="primary" fontSize="large"></LinkedInIcon>
        </a>
        <a href={github} target="_blank">
          <GitHubIcon color="primary" fontSize="large"></GitHubIcon>
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
                type={mentor.type}
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
    fontSize: 18,
    alignContent: "center"
  }
}));

const HeaderItem = ({ title, actionFn }) => {
  const classes = useHeaderItemStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        className={classes.title}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={actionFn}
      >
        {title}
      </Button>
    </div>
  );
};

// <Card className={classes.headerCard}>
//   {/* <CardContent>
//     <Typography
//       className={classes.title}
//       color="textSecondary"
//       gutterBottom
//     >
//       {title}
//     </Typography>
//   </CardContent> */}
{
  /*  <CardActions>
//     <Button size="small" onClick={actionFn}>
//       {/* Learn More */
}
//       <Typography variant="h5" component="h2" alignContent="center">
//         {title}
//       </Typography>
//     </Button>
//   </CardActions>
// </Card> */}

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
    width: "30%",
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
    backgroundColor: "#fcff4a"
  },
  appBar: {
    backgroundColor: "#fcff4a"
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img
            src={logo}
            className={classes.headerLogo}
            alt="hacking from home logo"
          />
          <Box>
            <HeaderItem title="About" actionFn={() => setDisplay(ABOUT)} />
            <HeaderItem
              title="Register"
              actionFn={() => setDisplay(REGISTER)}
            />
            <HeaderItem
              title="Rules & Prize"
              actionFn={() => setDisplay(RULES_PRIZES)}
            />
            <HeaderItem title="Mentors" actionFn={() => setDisplay(MENTORS)} />
          </Box>
        </Toolbar>
      </AppBar>
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
            </a>
          </Box>
        </footer>
      </div>
    </>
  );
};

export default Home;
