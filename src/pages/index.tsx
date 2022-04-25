import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogCard } from "src/components/cards/blog-card";
import Container from "src/components/Container";
import SocialLinks from "src/components/social-links";
import HomeLayout from "src/layouts/home-layout";
import { CustomNextPage } from "src/types";

const HomePage: CustomNextPage = () => {
  return (
    <div className="space-y-16 py-16">
      <section id="hero">
        <Container className="flex gap-8 items-center flex-col-reverse sm:flex-row">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-2">Hi, I&apos;m Rohid</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m a passionate software developer based in Bangladesh 🇧🇩. I
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
      <section id="categories">
        <Container>
          <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
          <ul className="flex flex-row flex-wrap gap-2 mt-4">
            {new Array(10).fill(2)?.map((tag, index) => (
              <li key={index}>
                <Link href={`#`}>
                  <a className="bg-gray-100 dark:bg-gray-800 py-1.5 px-3.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 inline-block">
                    Test Tag
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section id="Blogs">
        <Container>
          <h1 className="text-2xl font-bold mb-6">Recent Blogs</h1>
          <ul className="space-y-6">
            <BlogCard
              title="Test Blog"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              publishedAt={new Date().toISOString()}
              slug="test-blog"
              tags={[
                {
                  name: "React",
                  slug: "react",
                },
                {
                  name: "Next.js",
                  slug: "next-js",
                },
                {
                  name: "TypeScript",
                  slug: "typescript",
                },
              ]}
            />
            <BlogCard
              title="Test Blog"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              publishedAt={new Date().toISOString()}
              slug="test-blog"
              tags={[
                {
                  name: "React",
                  slug: "react",
                },
                {
                  name: "Next.js",
                  slug: "next-js",
                },
                {
                  name: "TypeScript",
                  slug: "typescript",
                },
              ]}
            />
          </ul>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;
