import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Anil!";
const bio1 = "A frontend enthusiast and a passionate developer";
const bio2 = "specialised in AEM, React and Node.js";

const LandingSectionContent = () => (
  <VStack spacing={4}>
    <Avatar size="xl" src="https://i.pravatar.cc/150?img=2" />
    <Heading as="h1" size="xl">{greeting}</Heading>
    <Heading as="h2" size="md">{bio1}</Heading>
    <Heading as="h2" size="md">{bio2}</Heading>
  </VStack>
);

function LandingSection() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
{LandingSectionContent()}
    </FullScreenSection>
  );
}

export default LandingSection;
