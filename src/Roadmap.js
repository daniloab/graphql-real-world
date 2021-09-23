import React from "react";
import { Flex, Text } from "rebass";
import { Root } from "./Intro";

export const Roadmap = () => (
  <Root>
    <Flex></Flex>
    <Flex flexDirection={"column"}>
      <Text>GraphQL</Text>
      <Text>What GraphQL Solves</Text>
      <Text>Backend</Text>
      <Text>Types</Text>
      <Text>SDL First vs Code First</Text>
      <Text>GraphQL Services BaaS</Text>
      <Text>Testing</Text>
      <Text>Frontend</Text>
      <Text>Frameworks</Text>
      <Text>Testing</Text>
    </Flex>
  </Root>
);
