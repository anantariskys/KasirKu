import { shopRepository } from "../repository";

export const getShopUsecase = async () => {
  try {
    const shops = await shopRepository.findAll();
    return shops;
  } catch (error) {
    console.error("Error fetching shops:", error);
    throw new Error("Failed to fetch shops");
  }
};
