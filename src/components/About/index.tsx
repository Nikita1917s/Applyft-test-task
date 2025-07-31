import styles from "./About.module.scss";

export const About = () => {

  return (
    <>
      <h1 className={styles["title"]}>About This App</h1>
      <p>
        A responsive, accessible Single-Page Application built with React,
        TypeScript, Vite, React Router v6, and SCSS Modules.
      </p>
      <ul>
        <li>
          Client-side routing with `/about`, `/users`, `/users/:id` and a 404
          page
        </li>
        <li>
          User listing fetched from JSONPlaceholder, with real-time filter
        </li>
        <li>Jest tests</li>
        <li>Loading spinner and toast notifications for async states</li>
        <li>Responsive design</li>
        <li>SCSS partials + path aliases</li>
      </ul>
      <ul>
        <p>Tech Stack</p>
        <li>React 18 + TypeScript</li>
        <li>Vite</li>
        <li>React Router v6]</li>
        <li>SCSS Modules</li>
        <li>Jest</li>
        <li>react-toastify</li>
      </ul>
      <ol>
        <p>Installation and Running Locally</p>
        <li>npm install</li>
        <li>npm run test</li>
        <li>npm run dev</li>
      </ol>
    </>
  );
};
