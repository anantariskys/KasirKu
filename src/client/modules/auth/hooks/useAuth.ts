"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../schema/authSchema";
import useMutationLogin from "./useMutationLogin";
import useMutationRegister from "./useMutationRegister";

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

export function useAuth() {
  const {
    mutate: loginMutation,
    isPending: isLoginPending,
    error: loginError,
  } = useMutationLogin();
  const {
    mutate: registerMutation,
    isPending: isRegisterPending,
    error: registerError,
  } = useMutationRegister();

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
    },
  });

  const onSubmit = (data: LoginFormData | RegisterFormData) => {
    if ("name" in data) {
      registerMutation(data);
    } else {
      loginMutation(data);
    }
  };

  return {
    loginForm,
    registerForm,
    loginMutation,
    onSubmit,
    registerMutation,
    isLoginPending,
    isRegisterPending,
    loginError,
    registerError,
  };
}
