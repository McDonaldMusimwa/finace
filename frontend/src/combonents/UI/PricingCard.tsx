import styles from "./CardX2.module.css";
import React from "react";

interface Benefit {
  name: string;
}

interface CardProps {
  name: string;



  benefits: Benefit[];
  type:string
}

function Card({ name,type, benefits }: CardProps) {
  return (
    <div className={styles.card}>


      <p className={styles.name}>$ {name} {type} </p>

      <p className={styles.description}>whats included</p>
      <ul className={styles.benefits}>
        {benefits.map((benefit, index) => {
          return (
            <li key={index} className={styles.benefitItem}>
              {/* Optional: Add an icon before the text */}
          

              {/* CORRECTED: Access the 'name' property of the benefit object */}
              ✓ {benefit.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;
