import React from "react";

import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.section}>
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.showcase}></div>
          <div className={styles.area}>
            <div className={styles.inputs}>
              <h1 className={styles.title}>Instagram</h1>
              <div>
                <form>
                  <div></div>
                  <a></a>
                </form>
              </div>
            </div>
            <div className={styles.switch}>Switch</div>
            <div className={styles.apps}>Apps</div>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </section>
  );
}

export default Login;
