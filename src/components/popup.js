import classes from "./popup.module.css";

function Popup({ trailer, overview, exitPopup }) {
  return (
    <div className={classes.wrapper} onClick={exitPopup}>
      <div className={classes.container}>
        <div className={classes.exitDiv}>
          <button onClick={exitPopup} className={classes.exitButton}>
            x
          </button>
        </div>
        <div className={classes.trailer}>{trailer}</div>
        <div className={classes.spanDiv}>
          <span className={classes.overview}>{overview}</span>
        </div>
      </div>
    </div>
  );
}

export default Popup;
