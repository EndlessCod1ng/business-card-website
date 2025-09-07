import type { ReactElement } from "react";

interface AppIconProps {
  Svg: string;
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
}
export const AppIcon = ({
  className,
  viewBox = "0 0 112 112",
  width = "120",
  height = "120",
}: AppIconProps) => {
  return <svg className={`${className ? className : ""}`}></svg>;
};
