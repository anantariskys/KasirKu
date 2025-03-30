"use client";

import Button, { ButtonVariant } from "@/client/shared/components/Button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import { useMutationDestroy } from "@/client/modules/auth/hooks/useMutationDestroy";

export default function Logout({ type }: { type: ButtonVariant }) {
  const router = useRouter();
  const { logout } = useAuthStore();
  const { mutate: destroy } = useMutationDestroy();

  const handleLogout = () => {
    destroy(undefined, {
      onSuccess: async () => {
        logout();

        await Promise.resolve();

        router.refresh();
        router.replace("/login");
      },
      onError: (error) => {
        router.push("/login");
        console.error("Logout failed:", error);
      },
    });
  };

  return (
    <Button variant={type} onClick={handleLogout}>
      Logout
    </Button>
  );
}
