"use client";

import { CurrProjProps } from "@/models/card";
import {
  Badge,
  Card,
  Image,
  Text,
  Group,
  RingProgress,
  Box,
  Flex,
  ActionIcon,
  Button,
} from "@mantine/core";
// import { Carousel } from "@mantine/carousel";
// import classes from "./CardWithStats.module.css";

import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";

export default function CurrentProjectCards({
  image,
  title,
  desc,
  status,
  percentage,
  deadline,
  github,
  website,
  badges,
}: CurrProjProps) {
  return (
    <Card withBorder padding="lg" className="proj-2024-card" mb="3rem">
      <Card.Section>
        <Image alt="carousel-slide" src={image} height={220} />
      </Card.Section>

      <Group justify="space-between" mt="xl">
        <Text fz="sm" fw={700} className="proj-2024-title">
          {title}
        </Text>
        <Group>
          <Text fz="xs" c="dimmed">
            {percentage}% completed
          </Text>
          <RingProgress
            size={18}
            thickness={2}
            sections={[{ value: percentage, color: "blue" }]}
          />
        </Group>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {desc}
        {/* <SunIcon /> */}
      </Text>
      <Group gap="xs" mb="md">
        {badges.map((badge, k) => (
          <Badge key={k} variant="default">
            {badge}
          </Badge>
        ))}
      </Group>
      <Card.Section className="proj-2024-footer">
        <Flex justify="center" gap="xs">
          {github === "" ? (
            <></>
          ) : (
            <ActionIcon
              variant="filled"
              component="a"
              target="_blank"
              href={github}
              color="rgba(107, 116, 133, 1)"
              aria-label="Settings"
            >
              <GitHubLogoIcon />
            </ActionIcon>
          )}
          {website === "" ? (
            <></>
          ) : (
            <Button variant="default" size="xs">
              Live Webpage
              <OpenInNewWindowIcon />
            </Button>
          )}
          {deadline === "" ? (
            <></>
          ) : (
            <Text fz="xs" ta="center" c="dimmed">
              Deadline:{deadline}
            </Text>
          )}
          {/* <Badge
            variant="filled"
            color={
              status === "completed"
                ? "green"
                : status === "in-progress"
                ? "orange"
                : "red"
            }
          >
            {status}
          </Badge> */}
        </Flex>
      </Card.Section>
    </Card>
  );
}
