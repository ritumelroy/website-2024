import { HeaderSimple } from "@/components/HeaderSimple";
import PastProjects from "@/components/PastProjects";
import SideQuests from "@/components/SideQuests";
import Projects2024 from "@/components/Projects2024";
import { Title } from "@mantine/core";

export default function Projects() {
  return (
    <>
      {/* <HeaderSimple /> */}
      <Projects2024 />
      <SideQuests />
      <PastProjects />
    </>
  );
}
