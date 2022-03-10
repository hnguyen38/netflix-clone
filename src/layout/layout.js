import NavigationBar from "./navigationbar";
import classes from './layout.module.css';

function Layout(props){
    return(
        <div className={classes.layout}>
            <NavigationBar />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;