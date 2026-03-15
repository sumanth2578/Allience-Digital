"use client";

import styles from "./AmbientBackground.module.css";

const AmbientBackground = () => {
  return (
    <div className={styles.background}>
      <div className={styles.grain} />
      <div className={styles.orbContainer}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>
      <div className={styles.grid} />
    </div>
  );
};

export default AmbientBackground;
