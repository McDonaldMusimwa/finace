import styles from "./CardX2.module.css";
import React from "react";


interface CardProps {
  name: string;
  
  iconSrc: React.ReactElement; 
  description: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function Card({
  children,
  onClick,
  name,
  iconSrc,
  description,

}: CardProps) {
  return (

    <div className={styles.card} onClick={onClick}>
      <div className={styles.iconContainer}>
        {iconSrc} 
      </div>
      
      <p className={styles.name}>{name}</p>

      <p className={styles.description}>{description}</p>
      
      {children}
    </div>
  );
}

export default Card;