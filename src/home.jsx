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
import logo from "./banner.jpg";
import fran from "./fran.png";
import farinazzo from "./farinazzo.png";
import coinsquareLogo from "./coinsquare_transparent.png";
import leo from "./leo.jpg";
import lucas from "./lucas.png";
import luciano from "./luciano.png";
import gabriela from "./gabriela.jpg";
import martin from "./martin.jpg";
import danilo from "./danilo.jpg";

const ABOUT = "about";
const RULES_PRIZES = "rulesAndPrizes";
const FAQ = "faq";
const MENTORS = "mentors";
const MENTORS_LIST = [
  {
    image: farinazzo,
    type: "Mentor",
    name: "Raphael Farinazzo",
    info:
      "Raphael Farinazzo is an entrepreneur, acting in the events business, as well as in software's. He has 15 years of experience in Marketing and Technology, specially  Product Management. He's also Head of Product at Involves, a trade promotion / merchandising SaaS scale-up.",
    linkedin: "https://www.linkedin.com/in/rfarinazzo/",
  },
  {
    image: fran,
    type: "Mentor",
    name: "Franchesca Tingting",
    info:
      "Franchesca Tingting is a Product Designer with 5+ years experience spanning various industries including Events-, Health-, and Ad-Tech.",
    linkedin: "https://www.linkedin.com/in/franchescatingting/",
  },
  {
    image: gabriela,
    type: "Mentor",
    name: "Gabriela Navarro",
    info:
      "Gabriela Navarro is a DevOps Engineer at Coinsquare. She has 5 years of experience in Software Engineering as a backend and DevOps engineer.",
    linkedin: "https://www.linkedin.com/in/gabrielamnavarro/",
    github: "https://github.com/gabrielanavarro",
  },
  {
    image: martin,
    type: "Mentor",
    name: "Martin Kuplens-Ewart",
    info:
      "Martin Kuplens-Ewart is a product manager, currently working in the fintech sector. He has over 20 years experience shaping and creating web-based software for community, collaboration, and celebration.",
    linkedin: "https://www.linkedin.com/in/mkuplens/",
  },
  {
    image: lucas,
    type: "Mentor",
    name: "Lucas Alencar",
    info:
      "Software Engineer at Nubank, worked in many different projects as full stack web developer and nowadays works mainly in backend services written in Clojure.",
    linkedin: "https://www.linkedin.com/in/lucasandre/",
    github: "https://github.com/lucasalencar",
  },
  {
    image: danilo,
    type: "Mentor/STAFF",
    name: "Danilo Penna Queiroz",
    info:
      "Backend engineer, Linux freak, air drummer. Over the last 10 years Danilo has worked on multiple startups, from Unicorns, to self funded garage startups in Germany, Brazil and Canada. Being a problem solver and team player, he started getting more and more involved with both technical and organizational aspects of software development.",
    linkedin: "https://www.linkedin.com/in/daniloqueiroz/",
    github: "https://github.com/daniloqueiroz",
  },
  {
    image: leo,
    type: "Mentor/STAFF",
    name: "Leonardo Lima",
    info:
      "Software Developer and Journalist. The reason why I wake up every morning is to work & collaborate with meaningful, multidisciplinary and empathetic projects. More about me & my work @ https://leosl.github.io",
    linkedin: "https://www.linkedin.com/in/leosilvalima/",
    github: "https://github.com/LeoSL",
  },
  {
    image: "https://avatars0.githubusercontent.com/u/2237774",
    type: "Mentor/STAFF",
    name: "Lucas Furtado",
    info:
      "Lucas has been thriving in the software industry from the times of Java, SQL and Rock'n'roll, when coding used to be a typing contest to the times of Python on startups, when coding became writing indecipherable stuff. He has 15 years of diverse experience in software engineering divided between CMMI certified software houses, multinational enterprises and small fast-paced startups.",
    linkedin: "https://www.linkedin.com/in/lucasslf/",
    github: "https://github.com/lucasslf",
  },
  {
    image: luciano,
    type: "Mentor/STAFF",
    name: "Luciano Medeiros Marcelino",
    info:
      "Luciano is a full stack software developer with experience with different products in different level of maturities. He's focused on Ruby on Rails applications and is currently working with Rest and GraphQL APIs.",
    linkedin: "https://www.linkedin.com/in/marcelinoluciano/",
    github: "https://github.com/marcelinol",
  },
];

const buttonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f14e",
    lineHeight: 1.5,
    height: "42px",
    "&:hover": {
      backgroundColor: "#fff9c4",
    },
  },
}));

const RegisterButton = () => {
  const classes = buttonStyles();

  return (
    <Box p="60px">
      <Button
        variant="button"
        size="large"
        width="60%"
        fullWidth
        block
        gutterBottom
        className={classes.root}
        href="https://hopin.to/events/hacking-from-home"
        target="blank"
      >
        Register
      </Button>
    </Box>
  );
};

const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Hacking from Home is your chance to make a difference during the
          quarantine. It is a virtual hackathon organised by a group of local
          developers that, worrying about the impact of Covid-19 in our
          community, wanted to find something to immobilise it.
          <br />
          <br />
          Focusing on social distancing issues, Hacking from Home challenges
          teams of 3 to 5 people to come up with solutions that will help people
          to deal with the isolation caused by the measures to combat the virus.
          <br />
          <br />
          The hackathon will take place from the 1st to the 3rd of May and
          will be completely remote. Teams will be invited to join the event’s
          Slack workspace where they will be introduced to the mentors and will
          be able to book conversations with them. Since we can’t be in the
          frontline with the doctors, wipe the dust off, gather your team and
          come to be the “rearline” in the fight against Covid-19! From there we
          can contribute to “making” life easier in our community.
          <br />
          <br />
          Register Now!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} ld={4}>
        <RegisterButton />
      </Grid>
    </Grid>
  );
};

const RulesAndPrize = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          Rules & Prizes
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          We have a set of rules in place to make it a fair and respectful competition.
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
              All documentation, code and other materials must be in English
              as an official language;
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
          In partnership with Coinsquare, we're awarding 1 (one) ETH crypto coin
          to the winning team. The winning team's project will appear on all
          Coinsquare’s Social Media channels.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <RegisterButton />
      </Grid>
    </Grid>
  );
};

const faqStyles = makeStyles((theme) => ({
  frame: {
    justifyContent: "center",
  },
}));

const Faq = () => {
  const classes = faqStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          <strong>Who can join?</strong>
          <br />
          The hackathon is open for anyone to join, devs of all levels,
          designers are all welcome.
          <br />
          <br />
          <strong>How can I submit my project idea?</strong>
          <br />
          Once you register to HfH you are going to receive an invite to join
          our slack group. Through Slack, we are going to be able to share
          project ideas, get feedback, and start getting to know other
          participants and ideas.
          <br />
          <br />
          <strong>I don’t have a team/a project, can I join it anyway?</strong>
          <br />
          Yes! Part of the goal of HfH is to connect people. The first part
          of the hackathon will be dedicated to networking and forming teams.
          <br />
          <br />
          <strong>Is the event free?</strong>
          <br />
          Absolutely! We want to support the community, connect to new people,
          and develop cool stuff.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} ld={4}>
        <RegisterButton />
      </Grid>
    </Grid>
  );
};

const mentorCardStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fafafa",
    margin: theme.spacing(1)
  },
  content: {
    minHeight: 300
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
          <Typography variant="body1" color="textSecondary" component="p">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={linkedin} target="_blank">
          <LinkedInIcon color="primary" fontSize="large"></LinkedInIcon>
        </a>
        {github &&
            <a href={github} target="_blank">
              <GitHubIcon fontSize="large" style={{ color: "black" }}></GitHubIcon>
            </a>
        }
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
            <Grid item xs={12} sm={6} md={4} lg={4} className={classes.row}>
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
    alignContent: "center",
    paddingLeft: '9px'
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
        style={title === 'FAQ' ? { paddingLeft: '0' } : {}}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={actionFn}
      >
        {title}
      </Button>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    backgroundColor: "#eeeeee"
  },
  rightHeaderMenu: {
    marginTop: theme.spacing(2),
  },
  headerLine: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  headerLogo: {
    width: "100%",
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
    backgroundColor: "#f9f14e"
  },
  appBar: {
    backgroundColor: "#f9f14e"
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <img
                src={logo}
                className={classes.headerLogo}
                alt="hacking from home logo"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Box className={classes.rightHeaderMenu}>
                <HeaderItem title="About" actionFn={() => setDisplay(ABOUT)} />
                <HeaderItem title="FAQ" actionFn={() => setDisplay(FAQ)} />
                <HeaderItem
                  title="Rules & Prizes"
                  actionFn={() => setDisplay(RULES_PRIZES)}
                />
                <HeaderItem
                  title="Mentors"
                  actionFn={() => setDisplay(MENTORS)}
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Box display={display === ABOUT ? "block" : "none"}>
          <About />
        </Box>
        <Box display={display === RULES_PRIZES ? "block" : "none"}>
          <RulesAndPrize />
        </Box>
        <Box display={display === FAQ ? "block" : "none"}>
          <Faq />
        </Box>
        <Box display={display === MENTORS ? "block" : "none"}>
          <Mentors />
        </Box>
        <footer className={classes.footer}>
          <Divider className={classes.divider} />
          <Typography variant="h4" gutterBottom>
            Sponsor
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
