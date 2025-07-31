import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>404 Page not found</h1>
      <Link to="/about">Go to About</Link> •{" "}
      <Link to="/users">Go to Users</Link>
    </div>
  );
};
