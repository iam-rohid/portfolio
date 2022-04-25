import { Blog, Prisma, Tag } from "@prisma/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogCard } from "src/components/cards/blog-card";
import Container from "src/components/Container";
import SocialLinks from "src/components/social-links";
import HomeLayout from "src/layouts/home-layout";
import { prisma } from "src/lib/prisma";
import { CustomNextPage } from "src/types";
import { parseJson } from "src/utils/json";

export type HomePageProps = {
  recentBlogs: (Blog & {
    _count: Prisma.BlogCountOutputType;
    tags: Tag[];
  })[];
  topTags: (Tag & {
    _count: Prisma.TagCountOutputType;
  })[];
};

const HomePage: CustomNextPage<HomePageProps> = ({ recentBlogs, topTags }) => {
  return (
    <div className="space-y-16 py-16">
      <section id="hero">
        <Container className="flex gap-8 items-center flex-col-reverse sm:flex-row">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-2">Hi, I&apos;m Rohid</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a passionate software developer based in Bangladesh. I
              love to solve problems and build awesome products. I&apos;m a
              self-taught developer and I&apos;m always learning new things. I
              like to do front-end projects, sometimes I also do back-end
              projects. I also love to do game development with unity.
            </p>

            <SocialLinks className="text-2xl justify-center sm:justify-start" />
          </div>

          <div className="relative w-48 aspect-square rounded-full overflow-hidden">
            <Image
              src={
                "https://pbs.twimg.com/profile_images/1481868973537132544/0NSx-X8V_400x400.jpg"
              }
              alt="Rohidul Islam"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Container>
      </section>
      {topTags && topTags.length > 0 && (
        <section id="categories">
          <Container>
            <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
            <ul className="flex flex-row flex-wrap gap-2 mt-4">
              {topTags.map((tag, index) => (
                <li key={index}>
                  <Link href={`tags/${tag.slug}`}>
                    <a className="bg-gray-100 dark:bg-gray-800 py-1.5 px-3.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 inline-block">
                      {tag.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
      {recentBlogs && recentBlogs.length > 0 && (
        <section id="Blogs">
          <Container>
            <h1 className="text-2xl font-bold mb-6">Recent Blogs</h1>
            <ul className="space-y-6">
              {recentBlogs.map((blog) => (
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
          </Container>
        </section>
      )}
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  let recentBlogs = await prisma.blog.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 10,
    include: {
      _count: true,
      tags: true,
    },
  });
  recentBlogs = parseJson(recentBlogs);

  let topTags = await prisma.tag.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 10,
    include: {
      _count: true,
    },
  });

  topTags = parseJson(topTags);

  return {
    props: {
      recentBlogs,
      topTags,
    },
  };
};
