"use client";
import Button from "@/client/shared/components/Button";
import Input from "@/client/shared/components/Input";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { form, loginMutation, onSubmit } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-tertiary-200/25 p-8 space-y-4 rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <Button
        variant="primary"
        type="submit"
        width="full"
        size="md"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Loading..." : "Login"}
      </Button>
      {loginMutation.isError && (
        <p className="text-red-500 text-sm">
          {loginMutation.error.message || "Terjadi kesalahan"}
        </p>
      )}
      <Link href="/register" className="text-sm text-foreground-light">
        Belum punya akun? <span className="text-primary-500">Daftar</span>
      </Link>
    </form>
  );
}
