import { shopRepository } from "../repository";

export const getShopUsecase = async () => {
  const shops = await shopRepository.findAll();
  return shops;
};
