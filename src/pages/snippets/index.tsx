import React from "react";
import HomeLayout from "src/layouts/home-layout";
import { CustomNextPage } from "src/types";

const SnippetsPage: CustomNextPage = () => {
  return <div>SnippetsPage</div>;
};

export default SnippetsPage;

SnippetsPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;
