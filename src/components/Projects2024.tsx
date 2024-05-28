import { Alert, Box, Container, Flex, Text, Title } from "@mantine/core";
import ProjectStats from "./ProjectStats";
import CurrentProjectCards from "./CurrentProjectCards";
import CurrentProject from "./CurrentProject";
import { UpdateIcon } from "@radix-ui/react-icons";

export default function Projects2024() {
  const updateTitle = (
    <Text>
      <UpdateIcon /> Update on May 28th 2024:{" "}
    </Text>
  );

  return (
    <Container size="md" pt="sm">
      <Title mb="sm">2024 Projects</Title>
      <Alert variant="light" color="red" title={updateTitle} mb="md">
        Unfortunately, I got sick with a bad case of flu that lasted around 9
        last days of my 14 day term break. I could barely leave my bed and
        missed all my deadlines 😭. Term 2 already started by the time I was
        recovering. So I hope to update the deadlines once I am back on track
        with school work, job applications and Online Assesments😞
      </Alert>
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
            Excited to showcase my programming progress as well as my ability
            and willingness to learn new technologies/frameworks!
          </Text>
        </Box>
      </Flex>
      <CurrentProject />
    </Container>
  );
}
