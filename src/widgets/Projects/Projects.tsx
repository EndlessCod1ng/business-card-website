import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Projects.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
interface ProjectsProps {
  className?: string;
}
export const Projects = ({ className }: ProjectsProps) => {
  return (
    <div className={`${s.projects} ${className ? className : ""}`}>
      <AppText
        Tag="h3"
        text="Projects"
      />
      <AppText
        Tag="h4"
        text="Things I’ve built so far"
      />
      <div className={s.projectsList}>
        {[
          ...Array(6).fill({
            title: "Project Tile goes here",
            description:
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            tags: "HTML , JavaScript, SASS, React",
            preview: "https://github.com/EndlessCod1ng",
            code: "https://github.com/EndlessCod1ng",
          }),
        ].map(({ title, description, tags, preview, code }, i) => (
          <div
            className={s.projctsItem}
            key={i}
          >
            <div className={s.img}></div>

            <div className={s.content}>
              <AppText
                className={s.title}
                Tag="h5"
                text={title}
              />
              <AppText
                className={s.description}
                text={description}
              />
              <AppText
                className={s.tags}
                text={tags}
              />
              <div className={s.links}>
                <AppLink
                  to={preview}
                  className={s.link}
                >
                  <div className={s.ico}></div>
                  <AppText text="Live preview" />
                </AppLink>
                <AppLink
                  to={code}
                  className={s.link}
                >
                  <div className={s.ico}></div>
                  <AppText text="Code" />
                </AppLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
