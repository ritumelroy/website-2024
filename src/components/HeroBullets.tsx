"use client";

import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  Box,
  Flex,
  Card,
  ActionIcon,
} from "@mantine/core";

// import { getGradient, useMantineTheme } from "@mantine/core";
import {
  GitHubLogoIcon,
  OpenInNewWindowIcon,
  LinkedInLogoIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";
export function HeroBullets() {
  // const theme = useMantineTheme();

  //   getGradient({ deg: 180, from: "blue", to: "red" }, theme);
  return (
    // <Box h="100%" className="bg-colour-gradient">

    <Container size="md" pb="xl">
      <Flex className="inner " direction={{ base: "column", md: "row" }}>
        <div className="content">
          <Text c="dimmed" my="md">
            Welcome to my website!
          </Text>
          <Title className="title">
            Hello, my name is <span className="highlight">Ritu</span>.
            {/* A <span className="highlight">modern</span> React <br /> components
            library */}
          </Title>

          <Text c="dimmed" my="lg">
            I am currently a student at UNSW Sydney.
          </Text>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className="control"
              component="a"
              href="https://github.com/ritumelroy"
              target="_blank"
            >
              <Text pr="sm">Github</Text>
              <GitHubLogoIcon />
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className="control"
              component="a"
              href="https://www.linkedin.com/in/ritu-melroy-b152b51b0/"
              target="_blank"
            >
              <Text pr="sm">LinkedIn</Text>
              <LinkedInLogoIcon />
            </Button>
          </Group>
        </div>
        <Box>
          <Image alt="hero_img" src="hero_img.svg" className="image " />
        </Box>
      </Flex>

      {/* <Box h="100%"> */}
      <Flex
        my="lg"
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm" }}
        justify="space-between"
        // className="border"
      >
        <Card withBorder radius="md" className="skills-outer">
          {/* <div className="img-center">
            <Image alt="code" src="code.svg" className="skills-imgs " />
          </div> */}
          <ActionIcon
            variant="default"
            className="skills-icon"
            ml="40%"
            mb="md"
            onClick={(event: { preventDefault: () => any }) =>
              event.preventDefault()
            }
          >
            <HeartFilledIcon className="skills-icon-inner" />
          </ActionIcon>

          <Text c="dimmed">
            Experience in: Python, Javascript, Typescript, C, C++, HTML, CSS,
            React, NextJS, ReactNative
          </Text>
        </Card>
        <Card withBorder radius="md" className="skills-outer">
          {/* <div className="img-center">
            <Image alt="art" src="art.svg" className="skills-imgs" />
          </div> */}
          <ActionIcon
            variant="default"
            className="skills-icon"
            ml="40%"
            mb="md"
            onClick={(event: { preventDefault: () => any }) =>
              event.preventDefault()
            }
          >
            <HeartFilledIcon className="skills-icon-inner" />
          </ActionIcon>

          <Text c="dimmed">
            I enjoy art, specifically illustration, photography and animation
            and continue to do so in my spare time.
          </Text>
        </Card>
        <Card withBorder radius="md" className="skills-outer">
          {/* <div className="img-center">
            <Image alt="writing" src="write.svg" className="skills-imgs " />
          </div> */}
          <ActionIcon
            variant="default"
            className="skills-icon"
            ml="40%"
            mb="md"
            onClick={(event: { preventDefault: () => any }) =>
              event.preventDefault()
            }
          >
            <HeartFilledIcon className="skills-icon-inner" />
          </ActionIcon>

          <Text c="dimmed">
            I love to read and write. These days, however, I do more reading
            that writing. I hope to get back into it soon!
          </Text>
        </Card>
      </Flex>

      {/* </Box> */}
    </Container>
  );
}
