"use client";

import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginFormData } from "./useAuth";
import coreApi from "@/client/shared/core/axios.instance";

type LoginResponse = {
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      username: string;
    };
  };
  message: string;
  success: boolean;
};

const postLogin = async (
  data: LoginFormData,
): Promise<LoginResponse> => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);
  const response = await coreApi.post("/api/auth/login", formData);
  return response.data;
};

const useMutationLogin = (
  options?: Omit<
    UseMutationOptions<LoginResponse, AxiosError, LoginFormData>,
    "mutationFn"
  >,
) => {
  const mutationFn = async (
    data: LoginFormData,
  ): Promise<LoginResponse> => postLogin(data);

  return useMutation({
    mutationFn,
    ...options,
  });
};

export default useMutationLogin;
