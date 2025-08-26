import { Banner } from "@/widgets/Banner/Banner";
import { Stack } from "@/widgets/Stack/Stack";

interface HomePageProps {
  className?: string;
}
export const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Banner />
      <Stack />
    </div>
  );
};
