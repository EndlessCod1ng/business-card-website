import { Banner } from "@/widgets/Banner/Banner";

interface HomePageProps {
  className?: string;
}
export const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <Banner />
    </div>
  );
};
