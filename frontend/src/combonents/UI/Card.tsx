import type { JSX } from "react/jsx-runtime";
import styles from "./Card.module.css";
import React from "react";

interface CardProps {
  name: string;

  iconSrc: JSX.Element;

  children?: React.ReactNode;
  onClick?: () => void;
}

function Card({ children, onClick, name, iconSrc }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      {iconSrc}
      <p className={styles.name}>{name}</p>

      {children}
    </div>
  );
}

export default Card;
