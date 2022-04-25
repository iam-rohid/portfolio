import Link from "next/link";
import React from "react";
import moment from "moment";
export type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: any;
  tags: {
    name: string;
    slug: string;
  }[];
};
export const BlogCard = ({
  title,
  excerpt,
  slug,
  publishedAt,
  tags,
}: BlogCardProps) => {
  return (
    <li>
      <h2 className="text-xl font-semibold mb-1">
        <Link href={`/blogs/${slug}`}>
          <a className="hover:underline underline-offset-2">{title}</a>
        </Link>
      </h2>
      <p className="mb-2 text-gray-700 dark:text-gray-300 text-sm">
        Published At {moment(publishedAt).format("DD MMM, YYYY")}
      </p>
      <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
      {tags && tags.length > 0 && (
        <ul className="flex flex-row flex-wrap gap-2 mt-4">
          {tags?.map((tag, index) => (
            <li key={index}>
              <Link href={`/tags/${tag.slug}`}>
                <a className="bg-gray-100 dark:bg-gray-800 py-1 px-2 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 inline-block">
                  {tag.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
