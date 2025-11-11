import React from "react";
import { Link } from "react-router";
import styles from "./Dashboard.module.css";

export default function Dashboard(): React.JSX.Element {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome back</h1>
        <p className={styles.subtitle}>Here's a quick summary of your account.</p>
      </header>

      <section className={styles.stats}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Statements</div>
          <div className={styles.cardValue}>42</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Accounts</div>
          <div className={styles.cardValue}>3</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Pending Reviews</div>
          <div className={styles.cardValue}>1</div>
        </div>
      </section>

      <section className={styles.quickActions}>
        <h2>Quick actions</h2>
        <div className={styles.actionsGrid}>
          <Link to="/statements" className={styles.actionCard}>
            Upload / View Statements
          </Link>
          <Link to="/profile" className={styles.actionCard}>
            View Profile
          </Link>
          <Link to="/settings" className={styles.actionCard}>
            Settings
          </Link>
        </div>
      </section>

      <section className={styles.recent}>
        <h2>Recent activity</h2>
        <div className={styles.recentList}>
          <div className={styles.recentItem}>No recent uploads — try adding a statement.</div>
        </div>
      </section>
    </main>
  );
}