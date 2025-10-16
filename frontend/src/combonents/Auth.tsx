import { Navigate } from "react-router";
import { useAuth } from "react-oidc-context";
import React from "react";

interface ProtectedRouteProps {
  children: React.JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/Login" replace />;
  }

  return children;
}
