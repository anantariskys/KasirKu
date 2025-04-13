import { Shop } from "@prisma/client";
import { shopRepository } from "../repository";
import { createShopUsecase } from "./create-shop.usecase";
import imageService from "@/server/services/imageService";

jest.mock("../repository");
jest.mock("@/server/user/repository");
jest.mock("@/server/services/imageService");

describe("createShopUsecase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw error when shop is not provided", async () => {
    // Act & Assert
    await expect(createShopUsecase(undefined, "user1")).rejects.toThrow(
      "Failed to create shop",
    );
    expect(shopRepository.create).not.toHaveBeenCalled();
    expect(imageService.upload).not.toHaveBeenCalled();
  });

  // it("should throw error when user id is not provided", async () => {
  //     // Arrange
  //     const mockShop = {
  //         name: "Test Shop",
  //         description: "Test Description",
  //         image: new File([], "test-image.jpg"),
  //     };

  //     // Act & Assert
  //     await expect(createShopUsecase(mockShop, undefined)).rejects.toThrow(
  //         "User ID is required"
  //     );
  //     expect(shopRepository.create).not.toHaveBeenCalled();
  //     expect(imageService.upload).not.toHaveBeenCalled();
  //   });

  it("should create shop successfully", async () => {
    // Arrange
    const mockShop = {
      name: "Test Shop",
      description: "Test Description",
      image: new File([], "test-image.jpg"),
    };

    const mockCreatedShop: Shop = {
      id: "shop1",
      name: "Test Shop",
      description: "Test Description",
      imageUrl: "uploaded-image-url",
      userId: "user1",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    (imageService.upload as jest.Mock).mockResolvedValue("uploaded-image-url");
    (shopRepository.create as jest.Mock).mockResolvedValue(mockCreatedShop);

    // Act
    const result = await createShopUsecase(mockShop, "user1");

    // Assert
    expect(imageService.upload).toHaveBeenCalledWith(mockShop.image, "shops");
    expect(shopRepository.create).toHaveBeenCalledWith({
      name: mockShop.name,
      description: mockShop.description,
      imageUrl: "uploaded-image-url",
      userId: "user1",
    });
    expect(result).toEqual(mockCreatedShop);
  });

  it("should throw error when shop creation fails", async () => {
    // Arrange
    const mockShop = {
      name: "Test Shop",
      description: "Test Description",
      image: new File([], "test-image.jpg"),
    };

    (shopRepository.create as jest.Mock).mockRejectedValue(
      new Error("DB Error"),
    );

    // Act & Assert
    await expect(createShopUsecase(mockShop, "user1")).rejects.toThrow(
      "Failed to create shop",
    );
  });

  it("should throw error when image upload fails", async () => {
    // Arrange
    const mockShop = {
      name: "Test Shop",
      description: "Test Description",
      image: new File([], "test-image.jpg"),
    };

    (imageService.upload as jest.Mock).mockRejectedValue(
      new Error("Upload failed"),
    );

    // Act & Assert
    await expect(createShopUsecase(mockShop, "user1")).rejects.toThrow(
      "Failed to create shop",
    );
    expect(shopRepository.create).not.toHaveBeenCalled();
  });
});
