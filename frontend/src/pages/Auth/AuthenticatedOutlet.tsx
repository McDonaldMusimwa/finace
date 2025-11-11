import { Outlet } from "react-router";
import type{ JSX } from "react";
import SideNav from "../../combonents/Dashboard/ui/SideNav";
import "./AuthenitedLayout.css";

export default function AuthPagesLayout():JSX.Element{
  return(
    <div className="auth-pages-layout" style={{ display: "flex" }}>
      <SideNav />
      <div style={{ flex: 1, width: "100%" }}>
        <Outlet/>
      </div>
    </div>
  )
}