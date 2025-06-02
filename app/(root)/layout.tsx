import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] grid-cols-1 select-none">
      <Navbar />
       <main role="main" className="container mx-auto" >
        {children}
       </main>
      <Footer />
    </div>
  );
};
export default Layout;
