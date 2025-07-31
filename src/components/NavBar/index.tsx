import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close  = () => setOpen(false);

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navLinks']}>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>

      <button
        className={`${styles['burger']} ${open ? styles['open'] : ""}`}
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles['mobileMenu']} ${open ? styles['open'] : ""}`}
        onClick={close}
      >
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
};
