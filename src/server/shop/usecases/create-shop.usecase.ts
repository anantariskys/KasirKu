import imageService from "@/server/services/imageService";
import { shopRepository } from "../repository";
import { CreateShopPayload } from "../types";

export const createShopUsecase = async (
  shop?: CreateShopPayload,
  userId?: string,
) => {
  try {
    if (!shop) {
      throw new Error("Shop is required");
    }
    if (!userId) {
      throw new Error("User ID is required");
    }

    const imageUrl = await imageService.upload(shop.image, "shops");

    const shopData = {
      name: shop.name,
      description: shop.description,
      imageUrl,
      userId,
    };

    const createdShop = await shopRepository.create(shopData);
    return createdShop;
  } catch (error) {
    console.error("Error creating shop:", error);
    throw new Error("Failed to create shop");
  }
};
