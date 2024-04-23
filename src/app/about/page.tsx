import { ActionIcon, Container, Flex, Image, Text, Title } from "@mantine/core";

import { FaceIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <Container>
      <Title py="lg">About Me</Title>
      <Flex direction="column">
        <Text>
          I am a student currently enrolled at UNSW Sydney, with an anticipated
          graduation date set for December 2024.
        </Text>
        <Text>
          As I embark on the journey of transitioning from academia to the
          professional realm, I am actively seeking opportunities to apply the
          knowledge and skills I have acquired throughout my studies.
        </Text>
        <Text>
          Beyond my academic pursuits, I find solace and inspiration in various
          forms of creative expression, including illustration, photography, and
          reading. These hobbies not only serve as outlets for my creativity but
          also enhance my ability to think critically and imaginatively.
        </Text>
        <Text>
          Through this website, I aspire to showcase my talents and
          capabilities, hoping to demonstrate the depth of my skills and
          potential to prospective employers and collaborators.
        </Text>
        <Text>
          It is my hope that this platform serves as a springboard for future
          endeavors and enables me to make meaningful contributions in both my
          personal and professional life.
        </Text>
        {/* <Image alt="about" src="laptop.svg" /> */}
        {/* <ActionIcon h="17rem" w="17rem">
          <FaceIcon />
        </ActionIcon> */}
      </Flex>
    </Container>
  );
}
