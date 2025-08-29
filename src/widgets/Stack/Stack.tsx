import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Stack.module.scss";
interface StackProps {
  className?: string;
}
export const Stack = ({ className }: StackProps) => {
  return (
    <section className={`${s.stack} ${className ? className : ""}`}>
      <AppText
        Tag="h3"
        text="Tech Stack"
      />
      <AppText
        Tag="h4"
        text="Technologies I’ve been working with recently"
      />
      <div className={s.stackList}>
        {[...new Array(12).fill("_")].map((_, i) => (
          <div
            className={s.stackItem}
            key={i}
          ></div>
        ))}
      </div>
    </section>
  );
};
