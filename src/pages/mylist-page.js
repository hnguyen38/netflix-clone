import classes from "./mylist.module.css";

function MyListPage() {
  return (
    <div>
      <h1 className={classes.title}>My List</h1>
      <div className={classes.body}></div>
    </div>
  );
}

export default MyListPage;
