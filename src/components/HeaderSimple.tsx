"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Container, Group, Burger, Button, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
        <div>Logo? Ritu Melroy</div>
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
          <Button variant="default" className="border-n">
            Projects
          </Button>
          <Button variant="default" className="border-n">
            About
          </Button>
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
            <Button fullWidth variant="default">
              hi
            </Button>
            <Button fullWidth variant="default">
              hi
            </Button>
          </Stack>
        </Container>
      ) : (
        <></>
      )}
    </header>
  );
}
