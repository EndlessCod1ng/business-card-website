import { Container } from "@/shared/ui/Container/Container";

interface HomePageProps {
  className?: string;
}
export const HomePage = ({ className }: HomePageProps) => {
  return (
    <Container className={`${className ? className : ""}`}>
      <div>HomePage</div>
    </Container>
  );
};
