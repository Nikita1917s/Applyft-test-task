import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "@/types/User";
import styles from "./Users.module.scss";

export interface UsersProps {
  users: User[];
}

export const Users = ({ users }: UsersProps) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>Users List</h1>
      <div className={styles["searchField"]}>
        <input
          type="text"
          placeholder="Filter by name…"
          name="Filter"
          value={filter}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
          aria-label="Filter users by name"
        />
      </div>
      <div className={styles["userList"]}>
        {filtered.map((u) => (
          <div key={u.id} className={styles["userCard"]}>
            <p className={styles["userUserName"]}>{u.username}</p>
            <p className={styles["userName"]}>{u.name}</p>
            <div className={styles["buttonWrapper"]}>
              <button onClick={() => navigate(`/users/${u.id}`)}>
                Details
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className={styles["notFound"]}>No users found.</p>}
      </div>
    </div>
  );
};
