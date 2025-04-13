import { Shop } from "@prisma/client";
import prisma from "../db/prisma";

export const shopRepository = {
  create: async (shop: Shop) => {
    return prisma.shop.create({ data: shop });
  },
  findById: async (id: string) => {
    return prisma.shop.findUnique({ where: { id } });
  },
  findByUserId: async (userId: string) => {
    return prisma.shop.findFirst({ where: { userId } });
  },
  findAll: async () => {
    return prisma.shop.findMany();
  },
  update: async (id: string, shop: Shop) => {
    return prisma.shop.update({ where: { id }, data: shop });
  },
  
};
