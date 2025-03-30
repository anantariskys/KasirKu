import { z } from "zod";


export const editProfileSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter").max(50, "Nama maksimal 50 karakter"),
    email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),
    username: z.string().min(8, "Username minimal 8 karakter").max(20, "Username maksimal 20 karakter"),
});


