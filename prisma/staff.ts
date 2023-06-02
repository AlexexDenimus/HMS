import prisma from './prisma'

// READ
export const getAllStaff = async () => {
  const staff = await prisma.staff.findMany({});
  return staff;
}