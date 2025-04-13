import prisma from "../db/prisma";
import { User } from "../types/user.types";

export const userRepository = {
  create: async (user: User) => {
    return prisma.user.create({ data: user });
  },
  findByUsername: async (username: string) => {
    return prisma.user.findUnique({ where: { username } });
  },
  findByEmail: async (email: string) => {
    return prisma.user.findUnique({ where: { email } });
  },
  findById: async (id: string) => {
    return prisma.user.findUnique({ where: { id } });
  },
  update: async (id: string, user: User) => {
    return prisma.user.update({ where: { id }, data: user });
  },
  delete: async (id: string) => {
    return prisma.user.delete({ where: { id } });
  },
};
