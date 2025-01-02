import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={4}
      p={4}
      align="start"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Text color="teal.500">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} color="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
