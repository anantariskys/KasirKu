import ProfileForm from "./components/ProfileForm";
import ProfileHeader from "./components/ProfileHeader";

export default function Profile() {
  return (
    <div className="container py-4">
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
}
