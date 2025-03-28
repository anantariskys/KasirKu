"use client";

import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginFormData } from "./useAuth";
import axiosInstance from "@/client/shared/core/axios.instance.";

type LoginSuccessResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

const postLogin = async (
  data: LoginFormData,
): Promise<LoginSuccessResponse> => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  const response = await axiosInstance.post("/auth/login", formData);
  return response.data;
};

const useMutationLogin = (
  options?: Omit<
    UseMutationOptions<LoginSuccessResponse, AxiosError, LoginFormData>,
    "mutationFn"
  >,
) => {
  const mutationFn = async (
    data: LoginFormData,
  ): Promise<LoginSuccessResponse> => postLogin(data);

  return useMutation({
    mutationFn,
    ...options,
  });
};

export default useMutationLogin;
