import { Banner } from "@/widgets/Banner/Banner";
import { Contacts } from "@/widgets/Contacts/Contacts";
import { Projects } from "@/widgets/Projects/Projects";
import { Stack } from "@/widgets/Stack/Stack";

interface HomePageProps {
  className?: string;
}
export const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Banner />
      <Stack />
      <Projects />
      <Contacts />
    </div>
  );
};
