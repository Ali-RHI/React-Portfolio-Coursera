import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack overflow="hidden" backgroundColor="white" borderRadius={15} spacing={5} cursor={"pointer"}>
      <Image
        width="-webkit-fill-available"
        src={imageSrc}
        borderRadius={15}
      ></Image>
      <Text alignSelf="flex-start" color="black" fontWeight={600} paddingInline={10}>
        {title}
      </Text>
      <Text color="black" paddingInline={10}>{description}</Text>
      <HStack alignSelf="flex-start" paddingInline={10} marginBottom={5}>
        <Text color="black">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
