import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Header from "./combonents/Header.tsx";
import Footer from "./combonents/Footer.tsx";
import React from "react";
//import { useRoutes } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import HowitWorks from "./pages/HowItWorkds.tsx";
import ExamSelectionBasePage from "./pages/Exam/ExamSelectionBasePage.tsx";
import ExamBasePage from "./pages/Exam/ExamBasePage.tsx";
import ExamSummaryPage from "./pages/Exam/ExamSummaryPage.tsx";

import Login from "./pages/Auth/Login.tsx";
import SignUp from "./pages/Auth/Register.tsx";

import { useAuth } from "react-oidc-context";


function App() {
  const auth = useAuth();

  const ProtectedRoute = ({
    children,
    section_module,
  }: {
    children: React.JSX.Element;
    section_module?: string;
  }) => {
    // Always allow section 1
    if (section_module === "1") {
      return children;
    }

    // Require login for section 2+
    if (!auth.isAuthenticated) {
      return <Navigate to="/Login" replace />;
    }

    return children;
  };
  /*
const routes =useRoutes( [
  {path:"/",
    element:<Home />
  },{
    path:"/About",
    element:<About />
  },
  {
    path:"HowItWorks",element:<HowitWorks />

  }
])*/
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="About" element={<About />} />

        {/* Questionares routes */}
        <Route path="Background" element={<HowitWorks />} />

        {/* Selection page for an exam */}
        <Route
          path="Questionares/:examcode"
          element={<ExamSelectionBasePage />}
        />

        {/* Exam page per section */}
        <Route
          path="Questionares/:examcode/:section_module"
          element={
            <ProtectedRoute>
              <ExamBasePage />
            </ProtectedRoute>
          }
        />

        {/* Summary page */}
        <Route
          path="Questionares/:examcode/:section_module/Summary"
          element={
            <ProtectedRoute>
              <ExamSummaryPage />
            </ProtectedRoute>
          }
        />

        {/* Auth */}
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
