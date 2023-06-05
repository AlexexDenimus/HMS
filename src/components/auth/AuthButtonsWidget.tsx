"use client";

import { useSession } from "next-auth/react";
import {
  LoginButton,
  LogoutButton,
  RegisterButton,
} from "./components/AuthButtons";
import { Skeleton } from "../layout";
import Link from "next/link";

export const AuthButtonsWidget = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <Skeleton className="bg-primary-green h-8 w-24" />;
  }

  if (status === "authenticated") {
    return (
      <div className="flex space-x-10 items-center">
        <Link href={"/user"} className="text-primary hover:text-primary-dark">
          {data.user?.name || data.user?.email}
        </Link>
        <LogoutButton />
      </div>
    );
  }

  return (
    <div className="flex space-x-10">
      <LoginButton />
      <RegisterButton />
    </div>
  );
};
