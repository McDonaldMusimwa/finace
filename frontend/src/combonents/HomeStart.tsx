import styles from "./Homestart.module.css";
import Img1 from "../assets/practice.png";
import Img2 from "../assets/practice2.png";
import Img3 from "../assets/practice3.png";
import Img4 from "../assets/practice4.png";

type Props = {
  startQuestionaire: () => void;
  exam: string;
};

function HomeStart({  exam }: Props) {


  const images = [Img1, Img2, Img3, Img4];

  return (
    <div className={styles.homeStart}>
      <section className={styles.herO}>
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="aws cloud prep"
        />
        <p>
          Press start to get started with practice of AWS questions on {exam}.
        </p>
      </section>

    </div>
  );
}

export default HomeStart;
