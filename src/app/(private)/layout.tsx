import Navbar from "@/client/shared/components/navbar";
import Sidebar from "@/client/shared/components/sidebar";
import { VisibilityProvider } from "@/client/shared/providers/useVisibilityProvider";
export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VisibilityProvider>
      <div className="flex bg-background-light">
        <Sidebar />

        <main className="flex-1">
          <Navbar />
          {children}
        </main>
      </div>
    </VisibilityProvider>
  );
}
