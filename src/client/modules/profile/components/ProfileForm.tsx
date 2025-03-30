"use client";
import Button from "@/client/shared/components/Button";
import Input from "@/client/shared/components/Input";
import { useEditProfile } from "../hooks/useEditProfile";

export default function ProfileForm() {
  const { editProfileForm, onSubmit } = useEditProfile();
  const { handleSubmit, formState: { errors } } = editProfileForm;
  return (
    <section className="mt-4 space-y-4">
      <h2 className="text-lg font-bold">Informasi Pengguna</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        <Input label="Nama" error={errors.name?.message} {...editProfileForm.register("name")} />
        <Input label="Email" error={errors.email?.message} {...editProfileForm.register("email")} />
        <Input label="Username" error={errors.username?.message} {...editProfileForm.register("username")} />
        <Button type="submit">Simpan</Button>
      </form>
    </section>
  );
}
