import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: aniljangra27@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/aniljangra27",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anil-kumar-1462758/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@aniljangra27",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/1884714/anil-kumar",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          {socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={handleClick("projects")}>Projects</a> 
              <a onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;