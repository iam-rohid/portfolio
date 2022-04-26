import React from "react";
import Container from "src/components/Container";

const LogInPage = () => {
  return (
    <Container className="py-16 max-w-md">
      <h1 className="text-3xl font-bold">Log In</h1>
      <form className="space-y-8 py-8">
        <input
          className="block w-full p-2"
          type="email"
          placeholder="johndoe@example.com"
        />
        <input
          className="block w-full p-2"
          type="password"
          placeholder="********"
        />
        <button className="p-2 w-full flex items-center justify-center bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-800">
          Log In
        </button>
      </form>
    </Container>
  );
};

export default LogInPage;
