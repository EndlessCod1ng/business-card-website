import type { ReactNode } from "react";

interface AppIconProps {
  Svg: ReactNode;
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
}
export const AppIcon = ({
  Svg,
  className,
  viewBox = "0 0 112 112",
  width = "120",
  height = "120",
}: AppIconProps) => {
  return (
    <Svg
      viewBox={viewBox}
      width={width}
      height={height}
      className={`${className ? className : ""}`}
    />
  );
};
