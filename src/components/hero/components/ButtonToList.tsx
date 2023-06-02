"use client";

import { useRouter } from "next/navigation";
import { Button } from "./layout/Button";

export const ButtonToList = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/list");
  };

  return (
    <Button onClick={handleClick}>
      <span className="text-lg">Search catalog</span>
    </Button>
  );
};
