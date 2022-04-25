import React from "react";
import Container from "src/components/Container";
import { NavigationBar } from "src/components/navigation-bar";
import HomeLayout from "src/layouts/home-layout";
import { CustomNextPage } from "src/types";

const HomePage: CustomNextPage = () => {
  return (
    <>
      <Container>Home Page</Container>
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;
