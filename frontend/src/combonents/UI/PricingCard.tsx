import styles from "./PricingCard.module.css";
import React from "react";

interface Benefit {
  name: string;
}

interface CardProps {
  name: string;



  benefits: Benefit[];
  type:string
}

function Card({ name,type, benefits }: CardProps):React.JSX.Element {
  return (
    <div className={styles.pricingCard}>
  {/* The belt element must be inside the card for positioning */}
  <div className={styles.belt}>
    <span>$ {name}</span>
  </div>
  
  <p className={styles.name}>  {type} </p>

  <p className={styles.description}>What's Included:</p>
  <ul className={styles.benefits}>
    {benefits.map((benefit, index) => {
      return (
        <li key={index} className={styles.benefitItem}>
          <span className={styles.checkMark}>✓</span> {benefit.name}
        </li>
      );
    })}
  </ul>
  
</div>
  );
}

export default Card;
