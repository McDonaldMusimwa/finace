import { type JSX } from "react";
import { Link } from "react-router";
import styles from "./SideNav.module.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useEffect,useState } from "react";

type NavRoute = {
    path: string;
    name: string;
    icon?: JSX.Element;
}
export default function SideNav(): JSX.Element {
    const { user, isLoaded } = useUser();
    const [mobileView, setMobileView] = useState(false);
useEffect(() => {
    function handleResize() {
        const width = window.innerWidth;
        // You can add logic here to handle resize events if needed
        setMobileView(width <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
   }, []);
    const loggedInroutes: NavRoute[] = [
         {icon:<AiOutlineDashboard/>, path: "/dashboard", name: "Dashboard" },
        { path: "/statements", name: "Statements",icon:<GrDocument/>}
        
        , { path: "/profile", name: "Profile", icon:<CgProfile/> }
        , { path: "/settings", name: "Settings", icon:<CiSettings/>}]

    const displayName = isLoaded ? ((user as any)?.fullName ?? `${(user as any)?.firstName ?? ""} ${(user as any)?.lastName ?? ""}`.trim()) : "";
    const avatarUrl = isLoaded ? ((user as any)?.imageUrl ?? (user as any)?.profileImageUrl ?? null) : null;

    return (
        <nav className={styles.sidenav}>
            {/* Desktop: show full vertical sidebar with all links and profile */}
            {!mobileView && (
                <>
                    <div>
                        {loggedInroutes.map((route) => (
                            <Link key={route.path} to={route.path} className={styles.link}>
                                {route.icon} <span className={styles.linkText}>{route.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.profile}>
                            {avatarUrl ? (
                                <img src={avatarUrl} alt={displayName || "user avatar"} className={styles.avatar} />
                            ) : (
                                <div className={styles.avatarPlaceholder} aria-hidden>{(displayName || "U").charAt(0).toUpperCase()}</div>
                            )}
                            <div className={styles.username} title={displayName}>{displayName || "User"}</div>
                        </div>

                        <SignOutButton>
                            <button type="button" className={styles.logoutBtn}>Sign out</button>
                        </SignOutButton>
                    </div>
                </>
            )}

            {/* Mobile: show icons-only bottom nav */}
            {mobileView && (
                <div className={styles.mobileNav}>
                    {loggedInroutes.map((route) => (
                        <Link key={route.path} to={route.path} className={styles.mobileLink}>
                            {route.icon}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
