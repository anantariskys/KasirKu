import { Metadata } from "next";
import Login from "@/client/modules/auth/login";
export const metadata: Metadata = {
  title: "login",
  description: "Login to your KasirKu account",
};

export default function LoginPage() {
  return <Login />;
}
