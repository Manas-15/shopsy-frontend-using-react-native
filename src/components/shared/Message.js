import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../../helpers/Colors";

const Message = ({ bg, color, size, bold, children }) => {
  return (
    <>
      <Center bg={bg} p={4} rounded={5}>
        <Text color={color} fontSize={size} bold={bold}>
          {children}
        </Text>
      </Center>
    </>
  );
};

export default Message;
