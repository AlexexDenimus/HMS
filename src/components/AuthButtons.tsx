"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "./layout/Button";

export const LoginButton = () => {
  return <Button onClick={() => signIn()}>Sign In</Button>;
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
