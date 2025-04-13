export type CreateShopPayload = {
  name: string;
  description: string;
  image: File;
};

export type ShopDB = {
  name: string;
  description: string;
  imageUrl: string;
  userId: string;
};
