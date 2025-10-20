import styles from "./CardX2.module.css";
import React from "react";
// Removed: import type { JSX } from "react/jsx-runtime"; (Usually not needed)

interface CardProps {
  name: string;
  // REMOVED KEY PROP: Keys should only be used on the element being mapped, not inside the component's props.
  iconSrc: React.ReactElement; // Using React.ReactElement is more precise than JSX.Element
  description: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // Added event type for clarity
}

function Card({
  children,
  onClick,
  name,
  iconSrc,
  description,
  // CRITICAL FIX: The 'key' prop is removed from destructuring here
}: CardProps) {
  return (
    // CRITICAL FIX: The 'key' prop MUST be removed from the element here.
    // Keys are only used when iterating over a list (e.g., inside a .map() function).
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