import { Box, Center, Heading, Text, View } from "native-base";
import React from "react";
import Colors from "../../../../helpers/Colors";

const OrderInfoScreen = ({ title, subTitle, text, icon }) => {
  return (
    <>
      <Center
        bg={Colors.white}
        w={200}
        h={150}
        py={2}
        rounded={10}
        shadow={4}
        mb={2}
        ml={5}
        mr={1}
        px={4}
      >
        <Center bg={Colors.main} w={60} h={60} rounded="full">
          {icon}
        </Center>
        <Heading
          bold
          fontSize={12}
          isTruncated
          mt={3}
          mb={2}
          color={Colors.black}
        >
          {title}
        </Heading>
        <Text fontSize={13} color={Colors.black}>
          {text}
        </Text>
      </Center>
    </>
  );
};
export default OrderInfoScreen;
