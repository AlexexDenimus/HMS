"use client";

import { useState } from "react";
import { Button, Label, Input } from "@/components";
import { signIn } from "next-auth/react";

export const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    try {
      const user = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (user) {
        signIn();
      }
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-[400px]">
      <div className="flex items-center space-x-2">
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <Label htmlFor="email">Email: </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <Label htmlFor="password">Password: </Label>
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
};
