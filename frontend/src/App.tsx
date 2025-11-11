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
import SideNav from "./combonents/Dashboard/ui/SideNav.tsx";
import { useUser } from "@clerk/clerk-react";

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
          <SideNav />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add more authenticated routes here */}
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
