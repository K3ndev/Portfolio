import { useScrollIntoView } from "@mantine/hooks";
import Nav from "../navigation/index";
import Profile from "../../pages/profile/index";
import Projects from "../../pages/projects/index";
import Contact from "../../pages/contact/index";

const layout: React.FC = ()=> {
  // listener for scroll to div event
  const { scrollIntoView: scrollToProfile, targetRef: toProfile } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToProjects, targetRef: toProjects } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToContact, targetRef: toContact } =
    useScrollIntoView<HTMLDivElement>();

  // listener active links

  return (
    // I remove [md:max-h-screen , md:overflow-y-scroll md:snap md:snap-y md:snap-mandatory ]in the main className, the carousel doesn't working -tailwind-
    <main className="bg-primary relative">
      <Nav
        scrollToProfile={scrollToProfile}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <div ref={toProfile}>
        <Profile />
      </div>
      <div ref={toProjects}>
        <Projects />
      </div>
      <div ref={toContact}>
        <Contact />
      </div>
    </main>
  );
}


export default layout;