import React from "react";
import HomeLayout from "src/layouts/home-layout";
import { CustomNextPage } from "src/types";

const ProjectsPage: CustomNextPage = () => {
  return <div>ProjectsPage</div>;
};

export default ProjectsPage;

ProjectsPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;
