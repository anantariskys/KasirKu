import coreApi from "@/client/shared/core/axios.instance";
import { useMutation } from "@tanstack/react-query";

const destroy = async () => {
  const response = await coreApi.post("/api/auth/destroy");
  return response.data;
};

export const useMutationDestroy = () => {
  return useMutation({
    mutationFn: () => destroy(),
  });
};
