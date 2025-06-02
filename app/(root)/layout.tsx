import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      aria-hidden
      className="grid min-h-screen grid-rows-[auto_1fr_auto] select-none"
    >
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
