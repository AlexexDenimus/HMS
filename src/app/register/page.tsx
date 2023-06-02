import Link from "next/link";
import { Form } from "./components/form";

export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-xl px-8 py-4 bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Create your account</h1>
        <Form />
        <p className="text-center">
          Have an Account?{" "}
          <Link
            className="text-primary-green hover:text-primary-dark-green hover:underline"
            href={"/login"}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
