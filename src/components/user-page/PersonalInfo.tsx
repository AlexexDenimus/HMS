"use client";

import { useSession } from "next-auth/react";
import { Info } from "./components/Info";
import { Button } from "../layout";
import { useRouter } from "next/navigation";

export const PersonalInfo = () => {
  const { data } = useSession();
  const router = useRouter();

  if (!data?.user) {
    return <></>;
  }

  const { name, email } = data.user;

  const handleEditClick = () => router.push("/user/edit");

  return (
    <div className="w-full p-8 bg-white my-10 space-y-8">
      <h3 className="text-primary-dark-green text-xl font-semibold">
        Personal Info
      </h3>
      <div className="flex flex-col space-y-4">
        {email && <Info name="Email" value={email} />}
        {name && <Info name="Name" value={name} />}
      </div>
      <Button onClick={handleEditClick}>Edit</Button>
    </div>
  );
};
