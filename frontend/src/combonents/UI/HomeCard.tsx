import styles from "./Card.module.css";
import { useNavigate } from "react-router";

function HomeCard({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  if (!children) {
    throw new Error("Children cannot be null or undefined");
  }
  const navigate = useNavigate();


  return (
    <div
      className={styles.homeCard}
      onClick={() => {
        navigate(`/Questionares/${route}`);
      }}
    >
      {children}
    </div>
  );
}

export default HomeCard;
