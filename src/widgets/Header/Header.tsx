import { Nav } from "@/features/Nav/Nav";
import { Container } from "@/shared/ui/Container/Container";

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <Container className={`${className ? className : ""}`}>
      <Nav />
    </Container>
  );
};
