"use client";

import { useState } from "react";
import { Button } from "@/components/layout/Button";
import { Input } from "@/components/layout/Input";
import { Label } from "@/components/layout/Label";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const Form = () => {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    try {
      await signIn("credentials", { email, password, callbackUrl });
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
      <Button type="submit">Login</Button>
    </form>
  );
};
