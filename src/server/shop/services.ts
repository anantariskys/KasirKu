import { userRepository } from "../user/repository";
import { shopRepository } from "./repository";
import { Shop, User } from "@prisma/client";

class ShopService {
  async createShop(shop: Shop) {
    return shopRepository.create(shop);
  }
  async getShopById(id: string) {
    return shopRepository.findById(id);
  }
  async getShopByUserId(userId: string) {
    return shopRepository.findByUserId(userId);
  }
  async updateShop(id: string, shop: Shop) {
    return shopRepository.update(id, shop);
  }
  async getAllShops() {
    return shopRepository.findAll();
  }
}

const shopService = new ShopService();
export default shopService;
