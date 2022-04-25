import { Blog, Category, Tag, User } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "src/components/Container";
import HomeLayout from "src/layouts/home-layout";
import { prisma } from "src/lib/prisma";
import { CustomNextPage } from "src/types";
import { parseJson } from "src/utils/json";
import moment from "moment";
import SEO from "src/components/SEO";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { me } from "src/data/me";
import Pre from "src/components/pre";
import readingTime from "reading-time";
import Link from "next/link";

const components = {
  pre: Pre,
  h1: (props: any) => (
    <h1
      {...props}
      id={props.children.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-20"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      id={props.children.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-20"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      id={props.children.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-20"
    />
  ),
  h4: (props: any) => (
    <h4
      {...props}
      id={props.children.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-20"
    />
  ),
  h5: (props: any) => (
    <h5
      {...props}
      id={props.children.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-20"
    />
  ),
  h6: (props: any) => (
    <h6
      {...props}
      id={props.children.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-20"
    />
  ),
};

export type BlogPaageProps = {
  blog: Blog & {
    tags: Tag[];
    user: User;
    category: Category | null;
  };
  source: any;
  readTime: number;
};
const regex = /<h2>(.*?)<\/h2>/g;

const BlogPaage: CustomNextPage<BlogPaageProps> = ({
  blog,
  source,
  readTime,
}) => {
  if (source.compiledSource.match(regex)) {
    const match = source.compiledSource.match(regex);
    console.log({ match });
  }
  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt}
        image={blog.coverImage || undefined}
        keywords={blog.tags?.map((tag) => tag.name) || undefined}
        url={`${me.url}/blogs/${blog.slug}`}
        imageAlt={blog.title}
        type="article"
      />
      <div className="py-16 space-y-16">
        <header>
          <Container>
            <h1 className="text-center text-4xl font-black mb-4 leading-tight">
              {blog?.title}
            </h1>
            <p className="text-center space-x-2">
              <span className="text-center text-gray-700 dark:text-gray-300">
                Published At {moment(blog?.updatedAt).format("DD MMM, YYYY")}
              </span>
              <span className="text-center text-gray-700 dark:text-gray-300">
                {readTime.toFixed(1)} min read
              </span>
            </p>
            {blog.tags && blog.tags.length > 0 && (
              <ul className="flex items-center justify-center gap-2 flex-wrap mt-4">
                {blog.tags.map((tag) => (
                  <li key={tag.id} className="inline-block">
                    <Link href={`/tags/${tag.slug}`}>
                      <a className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {tag.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </header>
        <article>
          <Container>
            <div className="prose dark:prose-invert max-w-full border-none">
              <MDXRemote {...source} components={components} />
            </div>
          </Container>
        </article>
      </div>
    </>
  );
};

export default BlogPaage;
BlogPaage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await prisma.blog.findMany({
    where: { status: "PUBLISHED" },
  });
  const paths = blogs.map((blog) => `/blogs/${blog.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPaageProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string };

  let blog = await prisma.blog.findUnique({
    where: {
      slug: slug || "",
    },
    include: {
      tags: true,
      user: true,
      category: true,
    },
  });

  blog = parseJson(blog);

  const source = await serialize(blog?.content || "");
  const { minutes } = readingTime(blog?.content || "");
  return {
    props: {
      blog: blog!,
      source,
      readTime: minutes,
    },
  };
};
