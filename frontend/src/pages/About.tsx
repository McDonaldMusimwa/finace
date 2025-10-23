import { FaChartLine, FaUsers, FaCheckCircle, FaRocket } from "react-icons/fa";
import styles from "./About.module.css";
import { useNavigate } from "react-router";

function AboutPage() {
  const navigation = useNavigate();

  return (
    <div className={styles.container}>
      {/* About Section */}
      <section className={styles.section} id="about">
        <h1 className={styles.sectionTitle}>
          <FaChartLine className={styles.icon} /> About Bank Statement Analyzer
        </h1>
        <p className={styles.text}>
          Welcome to <strong>Bank Statement Analyzer</strong> — a smarter way to
          understand your finances. Our platform helps you upload, analyze, and
          visualize your bank statements with ease. Whether you want to track
          spending, identify trends, or gain financial clarity, we make it simple
          to see where your money goes.
        </p>
      </section>

      {/* Goal Section */}
      <section className={styles.section} id="achievements">
        <h2 className={styles.sectionTitle}>
          <FaRocket className={styles.icon} /> Our Mission
        </h2>
        <p className={styles.text}>
          We believe financial understanding should be effortless. Our goal is to
          transform complex bank data into clear, visual insights that help you
          make informed decisions and take control of your financial future.
        </p>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <FaCheckCircle className={styles.cardIcon} />
            <h3>Accurate Insights</h3>
            <p>
              Instantly turn raw transaction data into detailed summaries and
              visual reports.
            </p>
          </div>
          <div className={styles.card}>
            <FaUsers className={styles.cardIcon} />
            <h3>Community Driven</h3>
            <p>
              Shaped by user feedback and real financial challenges faced by
              everyday people.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h3 className={styles.ctaTitle}>
          Start uncovering insights from your bank statements today
        </h3>
        <button
          className={styles.ctaButton}
          onClick={() => navigation("/upload")}
        >
          🚀 Get Started
        </button>
      </section>
    </div>
  );
}

export default AboutPage;
