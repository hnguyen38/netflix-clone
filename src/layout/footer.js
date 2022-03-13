import classes from "./footer.module.css";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import twit from "../images/twit.png";
import yt from "../images/yt.png";

function Footer() {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.iconsContainer}>
          <img className={classes.icons} src={fb} />
          <img className={classes.icons} src={ig} />
          <img className={classes.icons} src={twit} />
          <img className={classes.icons} src={yt} />
        </div>
        <div className={classes.links}>
          <div className={classes.columns}>
            <span className={classes.text}>Audio and Subtitles</span>
            <span className={classes.text}>Media Center</span>
            <span className={classes.text}>Privacy</span>
            <span className={classes.text}>Contact Us</span>
          </div>
          <div className={classes.columns}>
            <span className={classes.text}>Audio Description</span>
            <span className={classes.text}>Investor Relations</span>
            <span className={classes.text}>Legal Notices</span>
          </div>
          <div className={classes.columns}>
            <span className={classes.text}>Help Center</span>
            <span className={classes.text}>Jobs</span>
            <span className={classes.text}>Cookie Preferences</span>
          </div>
          <div className={classes.columns}>
            <span className={classes.text}>Gift Cards</span>
            <span className={classes.text}>Terms of Use</span>
            <span className={classes.text}>Corporate Information</span>
          </div>
        </div>
        <div className={classes.service}>
          <span className={classes.serviceText}>Service Code</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
