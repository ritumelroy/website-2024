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
} from "@mantine/core";

// import { getGradient, useMantineTheme } from "@mantine/core";

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
            <Button radius="xl" size="md" className="control">
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className="control">
              Source code
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
          <div className="img-center">
            <Image alt="code" src="code.svg" className="skills-imgs " />
          </div>

          <Text c="dimmed">
            Experience in: Python, Javascript, Typescript, C, C++, HTML, CSS,
            React, NextJS, ReactNative
          </Text>
        </Card>
        <Card withBorder radius="md" className="skills-outer">
          <div className="img-center">
            <Image alt="art" src="art.svg" className="skills-imgs" />
          </div>

          <Text c="dimmed">
            I enjoy art, specifically illustration, photography and animation
            and continue to do so in my spare time.
          </Text>
        </Card>
        <Card withBorder radius="md" className="skills-outer">
          <div className="img-center">
            <Image alt="writing" src="write.svg" className="skills-imgs " />
          </div>

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
