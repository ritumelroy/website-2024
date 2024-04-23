"use client";

import {
  Card,
  Image,
  Text,
  Grid,
  Group,
  Badge,
  Button,
  ActionIcon,
  Title,
  Anchor,
} from "@mantine/core";

import { classesdata } from "@/data/classesData";
import ClassCard from "@/components/ClassCard";
import { HeaderSimple } from "@/components/HeaderSimple";
// import { Container, Grid } from "@mantine/core";
//   const { image, title, year, term, description, badges } = classesdata[0];
export default function Classes() {
  //   return <ClassCard />;
  return (
    <>
      <HeaderSimple />
      <Text px="7rem" pt="1rem" ta="center" c="dimmed">
        As a part of{" "}
        <Anchor
          href="https://www.handbook.unsw.edu.au/postgraduate/programs/2022/8543"
          target="_blank"
        >
          Master of Information Technology
        </Anchor>{" "}
        at UNSW Sydney.
      </Text>
      <Text px="7rem" pt="1rem" ta="center" c="dimmed">
        Expected to graduate on December 2024.
      </Text>
      <Grid px="7rem" py="2rem">
        {classesdata.map((data, k) => (
          <Grid.Col key={k} span={4}>
            {/* <Title>{data.term}</Title> */}
            <ClassCard
              status={data.status}
              title={data.title}
              year={data.year}
              term={data.term}
              description={data.description}
              badges={data.badges}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
