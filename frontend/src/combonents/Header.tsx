import logo from "../../public/logo1.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const auth = useAuth();

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //const profile = auth.user?.profile;
  let name_auth;
  if (auth.user) {
    name_auth = "Logout";
  } else {
    name_auth = "Login";
  }

  const navLinks = [
    { route: "/", name: "Home" },
    { route: "Background", name: "How it works" },
    { route: "About", name: "About" },
  ];
  const authLink = { route: "Login", name: name_auth };

  return (
    <header>
      {" "}
      <nav className={styles.header}>
        {/* Logo */}
        <div className={styles.logocontainer}>
          <NavLink to={"/"} className={styles.brand}>
            <img src={logo} alt="logo" className={styles.logo} />
          </NavLink>

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <div
              className={styles.menuToggle}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <IoCloseOutline size={28} />
              ) : (
                <CiMenuBurger size={28} />
              )}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        {isMobile ? (
          <AnimatePresence>
            {isMobile && isOpen && (
              <motion.div
                className={`${styles.links} ${
                  isMobile ? styles.mobile : styles.desktop
                } ${isOpen ? styles.show : ""}`}
                {...(isMobile && {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.1, ease: "easeOut" },
                })}
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.route}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.link
                    }
                    onClick={() => isMobile && setIsOpen(false)}
                    end
                  >
                    {link.name}
                  </NavLink>
                ))}

                {isMobile && (
                  <div className={styles.authLinks}>
                    <NavLink
                      to={authLink.route}
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      {authLink.name}
                    </NavLink>
                    <span className={styles.userName}>
                      {auth?.user?.profile.email}
                    </span>
                  </div>
                )}

                {!isMobile && (
                  <div className={styles.authLinksDesktop}>
                    <span className={styles.userName}>
                      {auth?.user?.profile.email}
                    </span>
                    <NavLink to={authLink.route}>{authLink.name}</NavLink>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        ) : (<>
          <div
            className={`${styles.links} ${
              isMobile ? styles.mobile : styles.desktop
            } ${isOpen ? styles.show : ""}`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.route}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                onClick={() => isMobile && setIsOpen(false)}
                end // Add this prop to make the NavLink match the exact path
              >
                {link.name}
              </NavLink>
            ))}

          </div>
          
            <div className={styles.authLinksDesktop}>
              <span className={styles.userName}>
                {auth?.user?.profile.email}
              </span>
              <NavLink to={authLink.route}>{authLink.name}</NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
