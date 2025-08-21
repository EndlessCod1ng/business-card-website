import type { ReactNode } from "react";
import s from "./Container.module.scss";
interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${className ? className : ""} ${s.container}`}>{children}</div>;
};
