import styles from "./HowItWorks.module.css";
import { FcUpload, FcReadingEbook, FcBusinesswoman } from "react-icons/fc";
import Card from "../combonents/UI/CardX2";

function Main() {
  const steps = [
    {
      key: 1,
      name: "Log In",
      icon: <FcBusinesswoman />,
      description:
        "Create an account or sign in securely to get started with your personal financial dashboard.",
    },
    {
      key: 2,
      name: "Upload",
      icon: <FcUpload />,
      description:
        "Upload your bank statement in CSV or PDF format. Our system automatically reads and processes your data.",
    },
    {
      key: 3,
      name: "Analyze & Understand",
      icon: <FcReadingEbook />,
      description:
        "Explore clear visual summaries of your transactions to understand your spending habits and financial behavior.",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h2 className={styles.heroTitle}>Hassle-free Financial Insights</h2>
        <p>
          Say goodbye to the stress of reading through complex bank statements.
          <span className={styles.highlight}> Embrace </span>
          a smarter way to understand your finances and take control of your
          financial independence. Let us help you uncover the story behind your
          spending patterns.
        </p>
      </section>

      <section>
        <div className={styles.cardsSection}>
          {steps.map((item) => (
            <Card
              key={item.key}
              name={item.name}
              iconSrc={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
