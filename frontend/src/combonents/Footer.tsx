import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/McDonaldMusimwa/bank-statement-analyzer.git";
  const learnLink = "https://www.investopedia.com/articles/personal-finance/";

  return (
    <footer className={styles.footer}>
      <div>
        <h3>Bank Statement Analyzer</h3>
        <p>
          Empowering individuals to understand their finances through smart
          data visualization. Upload your statements, uncover spending patterns,
          and make confident financial decisions.
        </p>
        <p>
          &copy; {currentYear} Bank Statement Analyzer. Built with 💻 and 💡
          to help users gain financial clarity.
        </p>
        <p className={styles.links}></p>
      </div>

      <div>
        <Link to={learnLink} target="_blank" rel="noopener noreferrer">
          Learn About Financial Literacy
        </Link>
        <Link to={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
