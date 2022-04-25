import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Container from "src/components/Container";

export type CreateBlogInput = {
  title: string;
  excerpt: string;
  content: string;
};

const NewBlogPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBlogInput>();
  const onSubmit = async (values: CreateBlogInput) => {
    console.log(values);
    const res = await axios.post("/api/blogs", values);
    console.log(res.data);
  };

  return (
    <div>
      <Container className="py-16">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: {
                value: true,
                message: "Title is required",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <textarea
            placeholder="Excerpt"
            {...register("excerpt", {
              required: {
                value: true,
                message: "Excerpt is required",
              },
            })}
          />
          {errors.excerpt && (
            <p className="text-red-500">{errors.excerpt.message}</p>
          )}
          <textarea
            placeholder="Content"
            {...register("content", {
              required: {
                value: true,
                message: "Content is required",
              },
            })}
          />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
          <button>Create</button>
        </form>
      </Container>
    </div>
  );
};

export default NewBlogPage;
