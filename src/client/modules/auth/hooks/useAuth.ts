"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../schema/authSchema";
import useMutationLogin from "./useMutationLogin";
import useMutationRegister from "./useMutationRegister";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiErrorResponse } from "@/server/utils/response";
import { useAuthStore } from "@/client/shared/store/useAuthStore";

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

export function useAuth() {
  const router = useRouter();
  const [apiResponse, setApiResponse] = useState<ApiErrorResponse | null>(null);
  const { setToken, setUser } = useAuthStore();

  const { mutate: loginMutation, isPending: isLoginPending } =
    useMutationLogin();

  const { mutate: registerMutation, isPending: isRegisterPending } =
    useMutationRegister();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (data: LoginFormData | RegisterFormData) => {
    setApiResponse(null);

    if ("name" in data) {
      registerMutation(data, {
        onSuccess: () => {
          router.push("/login");
        },
        onError: (error) => {
          setApiResponse(error.response?.data as ApiErrorResponse);
        },
      });
    } else {
      loginMutation(data, {
        onSuccess: (response) => {
          try {
            setToken(response.data.token);
            setUser({
              id: response.data.user.id,
              email: response.data.user.email,
              username: response.data.user.username,
              name: response.data.user.name,
            });
            router.push("/");
            router.refresh();
          } catch (error) {
            console.error("Error during login process:", error);
          }
        },
        onError: (error) => {
          setApiResponse(error.response?.data as ApiErrorResponse);
        },
      });
    }
  };

  return {
    loginForm,
    registerForm,
    onSubmit,
    isLoginPending,
    isRegisterPending,
    apiResponse,
    clearError: () => setApiResponse(null),
  };
}
