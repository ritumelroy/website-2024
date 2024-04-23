"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Container,
  Group,
  Burger,
  Button,
  Stack,
  Text,
  Overlay,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ToggleThemeButton from "./ToggleThemeButton";
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from "./HeaderSimple.module.css";

export function HeaderSimple() {
  // const [isVisible, setIsVisible] = useState(false);
  // const ref = useRef<HTMLDivElement>(null);
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className="header ">
      <Container size="md" className="innerw">
        {/* <MantineLogo size={28} /> */}
        <div>Ritu Melroy</div>
        <Group gap={5} visibleFrom="xs">
          <Button
            variant="default"
            className="border-n"
            component={Link}
            href="/"
          >
            Home
          </Button>
          <Button
            variant="default"
            className="border-n"
            component={Link}
            href="/classes"
          >
            Classes
          </Button>
          <Button
            variant="default"
            className="border-n"
            component={Link}
            href="/projects"
          >
            Projects
          </Button>
          <Button
            variant="default"
            className="border-n"
            component={Link}
            href="/about"
          >
            About
          </Button>
          <ToggleThemeButton />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>

      {opened ? (
        <Container hiddenFrom="md">
          <Stack
            h={300}
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="flex-start"
            gap="xs"
            py="xs"
            className="test-stack"
          >
            {/* <Overlay> */}
            <Button
              fullWidth
              variant="filled"
              color="#495057"
              component={Link}
              href="/"
            >
              Home
            </Button>
            <Button
              fullWidth
              variant="filled"
              color="#495057"
              component={Link}
              href="/classes"
            >
              Classes
            </Button>
            <Button
              fullWidth
              variant="filled"
              color="#495057"
              component={Link}
              href="/projects"
            >
              Projects
            </Button>
            <Button
              fullWidth
              variant="filled"
              color="#495057"
              component={Link}
              href="/about"
            >
              About
            </Button>
            {/* </Overlay> */}
          </Stack>
        </Container>
      ) : (
        <></>
      )}
    </header>
  );
}
