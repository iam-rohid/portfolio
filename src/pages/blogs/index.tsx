import { Blog, Tag } from "@prisma/client";
import { GetStaticProps } from "next";
import React, { useMemo, useState } from "react";
import { BlogCard } from "src/components/cards/blog-card";
import Container from "src/components/Container";
import HomeLayout from "src/layouts/home-layout";
import { prisma } from "src/lib/prisma";
import { CustomNextPage } from "src/types";
import { parseJson } from "src/utils/json";
import { findMatch } from "src/utils/search";

export type BlogsPageProps = {
  blogs: (Blog & {
    tags: Tag[];
  })[];
};

const BlogsPage: CustomNextPage<BlogsPageProps> = ({ blogs }) => {
  const [searchText, setSearchText] = useState("");
  const filteredBlogs = useMemo(
    () =>
      searchText
        ? blogs.filter((blog) => {
            const titleMatch = findMatch(searchText, blog.title);
            const excerptMatch = findMatch(searchText, blog.excerpt);
            return titleMatch || excerptMatch;
          })
        : blogs,

    [blogs, searchText]
  );

  const onSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-16 space-y-16">
      <section id="search">
        <Container>
          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </Container>
      </section>
      <p>{searchText}</p>
      <section id="blogs">
        <Container>
          {filteredBlogs && filteredBlogs.length > 0 ? (
            <ul className="space-y-6">
              {filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  publishedAt={blog.updatedAt}
                  slug={blog.slug}
                  tags={blog.tags?.map((tag) => ({
                    name: tag.name,
                    slug: tag.slug,
                  }))}
                />
              ))}
            </ul>
          ) : (
            <div>No blogs</div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default BlogsPage;

BlogsPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export const getStaticProps: GetStaticProps<BlogsPageProps> = async () => {
  let blogs = await prisma.blog.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      tags: true,
    },
  });

  blogs = parseJson(blogs);

  return {
    props: {
      blogs,
    },
  };
};
