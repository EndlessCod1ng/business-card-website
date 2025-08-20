interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div>NotFoundPage</div>
    </div>
  );
};
