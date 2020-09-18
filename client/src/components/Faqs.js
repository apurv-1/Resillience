import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

//Images
// import FAQS from "../compressed/faqs.svg";

const styles = () => ({
  root: {
    width: "70%",
    margin: "auto",
    background: "#d3d3d3",
    "@media only screen and (max-width: 770px)": {
      width: "90%"
    }
  },
  faqImage: {
    "@media only screen and (max-width: 770px)": {
      width: "75%"
    }
  },
  faqSection: {
    marginTop: "15vh",
    marginBottom: "10vh"
  },
  accordion: {
    padding: "8px 10px",
    "@media only screen and (max-width: 770px)": {
      padding: "0px"
    }
  },
  topHeading: {
    textAlign: "center",
    position: "relative"
  },
  q: {
    fontSize: "25px",
    opacity: "0.6",
    "@media only screen and (max-width: 770px)": {
      fontSize: "20px"
    }
  },
  big: {
    position: "absolute",
    top: "-15px",
    left: "0",
    right: "0",
    fontSize: "70px",
    color: "rgba(146, 143, 143, 0.37)",
    fontWeight: "900",
    letterSpacing: "1px"
  },
  qs: {
    paddingTop: "40px",
    fontWeight: "700",
    fontSize: "50px",
    color: "black",
    letterSpacing: "0"
  },
  answer: {
    fontSize: "18px",
    "@media only screen and (max-width: 768px)": {
      fontSize: "16px"
    }
  },
  heading: {
    // fontSize: "1.2rem",
    "@media only screen and (max-width:768px)": {
      fontSize: "1rem"
    }
  }
});

function Faqs(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={`page ${classes.faqSection}`}>
      <div className={classes.topHeading}>
        <Typography variant="h3" color="primary" className={classes.big}>
          F.A.Q
        </Typography>
        <h1 className={classes.qs}>Questions?</h1>
        <img alt="FAQ'S" src="https://res.cloudinary.com/rweb1/image/upload/v1600243280/Assets/images/faqs_usvet7.svg" className={classes.faqImage}></img>
      </div>
      <div className={classes.root}>
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              What is the Mentoring Session?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              1. It is a Free 'Demo cum Mentoring session'. It helps both student and the teacher to understand each other before starting. In the session students also get to know what exactly are
              they doing wrong so far in the preparation and how to come back.
              <br />
              <br />
              2. Parents get an actual overview about their child's preparation from an IIT graduate faculty and what is the solution to overcome the situation.
              <br />
              <br />
              3. And it helps us figuring out your best suited customized plan to proceed.
              <br />
            </Typography>
            <Divider />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How will we start?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Click on the link and book a Free Mentoring Session. After that we will figure out the personalized plan as per the student's requirement.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              Where do you work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Currently we are providing home tuition in Mumbai only, But the services can be availed anywhere through online live tuition at our platform.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How much qualified the faculties are?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              All the faculties are IIT graduates. They are expert in their subjects, experienced, passionate in teaching, motivating, understanding and friendly teachers.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              What is your fee structure?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              It depends on the Duration of the program. After the Mentoring session we figure out how exactly we need to work on the student. It is always beneficial to take the 'Mentoring Session'
              as it helps students analyze and align their preparation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              Does student needs to join coaching classes along with it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Not at all, We provide everything needed to crack the exam with a good rank, Other classes will only cause extra burden and reduce self study time.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How much classes are there in a week?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              The number of classes/week solely depends on the students pace in covering the assigned Homework. Generally it is 1-2 classes/Sub/Week. The teacher is always reachable where ever they
              are stuck.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              What is the duration of class?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              It is 2 hours and 10 minutes. Designed to cover doubts, new concepts, question practice in 2 hours. And 10 minutes for regular mentoring on preparation strategy.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              How frequent your Tests are?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Tests are taken on topic completion in each Subject, then mixed tests after that part tests and full tests are taken.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              Does your Foundation prepare students for exams like KVPY, and Olympiads?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Yes, our Foundation program is very unique, It can prepare students with all the basics before starting the full fledged IIT/NEET Preparation. We also prepare students for KVPY and
              Olympiads during the program.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel11"} onChange={handleChange("panel11")} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h6" color="primary" className={classes.heading}>
              <span className={classes.q}>Q: </span>
              Does you also prepare students for MHT-CET?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer} color="primary">
              <Typography variant="h5" className={classes.q}>
                Answer:
              </Typography>
              <br />
              Yes, we prepare students for MHT-CET and other state level exams along with BITS.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default withStyles(styles)(Faqs);
