"use client";

import { Box, Flex, Title } from "@mantine/core";
import { currProjects } from "@/data/currentProjectData";
import CurrentProjectCards from "./CurrentProjectCards";
export default function CurrentProject() {
  //   console.log(currProjects.length);
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      mt="xl"
      ml={{ base: "xs", md: "" }}
      gap={{ base: "xs", md: "sm" }}
    >
      {currProjects.map((proj, k) => (
        // console.log("hi");
        <CurrentProjectCards
          key={k}
          image={proj.images}
          title={proj.title}
          desc={proj.desc}
          status={proj.status}
          percentage={proj.percentage}
          deadline={proj.deadline}
          github={proj.github}
          website={proj.website}
          badges={proj.badges}
        />
      ))}
      {/* <Title>hi</Title> */}
    </Flex>
  );
}
