import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type CustomNextPage<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type CustomAppProps<T> = AppProps & {
  Component: CustomNextPage<T>;
};
