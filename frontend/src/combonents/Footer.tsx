import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/McDonaldMusimwa/practiceaws.git";
  const examLink =
    "https://aws.amazon.com/certification/certified-solutions-architect-associate/";

  return (
    <footer className={styles.footer}>
      <div>
        <h3>AWS Cloud Prep</h3>
        <p>
          Prepare for your AWS cloud certification exams with our comprehensive
          and interactive resources. We provide a seamless learning experience,
          with a clean and modern user interface.
        </p>
        <p>
          &copy; {currentYear} AWS Practice Solution App. Built with 💻 to help
          learners succeed.
        </p>
        <p className={styles.links}></p>
      </div>
      <div>
        <Link to={examLink} target="_blank" rel="noopener noreferrer">
          Learn about the SAA-C03 Exam
        </Link>
        <Link to={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
