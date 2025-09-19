import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Stack.module.scss";
import HtmlIcon from "@/shared/assets/icons/html.svg";
import CssIcon from "@/shared/assets/icons/css.svg";
import JsIcon from "@/shared/assets/icons/js.svg";
import ReactIcon from "@/shared/assets/icons/react.svg";
import ReduxIcon from "@/shared/assets/icons/redux.svg";
import BootstrapIcon from "@/shared/assets/icons/bootstrap.svg";
import TailwindIcon from "@/shared/assets/icons/tailwind.svg";
import SassIcon from "@/shared/assets/icons/sass.svg";
import GitIcon from "@/shared/assets/icons/git.svg";
import GreensockIcon from "@/shared/assets/icons/greensock.svg";
import VscodeIcon from "@/shared/assets/icons/vscode.svg";
import GithubIcon from "@/shared/assets/icons/github.svg";
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";
// import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";
interface StackProps {
  className?: string;
}
const stackList = [
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  BootstrapIcon,
  TailwindIcon,
  SassIcon,
  GitIcon,
  GreensockIcon,
  VscodeIcon,
  GithubIcon,
];
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
        {stackList.map((stackI) => (
          <AppIcon
            Svg={stackI}
            key={stackI}
            className={s.stackItem}
          />
        ))}
      </div>
    </section>
  );
};
