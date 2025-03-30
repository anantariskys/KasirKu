"use client";
import Button from "@/client/shared/components/Button";
import Input from "@/client/shared/components/Input";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { loginForm, onSubmit, isLoginPending, apiResponse } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = loginForm;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-tertiary-200/25 p-8 space-y-2 rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
        disabled={isLoginPending}
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
        disabled={isLoginPending}
      />
      <Button
        variant="primary"
        type="submit"
        width="full"
        size="md"
        disabled={isLoginPending}
      >
        {isLoginPending ? "Loading..." : "Login"}
      </Button>
      <div className="h-9">
        {apiResponse && (
          <p className="text-red-500 text-xs">
            {apiResponse.message || "Terjadi kesalahan"}
          </p>
        )}
      </div>
      <Link href="/register" className="text-sm text-foreground-light">
        Belum punya akun? <span className="text-primary-500">Daftar</span>
      </Link>
    </form>
  );
}
