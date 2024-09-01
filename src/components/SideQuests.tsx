"use client";

import { pastProjects } from "@/data/sideQuestsData";
import { ActionIcon, Container, Text, Table, Title } from "@mantine/core";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";

export default function SideQuests() {
  const rows = pastProjects.map((project) => (
    <Table.Tr key={project.title}>
      {/* <Table.Td>
        <Image
          radius="md"
          alt="proj"
          src={project.image}
          className="hide-mobile"
        />
      </Table.Td> */}
      <Table.Td>{project.title}</Table.Td>
      <Table.Td>{project.desc}</Table.Td>
      <Table.Td>
        <ActionIcon
          color="grey"
          component="a"
          target="_blank"
          href={project.github}
        >
          <GitHubLogoIcon />
        </ActionIcon>
      </Table.Td>
      {/* <Table.Td>
        <ActionIcon
          color="grey"
          component="a"
          target="_blank"
          href={project.webpage}
        >
          <OpenInNewWindowIcon />
        </ActionIcon>
      </Table.Td> */}
    </Table.Tr>
  ));

  return (
    <Container>
      <Title mb="md">Side Quests!</Title>

      <Text mb="md">
        These are some side projects I did during my full-time degree program
        was ongoing. These are simple weekend projects (especially when weekends
        are short during a term ..) that I did to either expand my understanding
        of the class material or just to test my abilities
      </Text>

      <Table>
        <Table.Thead>
          <Table.Tr>
            {/* <Table.Th>Image</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>GithubLink</Table.Th>
            <Table.Th>Webpage Link</Table.Th> */}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
