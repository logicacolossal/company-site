import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Toaster } from "../components/ui/sonner";

export function RootLayout() {
  return (
    <>
      <Toaster />
      <main className="relative bg-background min-h-screen font-comfortaa">
        <Navbar />
        <div className="flex flex-col w-full">
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
}
