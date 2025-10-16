import { FcBullish, FcIdea, FcKey } from "react-icons/fc";
import Card from "./Card";
import styles from "./Card.module.css"
function HeroCards() {
  const data = [
    {
      icon: <FcBullish />,
      name: "Smart Summaries Graphs",
      key:1
    },
    {
      icon: <FcIdea />,
      name: "Behavioral Insights",
      key:2
    },
    { icon: <FcKey />, name: "Securely Private" ,key:3},
  ];

  return <div className={styles.HeroCards}>
    {data.map((item)=>{
       return <Card name={item.name} iconSrc={item.icon} key={item.key}/>
    })}
  </div>;
}

export default HeroCards;
