import { ItemCard } from "@/components";
import { getAllStaff } from "../../../prisma/staff";

export default async function Page() {
  const staff = await getAllStaff();

  return (
    <div className="w-full grid grid-cols-4 gap-y-6 justify-items-center px-8">
      {staff.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}
