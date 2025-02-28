"use client";
import { SessionProvider } from "next-auth/react";

const AuthProvider: React.FC<any> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
