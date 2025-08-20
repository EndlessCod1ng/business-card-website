import { Nav } from "@/features/Nav/Nav";

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Nav />
    </div>
  );
};
