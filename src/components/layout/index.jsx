import Nav from "../../components/navigation/index";
import Profile from "../../pages/profile/index";
import Projects from "../../pages/projects/index";
import Contact from "../../pages/contact/index";

export default function layout() {
  return (
    <main className="bg-primary md:max-h-screen md:overflow-y-scroll md:snap md:snap-y md:snap-mandatory relative">
      <Nav />
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}
