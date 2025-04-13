import { Shop } from "@prisma/client";
import { getShopUsecase } from "./get-shop.usecase";
import { shopRepository } from "../repository";

jest.mock("../repository");

describe("getShopUsecase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return all shops", async () => {
    // Arrange
    const mockShops: Shop[] = [
      {
        id: "1",
        name: "Shop 1", 
        userId: "user1",
        description: "",
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "2",
        name: "Shop 2",
        userId: "user2", 
        description: "",
        imageUrl: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    (shopRepository.findAll as jest.Mock).mockResolvedValue(mockShops);

    // Act
    const result = await getShopUsecase();

    // Assert
    expect(shopRepository.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockShops);
  });

  it("should throw error when service fails", async () => {
    // Arrange
    const error = new Error("Failed to fetch shops");
    (shopRepository.findAll as jest.Mock).mockRejectedValue(error);

    // Act & Assert
    await expect(getShopUsecase()).rejects.toThrow("Failed to fetch shops");
  });
});
