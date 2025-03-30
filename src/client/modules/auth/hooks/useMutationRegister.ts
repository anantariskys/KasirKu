"use client";

import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { RegisterFormData } from "./useAuth";
import axiosInstance from "@/client/shared/core/axios.instance";

type RegisterSuccessResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

const postRegister = async (
  data: RegisterFormData,
): Promise<RegisterSuccessResponse> => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("username", data.username);
  const response = await axiosInstance.post("/api/auth/register", formData);
  return response.data;
};

const useMutationRegister = (
  options?: Omit<
    UseMutationOptions<RegisterSuccessResponse, AxiosError, RegisterFormData>,
    "mutationFn"
  >,
) => {
  const mutationFn = async (
    data: RegisterFormData,
  ): Promise<RegisterSuccessResponse> => postRegister(data);

  return useMutation({
    mutationFn,
    ...options,
  });
};

export default useMutationRegister;
