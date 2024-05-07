import { Alert, Box, Container, Flex, Text, Title } from "@mantine/core";
import ProjectStats from "./ProjectStats";
import CurrentProjectCards from "./CurrentProjectCards";
import CurrentProject from "./CurrentProject";
import { UpdateIcon } from "@radix-ui/react-icons";

export default function Projects2024() {
  const updateTitle = (
    <Text>
      <UpdateIcon /> Update on May 7th 2024:{" "}
    </Text>
  );

  return (
    <Container size="md" pt="sm">
      <Title mb="sm">2024 Projects</Title>
      <Alert variant="light" color="red" title={updateTitle} mb="md">
        As my final exam for 2024 Term 1 is on May 9th, I will resume the
        remaining projects after that day. Further, I will update the new
        deadline dates after May 9th as currently I wish to focus on my exam
        prep.
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
