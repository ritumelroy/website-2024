"use client";

import { pastProjects } from "@/data/pastProjects";
import { ActionIcon, Container, Image, Table, Title } from "@mantine/core";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";

export default function PastProjects() {
  const rows = pastProjects.map((project) => (
    <Table.Tr key={project.title}>
      <Table.Td>
        <Image
          radius="md"
          alt="proj"
          src={project.image}
          className="hide-mobile"
        />
      </Table.Td>
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
      <Table.Td>
        <ActionIcon
          color="grey"
          component="a"
          target="_blank"
          href={project.webpage}
        >
          <OpenInNewWindowIcon />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Title mb="md">Past simple projects</Title>
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
