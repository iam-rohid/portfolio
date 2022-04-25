import React from "react";
import HomeLayout from "src/layouts/home-layout";
import { CustomNextPage } from "src/types";

const TagsPage: CustomNextPage = () => {
  return <div>TagsPage</div>;
};

export default TagsPage;

TagsPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;
