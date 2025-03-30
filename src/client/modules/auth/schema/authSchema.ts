import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export const registerSchema = z.object({
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(/[A-Z]/, "Password harus mengandung huruf kapital")
    .regex(/[0-9]/, "Password harus mengandung angka")
    .regex(/[^A-Za-z0-9]/, "Password harus mengandung karakter spesial"),
  name: z
    .string()
    .min(3, "Nama minimal 3 karakter")
    .max(50, "Nama maksimal 50 karakter"),
  username: z
    .string()
    .min(3, "Username minimal 3 karakter")
    .max(20, "Username maksimal 20 karakter")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username hanya boleh mengandung huruf, angka dan underscore",
    ),
});
