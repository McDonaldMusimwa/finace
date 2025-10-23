import styles from "./HowItWorks.module.css";
import steps from "../const/steps.tsx"
import pricing from "../const/pricing.ts";
import Card from "../combonents/UI/CardX2";
import PricingCard from "../combonents/UI/PricingCard.tsx"
function Main() {
 

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
      <section>
                <h3 className={styles.pricingTitle}>Pricing</h3>
        <div className={styles.cardsSection}>
          {pricing.map((item) => (
            <PricingCard
              key={item.key}
              name={item.price.toString()}
   
              type={item.type}
              benefits={item.benefits}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
