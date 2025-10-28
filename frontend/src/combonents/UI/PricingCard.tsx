import styles from "./CardX2.module.css";
import type { PricingCardProps } from "../../const/types";



function Card({ name,type, benefits }: PricingCardProps) {
  return (
    <div className={styles.pricingcard}>


      <p className={styles.name}>$ {name} {type} </p>

      <p className={styles.flag}>whats included</p>
      <ul className={styles.benefits}>
        {benefits.map((benefit, index) => {
          return (
            <li key={index} className={styles.benefitItem}>
              {/* Optional: Add an icon before the text */}
          

              {/* CORRECTED: Access the 'name' property of the benefit object */}
              ✓       {benefit.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;
