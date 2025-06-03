import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col select-none">
      <Navbar />
      <main role="main" aria-hidden className="container mx-auto flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
