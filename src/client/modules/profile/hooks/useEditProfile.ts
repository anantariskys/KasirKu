"use client";
import { useAuthStore } from "@/client/shared/store/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editProfileSchema } from "../schema/editProfileSchema";

interface EditProfile {
  name: string;
  email: string;
  username: string;
}

export const useEditProfile = () => {
  const { user } = useAuthStore();

  const editProfileForm = useForm<EditProfile>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      username: user?.username,
    },
  });

  const onSubmit = async (data: EditProfile) => {
    console.log(data);
  };

  return {
    onSubmit,
    editProfileForm,
    user,
  };
};
