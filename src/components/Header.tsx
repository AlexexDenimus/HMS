import Image from "next/image";
import Link from "next/link";
import { Button } from "./layout/Button";

export const Header = () => (
  <div
    className={`w-screen bg-primary-white h-header flex items-center justify-between select-none`}
  >
    <div className="flex items-center font-bold">
      <Image
        className="mx-5"
        src="/logo.png"
        alt="logo"
        width={140}
        height={70}
      />
      <div className="text-primary hover:text-primary-dark">
        <Link href="/">Home</Link>
        <Link className="ml-14" href="/list">
          List
        </Link>
      </div>
    </div>
    <div className="flex mr-10">
      <Button>Login</Button>
    </div>
  </div>
);
