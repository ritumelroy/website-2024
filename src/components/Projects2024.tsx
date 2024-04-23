import { Box, Container, Flex, Text, Title } from "@mantine/core";
import ProjectStats from "./ProjectStats";
import CurrentProjectCards from "./CurrentProjectCards";
import CurrentProject from "./CurrentProject";

export default function Projects2024() {
  return (
    <Container size="md" pt="sm">
      <Title mb="sm">2024 Projects</Title>
      <Flex direction={{ base: "column", md: "row" }} gap="md">
        <ProjectStats />
        <Box maw={{ base: "100%", md: "60%" }}>
          <Text>
            In my final year as a student, I am eager to embark on a long-term
            project to stay updated on industry trends and sharpen my skills.
          </Text>
          <Text>
            I will start with a basic tech stack like HTML, CSS, and React, then
            gradually incorporate more advanced tools like Tailwind CSS,
            Mantine, and NextJS. I plan to transition from frontend to
            full-stack projects, including React Native and Electron. So please
            check back later as I update this page throughout this year!
          </Text>
          <Text>
            Although I aim for monthly goals, my schedule as a full-time Masters
            student varies, limiting me to planning just two projects at a time.
            Excited to showcase my programming prowess!
          </Text>
        </Box>
      </Flex>
      <CurrentProject />
    </Container>
  );
}
