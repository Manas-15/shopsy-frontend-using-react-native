import { FontAwesome } from "@expo/vector-icons";
import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../../../../helpers/Colors";
import ButtonOne from "../../../buttons/ButtonOne";

const CartEmpty = () => {
  return (
    <>
      <Box flex={1} px="4">
        <Center h="90%">
          <Center w={200} h={200} bg={Colors.white} rounded="full">
            <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
          </Center>
          <Text color={Colors.main} bold mt="5">
            Cart is Empty
          </Text>
        </Center>
        <ButtonOne color={Colors.white} bg={Colors.black}>
          START SHOPPING
        </ButtonOne>
      </Box>
    </>
  );
};

export default CartEmpty;
