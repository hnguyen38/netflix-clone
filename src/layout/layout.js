import NavigationBar from "./navigationbar";
import classes from "./layout.module.css";
import TopVideo from "../components/Top-video";
import requests from "../sources/Requests";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <NavigationBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
