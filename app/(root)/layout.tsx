import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col transition select-none">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
