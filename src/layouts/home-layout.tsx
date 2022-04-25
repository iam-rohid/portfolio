import React, { ReactNode } from "react";
import { NavigationBar } from "src/components/navigation-bar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
