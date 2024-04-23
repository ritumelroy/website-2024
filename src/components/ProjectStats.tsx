"use client";
import {
  Text,
  Card,
  RingProgress,
  Group,
  useMantineTheme,
  Badge,
} from "@mantine/core";
// import classes from "./StatsRingCard.module.css";

const stats = [
  { value: 1, label: "Remaining" },
  { value: 2, label: "In progress" },
];

export default function ProjectStats() {
  const theme = useMantineTheme();
  const completed = 1;
  const total = 4;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className="label">{stat.value}</Text>
      <Text size="sm" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card
      maw={{ base: "100%", md: "40%" }}
      withBorder
      p="md"
      radius="md"
      className="stat-card"
    >
      <div className="stat-inner">
        <div>
          <Text fz="xl" className="label">
            Project tasks
          </Text>
          <div>
            <Text className="lead" mt={30}>
              {completed}
            </Text>
            <Text fz="xs" c="dimmed">
              Completed
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className="ring">
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className="label">
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
      <Group pt="lg">
        <Badge>Frontend</Badge>
        <Badge>Backend</Badge>
        <Badge>Database</Badge>
      </Group>
    </Card>
  );
}
