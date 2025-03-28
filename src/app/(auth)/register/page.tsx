import Register from "@/client/modules/auth/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "register",
  description: "Register to your KasirKu account",
};

export default function RegisterPage() {
  return <Register />;
}
