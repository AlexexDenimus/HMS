import Image from "next/image";
import { ButtonToList } from "./components/ButtonToList";

export const Hero = () => {
  return (
    <div className="w-screen h-hero relative">
      <Image
        priority
        fill
        src={"/hero.jpg"}
        alt="hero"
        className="object-center object-cover"
      />
      <div className="absolute top-32 right-40 flex flex-col items-center">
        <h1 className="font-bold text-6xl text-primary-green">
          Sell your hobby
        </h1>
        <p className="my-8 text-primary-dark-green">
          The platform for selling and buying handmade products
        </p>
        <ButtonToList />
      </div>
    </div>
  );
};
