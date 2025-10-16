import { FaCloud, FaUsers, FaCheckCircle, FaRocket } from "react-icons/fa";
import styles from "./About.module.css";
import { useNavigate } from "react-router";

function AboutPage() {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
      {/* About Section */}
      <section className={styles.section} id="about">
        <h1 className={styles.sectionTitle}>
          <FaCloud className={styles.icon} /> About PracticeAws
        </h1>
        <p className={styles.text}>
          Welcome, brave cloud adventurer! Your quest for an AWS certification
          starts here. Our community-powered platform is packed with a treasure
          trove of practice questions, forged to help you conquer the final exam
          and claim your place among the cloud elite. Ready to level up?
        </p>
      </section>

      {/* Goal Section */}
      <section className={styles.section} id="achievements">
        <h2 className={styles.sectionTitle}>
          <FaRocket className={styles.icon} /> Our Goal
        </h2>
        <p className={styles.text}>
          Think of us as your secret weapon for the AWS certification exam.
          We've crafted this revision material to be super easy to understand,
          so you can focus on one thing:{" "}
          <span className={styles.highlight}>passing with confidence.</span>
        </p>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <FaCheckCircle className={styles.cardIcon} />
            <h3>Practice Questions</h3>
            <p>Sharpen your skills with exam-style practice questions.</p>
          </div>
          <div className={styles.card}>
            <FaUsers className={styles.cardIcon} />
            <h3>Community Driven</h3>
            <p>Revise at a speed that's right for you with content from the community.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h3 className={styles.ctaTitle}>
          Let us help you get up to speed with the exam preps
        </h3>
        <button className={styles.ctaButton} onClick={() => navigation("/Questionares")}>🚀 Get Started</button>
      </section>
    </div>
  );
}

export default AboutPage;
