import "../App.css";
import { FaCloud, FaServer, FaRobot } from "react-icons/fa";
import HomeCard from "../combonents/UI/HomeCard";
import { Outlet, useParams } from "react-router";

function Main() {
  const exams = [
    { name: "Solutions Architect", route: "SAA-C03", icon: <FaServer /> },
    { name: "Cloud Practitioner", route: "CP-C03", icon: <FaCloud /> },
    { name: "AI Practitioner", route: "AIP", icon: <FaRobot /> },
  ];

  const { examcode } = useParams();

  return (
    <main>
      {/* Only show hero/cards if NO examcode in URL */}
      {!examcode && (
        <>
          <section className="hero">
            <h1 className="heroTitle">Level Up Your AWS Skills</h1>
            <p className="heroSubtitle">
              Get hands-on with{" "}
              <span className="highlight">realistic practice tests</span> designed to
              sharpen your knowledge and boost your exam confidence.  
              Start a quick test below, or{" "}
              <span className="highlight">create an account</span> to unlock
              personalized question banks.
            </p>
          </section>

          <div className="homehero">
            {exams.map((exam) => (
              <HomeCard route={exam.route} key={exam.name}>
                <div className="cardContent">
                  <span className="cardIcon">{exam.icon}</span>
                  {exam.name}
                </div>
              </HomeCard>
            ))}
          </div>
        </>
      )}

      <Outlet />
    </main>
  );
}

export default Main;
