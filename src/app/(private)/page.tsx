import Logout from "@/client/shared/components/Logout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 bg-primary-200">
      <h1>Dashboard</h1>
      <Logout type="primary" />
    </div>
  );
}
