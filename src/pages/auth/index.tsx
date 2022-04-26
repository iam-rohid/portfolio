import { GetStaticProps } from "next";

const AuthPage = () => {
  return null;
};

export default AuthPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    redirect: {
      destination: "/auth/login",
      permanent: true,
    },
  };
};
