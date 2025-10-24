import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../public/logo1.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubLink =
    "https://github.com/McDonaldMusimwa/bank-statement-analyzer.git";
  const learnLink = "https://www.investopedia.com/articles/personal-finance/";

  return (
    <footer className={styles.footer}>
      <div className={styles.footertop}>
        {" "}
        <div>
          <div className={styles.footerbranding}>
            <img src={logo} alt="logo" width={60} /> <h3>Finace</h3>
          </div>
          <p>
            Empowering individuals to understand their finances through smart
            data visualization. Upload your statements, uncover spending
            patterns, and make confident financial decisions.
          </p>
        </div>
        <div>
          <Link to={learnLink} target="_blank" rel="noopener noreferrer">
            Learn About Financial Literacy
          </Link>
          <Link to={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
        </div>
      </div>

      <p className={styles.footerbottom}>
        &copy; {currentYear} Bank Statement Analyzer. Built with 💻 and 💡 to
        help users gain financial clarity.
      </p>
    </footer>
  );
}

export default Footer;
