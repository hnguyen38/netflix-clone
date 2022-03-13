import NavigationBar from "./navigationbar";
import classes from "./layout.module.css";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <NavigationBar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
