import React from "react";

import styles from "./Login.module.css";

function Input() {
  return (
    <div className={styles.div}>
      <label className={styles.label}>
        <span className={styles.span}></span>
        <input className={styles.input}></input>
      </label>
    </div>
  );
}

export default Input;
