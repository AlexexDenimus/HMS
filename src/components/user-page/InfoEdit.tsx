"use client";

import { useSession } from "next-auth/react";
import { Button, Input, Label } from "../layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const InfoEdit = () => {
  const { data, status, update } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      setEmail(data?.user?.email || "");
      setName(data?.user?.name || "");
    }
  }, [status]);

  // Polling the session every 1 hour
  useEffect(() => {
    // TIP: You can also use `navigator.onLine` and some extra event handlers
    // to check if the user is online and only update the session if they are.
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine
    const interval = setInterval(() => update(), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [update]);

  // Listen for when the page is visible, if the user switches tabs
  // and makes our tab visible again, re-fetch the session
  useEffect(() => {
    const visibilityHandler = () =>
      document.visibilityState === "visible" && update();
    window.addEventListener("visibilitychange", visibilityHandler, false);
    return () =>
      window.removeEventListener("visibilitychange", visibilityHandler, false);
  }, [update]);

  if (!data?.user && status === "loading") {
    return <></>;
  }

  console.log(data);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify({ email, name, id: data?.user?.id }),
        headers: { "Content-Type": "application/json" },
      });

      if (user) {
        update({ user: { email, name } });
        router.push("/user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full p-8 bg-white my-10 space-y-8">
      <div className="flex flex-col space-y-2 w-60">
        <Label htmlFor="email">Email: </Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
      </div>
      <div className="flex flex-col space-y-2 w-60">
        <Label htmlFor="name">Name: </Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
      </div>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};
