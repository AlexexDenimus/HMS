"use client";

import { useState } from "react";
import { Button, Label, Input } from "@/components";
import { signIn } from "next-auth/react";

export const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (user) {
        signIn("credentials", {
          email,
          password,
          callbackUrl: "/",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-[400px]">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="email">Email: </Label>
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="password">Password: </Label>
        <Input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <Button className="w-full" type="submit">
        Register
      </Button>
    </form>
  );
};
