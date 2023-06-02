import { hash } from "bcrypt";
import prisma from "./prisma";

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

// CREATE
export const createUser = async (email: string, password: string) => {
  const hashedPassword = await hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return user;
};

// UPDATE
export const updateUser = async (id: string, updateData: Date) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
