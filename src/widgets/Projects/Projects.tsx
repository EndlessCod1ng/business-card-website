import { AppText } from "@/shared/ui/AppText/AppText";
import s from "./Projects.module.scss";
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
            preview: "link",
            code: "link",
          }),
        ].map(({ title, description, tags, preview, code }, i) => (
          <div
            className={s.projctsItem}
            key={i}
          >
            <div className={s.img}></div>

            <div className={s.content}>
              <AppText
                Tag="h5"
                text={title}
              />
              <AppText text={description} />
              <AppText text={tags} />
              <div className={s.tags}>{tags}</div>
              <div className={s.links}>
                <AppText text={preview} />
                <AppText text={code} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
