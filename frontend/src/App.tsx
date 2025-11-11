import { Route, Routes } from "react-router";
import Header from "./combonents/Header.tsx";
import Footer from "./combonents/Footer.tsx";
import React from "react";
import { SignUp } from "@clerk/clerk-react";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Main from "./pages/HowItWorkds.tsx";
import Login from "./pages/Auth/Login.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import ProtectedRoute from "./pages/Auth/ProtectedRoutes.tsx";
import AuthenticatedOutlet from "./pages/Auth/AuthenticatedOutlet.tsx";
import { useUser } from "@clerk/clerk-react";
import Statements from "./pages/dashboard/Statements.tsx";
import Settings from "./pages/dashboard/Settings.tsx";
import Profile from "./pages/dashboard/Profile.tsx";

function App(): React.JSX.Element {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading app...</div>;

  return (
    <>
      {!isSignedIn ? (
        <>
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/background" element={<Main />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<AuthenticatedOutlet />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/statements" element={<Statements />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
