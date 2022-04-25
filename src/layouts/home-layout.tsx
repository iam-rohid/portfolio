import React, { ReactNode } from "react";
import { NavigationBar } from "src/components/navigation-bar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default HomeLayout;
