import React from "react";
import HomeLayout from "src/layouts/home-layout";
import { CustomNextPage } from "src/types";

const BlogPage: CustomNextPage = () => {
  return <div>BlogPage</div>;
};

export default BlogPage;

BlogPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;
