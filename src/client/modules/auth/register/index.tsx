"use client";
import Button from "@/client/shared/components/Button";
import Input from "@/client/shared/components/Input";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const { registerForm, onSubmit, isRegisterPending, apiResponse } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = registerForm;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-tertiary-200/25 p-8 space-y-2 rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <Input
        label="Nama"
        {...register("name")}
        error={errors.name?.message}
        disabled={isRegisterPending}
      />
      <Input
        label="Username"
        {...register("username")}
        error={errors.username?.message}
        disabled={isRegisterPending}
      />
      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
        disabled={isRegisterPending}
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
        disabled={isRegisterPending}
      />
      <Button
        variant="primary"
        type="submit"
        width="full"
        size="md"
        disabled={isRegisterPending}
      >
        {isRegisterPending ? "Loading..." : "Register"}
      </Button>
      <div className="h-9">
        {apiResponse && (
          <p className="text-red-500 text-xs">
            {apiResponse.message || "Terjadi kesalahan"}
          </p>
        )}
      </div>
      <Link href="/login" className="text-sm text-foreground-light">
        Sudah punya akun? <span className="text-primary-500">Login</span>
      </Link>
    </form>
  );
}
