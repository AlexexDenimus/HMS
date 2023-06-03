"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../../layout/Button";
import { REGISTER_PAGE } from "@/utils/const";

export const LoginButton = () => {
  const handleClick = () => signIn();

  return <Button onClick={handleClick}>Login</Button>;
};

export const LogoutButton = () => {
  const handleClick = () => signOut();

  return <Button onClick={handleClick}>Sign Out</Button>;
};

export const RegisterButton = () => {
  const router = useRouter();

  const handleClick = () => router.push(REGISTER_PAGE);

  return <Button onClick={handleClick}>Register</Button>;
};
