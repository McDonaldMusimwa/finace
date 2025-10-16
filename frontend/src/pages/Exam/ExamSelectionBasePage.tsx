import styles from "./Exam.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate,Outlet } from "react-router";
import { getSections } from "../../utils/http";
import Card from "../../combonents/UI/Card";
import { useAuth } from "react-oidc-context";

function ExamSelectionBasePage() {
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { examcode } = useParams<{ examcode: string }>();


  const auth = useAuth();

  useEffect(() => {
    async function fetchSections() {
      if (!examcode) return;
      try {
        setLoading(true);
        const data = await getSections(examcode);
        setSections(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load sections. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchSections();
  }, [examcode]);

  const examNames: Record<string, string> = {
    "SAA-C03": "Solutions Architect",
    "CP-C03": "Practitioner",
    "AIP": "AI Practitioner",
  };

  const examName = examNames[examcode || ""] || "";

  const examChoiceHandler = (section_module: string) => {
  
    if (section_module === "1") {
      // Always allow section 1
      navigate(`${section_module}`);
    } else {
      // Require auth for section 2+
      if (auth.isAuthenticated) {
        navigate(`${section_module}`);
      } else {
        navigate("/Login"); // redirect to login/signup
      }
    }
  };
console.log("Sections=>", sections);
  return (
    <div className={styles.Selectionbase}>
      <h2>{examName}</h2>

      {loading && <p>Loading sections...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.sectionSelection}>
        {sections.sort().map((sec) => (
          <Card key={sec} onClick={() => examChoiceHandler(sec)}>
            Section {sec}
          </Card>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ExamSelectionBasePage;
