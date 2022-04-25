import { NextApiHandler } from "next";
import { prisma } from "src/lib/prisma";
import { CreateBlogInput } from "src/pages/admin/blogs/new";

const handle: NextApiHandler = async (req, res) => {
  const { title, content, excerpt }: CreateBlogInput = req.body;
  const blog = await prisma.blog.create({
    data: {
      title,
      content,
      excerpt,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      user: {
        connect: {
          id: "cl2f104qj0085css5p56ysjgo",
        },
      },
    },
  });
  res.status(201).json(blog);
};

export default handle;
