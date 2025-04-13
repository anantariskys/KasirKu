import { userRepository } from "@/server/user/repository";
import { shopRepository } from "../repository";

export const getShopByUserIdUsecase = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  try {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const shop = await shopRepository.findByUserId(userId);
    return shop;
  } catch (error) {
    console.error("Error fetching shop:", error);
    throw new Error("Failed to fetch shop");
  }
};
