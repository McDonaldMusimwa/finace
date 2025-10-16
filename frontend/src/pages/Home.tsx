import styles from "./Home.module.css";
import { useNavigate } from "react-router";
import HeroImage from "../assets/hero.png";
import { motion } from "framer-motion";
import HeroCards from "../combonents/UI/HeroCards";

export default function Home() {
  const navigation = useNavigate();
  const navigateToQuestion = () => navigation("/Questionares");

  return (
    <main className={styles.container}>
      <section className={`${styles.header}`}>
        <div className={styles.introSection}>
          <h2>Unlock Your Financial Story</h2>
          <p>Master your money , Faster than you spend your money</p>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p>
              Upload your first{" "}
              <strong className="stroke-text">Bank Statement</strong>,turn raw
              numbers into meaningful insights. Discover how you spend, save,
              and grow — all through smart visual summaries and personalized
              analytics.<span>Make smarter Financial decisions</span>
            </p>

            <HeroCards />
            <button className={styles.ctaButton} onClick={navigateToQuestion}>
              🚀 Analyze your First Statement
            </button>
          </div>
          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={HeroImage}
              alt="Hero"
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />

            <div className={styles.imageArea}></div>
            <div className={styles.blendingoverlay}></div>
          </motion.div>
        </div>
      </section>

      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <section className={styles.section}>
          <h2>Tired of Bank Statement Guesswork? See the Truth. ?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>🌍 Global Reach</h3>
              <p>
                Designed to accommodate users from anywhere in the world, making
                bank statement analysis accessible to everyone.
              </p>
            </div>
            <div className={styles.card}>
              <h3>⭐ Free Tier</h3>
              <p>
                Get started by visualizing your first bank statement for free
                before upgrading to the premium plan.
              </p>
            </div>
            <div className={styles.card}>
              <h3>👨🏾‍💻 Community-Driven</h3>
              <p>
                Developed through continuous feedback from real users to address
                everyday financial challenges.
              </p>
            </div>
            <div className={styles.card}>
              <h3>📊📈 Visual </h3>
              <p>
                Transform raw data into insightful graphs for clearer financial
                understanding and smarter decisions.
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      <section className={styles.section}>
  <h2>Our Goals</h2>
  <div className={styles.grid}>
    <div className={styles.card}>
      <h3>🎯 Simplify Financial Understanding</h3>
      <p>
        Make it easy for users to interpret complex bank statements through clear visuals and organized summaries.
      </p>
    </div>

    <div className={styles.card}>
      <h3>🧠 Promote Financial Awareness</h3>
      <p>
        Empower individuals to understand their spending habits, income trends, and saving patterns with meaningful insights.
      </p>
    </div>

    <div className={styles.card}>
      <h3>🌐 Build a Learning Community</h3>
      <p>
        Foster a supportive space where users can share ideas, discuss financial habits, and learn better money management together.
      </p>
    </div>

    <div className={styles.card}>
      <h3>📈 Deliver Actionable Insights</h3>
      <p>
        Continuously enhance data interpretation with updated tools and smart analytics to help users make informed financial decisions.
      </p>
    </div>
  </div>
</section>


      <section className={styles.cta}>
        <h2>
          <span className={styles.highlight}>Together</span>, let's simplify AWS
          certification for everyone.
        </h2>
        <p>Ready to start your free AWS prep journey?</p>
        <button className={styles.ctaButton} onClick={navigateToQuestion}>
          Explore Questions
        </button>
      </section>
    </main>
  );
}
