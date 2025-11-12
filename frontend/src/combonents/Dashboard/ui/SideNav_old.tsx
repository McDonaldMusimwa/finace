import { type JSX } from "react";
import { Link } from "react-router";
import styles from "./SideNav.module.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

type NavRoute = {
    path: string;
    name: string;
    icon?: JSX.Element;
}
export default function SideNav(): JSX.Element {

    const loggedInroutes: NavRoute[] = [
         {icon:<AiOutlineDashboard/>, path: "/dashboard", name: "Dashboard" },
        { path: "/statements", name: "Statements",icon:<GrDocument/>}
        
        , { path: "/profile", name: "Profile", icon:<CgProfile/> }
        , { path: "/settings", name: "Settings", icon:<CiSettings/>}]
    return <nav className={styles.sidenav}>
        {loggedInroutes.map((route) => <Link key={route.path} to={route.path} className={styles.link}>{route.icon} {route.name}</Link>)}
    </nav>
}