import { Text, Box, Center, VStack, Image } from "native-base";
import React from "react";
import Colors from "../../../helpers/Colors";
import ButtonOne from "../../buttons/ButtonOne";

const NotVerifyScreen = () => {
  return (
    <>
      <Box flex={1} color={Colors.main} safeAreaTop>
        <Center w="full" h={250}>
          <Image
            alt="logo"
            size="lg"
            source={require("../../../../assets/favicon.png")}
          />
        </Center>
        <VStack space={6} px={5} alignItems="center">
          <ButtonOne color={Colors.white} bg={Colors.black}>
            REGISTER
          </ButtonOne>
          <ButtonOne color={Colors.white} bg={Colors.black}>
            LOGIN
          </ButtonOne>
        </VStack>
      </Box>
    </>
  );
};

export default NotVerifyScreen;
