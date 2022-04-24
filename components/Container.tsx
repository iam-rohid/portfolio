import classNames from "classnames";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("mx-auto max-w-3xl px-4 w-full", className)}>
      {children}
    </div>
  );
};

export default Container;
