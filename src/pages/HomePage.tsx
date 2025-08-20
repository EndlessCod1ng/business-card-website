

interface HomePageProps {
  className?: string;
}
export const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${className ? className : ""}`}>

      <div>HomePage</div>
    </div>
  );
};
