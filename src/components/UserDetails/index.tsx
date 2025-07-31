import { useNavigate } from "react-router-dom";
import type { User } from "@/types/User";
import styles from "./userDetails.module.scss";

export interface UsersProps {
  user: User;
}

export const UserDetails = ({ user }: UsersProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles["wrapper"]}>
      <img className={styles["profilePhoto"]} src="/assets/img/noPhoto.svg" />
      <h1 className={styles["userUserName"]}>{user.username}</h1>
      <ul>
        <li>
          <strong>Username:</strong> {user.name}
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Phone:</strong> {user.phone}
        </li>
        <li>
          <strong>Website:</strong> {user.website}
        </li>
      </ul>
      <div className={styles["buttonWrapper"]}>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
