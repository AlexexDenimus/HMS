import { Hero } from "@/components/Hero";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  return <Hero />;
}
