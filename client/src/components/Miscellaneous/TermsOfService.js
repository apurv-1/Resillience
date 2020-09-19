import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

export default function TermsOfService() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ margin: "5%", marginBottom: "-8%" }}>
      <h1>Resillience Terms and Conditions of Use</h1>
      <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>1. Terms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            By accessing this Website, accessible from https://resillience.in, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the
            agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by
            copyright and trade mark law.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>2. Use License</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Permission is granted to temporarily download one copy of the materials on Resillience's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on Resillience's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            This will let Resillience to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded
            materials in your possession whether it is printed or electronic format.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>3. Disclaimer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All the materials on Resillience’s Website are provided "as is". Resillience makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore,
            Resillience does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked
            to this Website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>4. Limitations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Resillience or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Resillience’s Website, even if Resillience or an
            authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or
            limitations of liability for incidental damages, these limitations may not apply to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>5. Revisions and Errata</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The materials appearing on Resillience’s Website may include technical, typographical, or photographic errors. Resillience will not promise that any of the materials in this Website are
            accurate, complete, or current. Resillience may change the materials contained on its Website at any time without notice. Resillience does not make any commitment to update the materials.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>6. Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Resillience has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by
            Resillience of the site. The use of any linked website is at the user’s own risk.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>7. Site Terms of Use Modifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Resillience may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and
            Conditions of Use.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>8. Your Privacy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Please read our Privacy Policy.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>9. Governing Law</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Any claim related to Resillience's Website shall be governed by the laws of in without regards to its conflict of law provisions.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
