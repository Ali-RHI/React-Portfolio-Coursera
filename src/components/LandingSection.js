import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ali!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar url=" https://i.pravatar.cc/150?img=7 "></Avatar>
    <Text>{greeting}</Text>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
    
  
    
  </FullScreenSection>
);

export default LandingSection;
