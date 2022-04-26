import React, { ReactNode } from "react";
import Footer from "src/components/footer";
import { NavigationBar } from "src/components/navigation-bar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
