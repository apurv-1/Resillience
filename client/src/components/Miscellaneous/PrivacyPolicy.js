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

export default function PrivacyPolicy() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ margin: "5%", marginBottom: "-8%" }}>
      <h1>Privacy Policy</h1>
      <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Privacy Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Last updated: September 12, 2020
            <br />
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how
            the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy
            Policy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Interpretation and Definitions</h2>
      <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Interpretation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they
            appear in singular or in plural.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Definitions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For the purposes of this Privacy Policy:
            <br />
            Account means a unique account created for You to access our Service or parts of our Service.
            <br />
            Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Resillience, Plot no B81, Anand Nagar MIDC, Additional Ambernath. , Ambernath, Dist : Thane –
            421506.
            <br />
            Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many
            uses.
            <br />
            Country refers to: Maharashtra, India
            <br />
            Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
            <br />
            Personal Data is any information that relates to an identified or identifiable individual.
            <br />
            Service refers to the Website.
            <br />
            Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate
            the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
            <br />
            Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.
            <br />
            Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
            <br />
            Website refers to RESILLIENCE, accessible from <a href="http://www.resillience.in">http://www.resillience.in</a>
            <br />
            You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Collecting and Using Your Personal Data</h2>
      <h3>Types of Data Collected</h3>
      <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may
            include, but is not limited to:
            <br />
            Email address
            <br />
            First name and last name
            <br />
            Phone number
            <br />
            Address, State, Province, ZIP/Postal code, City
            <br />
            Usage Data
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Usage Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Usage Data is collected automatically when using the Service.
            <br />
            Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and
            date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            <br />
            When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile
            device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            <br />
            We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Collecting and Using Your Personal Data</h2>
      <Accordion square expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Usage Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Usage Data is collected automatically when using the Service.
            <br />
            Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and
            date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            <br />
            When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile
            device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            <br />
            We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Tracking Technologies and Cookies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect
            and track information and to improve and analyze Our Service.
            <br />
            You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
            <br />
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You
            close your web browser. Learn more about cookies: What Are Cookies?.
            <br />
            We use both session and persistent Cookies for the purposes set out below:
            <br />
            <b>Necessary / Essential Cookies</b>
            <br />
            Type: Session Cookies
            <br />
            Administered by: Us
            <br />
            Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent
            fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
            <br />
            <b>Cookies Policy / Notice Acceptance Cookies</b>
            <br />
            Type: Persistent Cookies
            <br />
            Administered by: Us
            <br />
            Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
            <br />
            <b>Functionality Cookies</b>
            <br />
            Type: Persistent Cookies
            <br />
            Administered by: Us
            <br />
            Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to
            provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
            <br />
            For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Use of Your Personal Data</h2>
      <Accordion square expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Use of Your Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Company may use Personal Data for the following purposes:
            <br />
            <br />
            To provide and maintain our Service, including to monitor the usage of our Service.
            <br />
            To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are
            available to You as a registered user.
            <br />
            For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with
            Us through the Service.
            <br />
            To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or
            informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
            <br />
            To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired
            about unless You have opted not to receive such information.
            <br />
            To manage Your requests: To attend and manage Your requests to Us.
            <br />
            <br />
            We may share your personal information in the following situations:
            <br />
            With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
            <br />
            For Business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of
            all or a portion of our business to another company.
            <br />
            With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and
            any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
            <br />
            With Business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
            <br />
            With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly
            distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name,
            profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Retention of Your Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent
            necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and
            policies.
            <br />
            The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the
            security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Transfer of Your Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that
            this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws
            may differ than those from Your jurisdiction.
            <br />
            Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            <br />
            The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take
            place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Disclosure of Your Personal Data</h2>
      <Accordion square expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Business Transactions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes
            subject to a different Privacy Policy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Law enforcement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or
            a government agency).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Other legal requirements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            <br />
            <br />
            Comply with a legal obligation Protect and defend the rights or property of the Company Prevent or investigate possible wrongdoing in connection with the Service Protect the personal
            safety of Users of the Service or the public Protect against legal liability
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel14"} onChange={handleChange("panel14")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Security of Your Personal Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Changes to this Privacy Policy</h2>
      <Accordion square expanded={expanded === "panel17"} onChange={handleChange("panel17")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Privacy Policy Update</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            <br />
            We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            <br />
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === "panel18"} onChange={handleChange("panel18")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have any questions about this Privacy Policy, You can contact us: By visiting this page on our website: <a href="resillience.in">resillience.in</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
