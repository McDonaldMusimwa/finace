import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router";
import type {JSX} from "react";

export default function ProtectedRoute(): JSX.Element {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  // Wait for Clerk to finish loading auth state
  if (!isLoaded) {
    return <div>Loading authentication status…</div>;
  }

  // If logged in, render nested routes; otherwise redirect to /login
  return isSignedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
