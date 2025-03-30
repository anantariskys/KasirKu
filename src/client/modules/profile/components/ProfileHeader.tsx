'use client'
import Button from "@/client/shared/components/Button";
import { useEditProfile } from "../hooks/useEditProfile";

export default function ProfileHeader() {
  const { user } = useEditProfile();
  return (
    <section className="flex gap-4 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex h-24 w-24 rounded-full items-center justify-center bg-primary-500">
          <p className="text-white text-2xl font-bold">
            {user?.name
              .split(" ")
              .map((word) => word.charAt(0))
              .join("")
              .toUpperCase()}
          </p>
        </div>    
        <div>
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="text-sm text-foreground-light/50">{user?.email}</p>
        </div>
      </div>
    </section>
  );
}
