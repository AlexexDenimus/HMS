import Image from "next/image";

interface IProps {
  description: string;
  title: string;
  image: string;
}

export const ItemCard = ({ title, description, image }: IProps) => (
  <div className="bg-gradient-white w-[360px] h-[400px] text-center">
    <div className="my-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-primary-dark-green">{description}</p>
    </div>
    <div className="relative w-full h-4/5">
      <Image
        fill
        src={image}
        alt={title}
        className="object-center object-cover"
      />
    </div>
  </div>
);
