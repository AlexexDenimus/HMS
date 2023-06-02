import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: IProps) => {
  return <div className="h-hero bg-primary-white">{children}</div>;
};
