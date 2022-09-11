import { useScrollIntoView } from "@mantine/hooks";
import Nav from "../../components/navigation/index";
import Profile from "../../pages/profile/index";
import Projects from "../../pages/projects/index";
import Contact from "../../pages/contact/index";

export default function layout() {
  // listener for scroll to div event
  const { scrollIntoView: scrollToProfile, targetRef: toProfile } =
    useScrollIntoView();
  const { scrollIntoView: scrollToProjects, targetRef: toProjects } =
    useScrollIntoView();
  const { scrollIntoView: scrollToContact, targetRef: toContact } =
    useScrollIntoView();

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
