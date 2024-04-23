"use client";

import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
} from "@mantine/core";
import { ClassCardProps } from "@/models/card";
import { Key } from "react";

export default function ClassCard({
  status,
  title,
  year,
  term,
  description,
  badges,
}: ClassCardProps) {
  const features = badges.map(
    (badge: { label: Key | null | undefined; emoji: any }) => (
      <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
        {badge.label}
      </Badge>
    )
  );

  return (
    <Card withBorder radius="md" p="md" className="card">
      <Card.Section className="section" mt="md" h={{ base: "", md: "17rem" }}>
        <Text fz="lg" fw={500} pb="sm">
          {title}
        </Text>
        <Group justify="apart" pb="sm">
          <Badge size="sm" variant="light">
            {year}
          </Badge>
          <Badge size="sm" variant="light">
            {term}
          </Badge>
          {status === "complete" ? (
            <Badge size="sm" color="green">
              {status}
            </Badge>
          ) : status === "in-progress" ? (
            <Badge size="sm" color="yellow">
              {status}
            </Badge>
          ) : (
            <Badge size="sm" color="pink">
              {status}
            </Badge>
          )}
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className="section">
        <Text mt="md" className="label" c="dimmed">
          Skills/Tech
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>
    </Card>
  );
}
