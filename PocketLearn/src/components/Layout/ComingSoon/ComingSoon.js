import React, { useEffect } from "react";
import bgVid from "./bg.mp4";
import styles from "./Cstyle.module.css";
import { NavLink } from "react-router-dom";

const ComingSoon = () => {
  useEffect(() => {
    document.body.classList.add(styles.ComingSoonClass);
    return () => {
      // 👇️ removing classes from body element
      // when the component unmounts
      document.body.classList.remove(styles.ComingSoonClass);
    };
  }, []);
  return (
    <div id="ComingSoon">
      <div class={styles.container}>
        <div class={styles.bg}>
          <video src={bgVid} autoPlay loop muted />
        </div>
        <h1 className={styles.ComingSoonh1}>Coming Soon</h1>
        <h3 className={styles.ComingSoonh3}>Site Nearly Ready</h3>
        <div class={styles.progressBar}>
          <span></span>
        </div>
        <div class={styles.sm}>
          <NavLink href="#" to="https://github.com/pocketlearnofficial">
            <i class="fab fa-github"></i>
          </NavLink>
          <NavLink
            href="#"
            to="https://www.linkedin.com/company/pocketlearnofficial/"
          >
            <i class="fab fa-linkedin-in"></i>
          </NavLink>
          <NavLink href="#" to="https://www.instagram.com/pocketlearnofficial/">
            <i class="fab fa-instagram"></i>
          </NavLink>
          <NavLink href="#" to="https://twitter.com/pocketlearnofc">
            <i class="fab fa-twitter"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
