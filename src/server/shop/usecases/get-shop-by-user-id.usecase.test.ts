import { Shop, User } from "@prisma/client";
import { getShopByUserIdUsecase } from "./get-shop-by-user-id.usecase";
import { shopRepository } from "../repository";
import { userRepository } from "@/server/user/repository";

jest.mock("../repository");
jest.mock("@/server/user/repository");

describe("getShopByUserIdUsecase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw error when user id is not provided", async () => {
    // Act & Assert
    await expect(getShopByUserIdUsecase("")).rejects.toThrow(
      "User ID is required",
    );
    expect(userRepository.findById).not.toHaveBeenCalled();
    expect(shopRepository.findByUserId).not.toHaveBeenCalled();
  });
  it("should return shop for valid user id", async () => {
    // Arrange
    const mockUser: User = {
      id: "user1",
      name: "Test User",
      email: "test@example.com",
      username: "testuser",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const mockShop: Shop = {
      id: "shop1",
      name: "Test Shop",
      userId: "user1",
      description: "",
      imageUrl: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    (userRepository.findById as jest.Mock).mockResolvedValue(mockUser);
    (shopRepository.findByUserId as jest.Mock).mockResolvedValue(mockShop);

    // Act
    const result = await getShopByUserIdUsecase("user1");

    // Assert
    expect(userRepository.findById).toHaveBeenCalledWith("user1");
    expect(shopRepository.findByUserId).toHaveBeenCalledWith("user1");
    expect(result).toEqual(mockShop);
  });

  it("should throw error when user not found", async () => {
    // Arrange
    (userRepository.findById as jest.Mock).mockRejectedValue(
      new Error("User not found"),
    );

    // Act & Assert
    await expect(getShopByUserIdUsecase("invalid-user")).rejects.toThrow(
      "Failed to fetch shop",
    );
    expect(shopRepository.findByUserId).not.toHaveBeenCalled();
  });

  it("should return null when shop not found for user", async () => {
    // Arrange
    const mockUser: User = {
      id: "user1",
      name: "Test User",
      email: "test@example.com",
      username: "testuser",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    (userRepository.findById as jest.Mock).mockResolvedValue(mockUser);
    (shopRepository.findByUserId as jest.Mock).mockResolvedValue(null);

    // Act
    const result = await getShopByUserIdUsecase("user1");

    // Assert
    expect(userRepository.findById).toHaveBeenCalledWith("user1");
    expect(shopRepository.findByUserId).toHaveBeenCalledWith("user1");
    expect(result).toBeNull();
  });
});
