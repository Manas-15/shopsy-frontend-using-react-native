import { Box, Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../../../helpers/Colors";
import Tabs from "./Tabs";

const ProfileScreen = () => {
  return (
    <>
      <Center pt={10} pb={6} bg={Colors.main}>
        <Image
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          source={require("../../../../assets/shoes.png")}
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      <Tabs />
    </>
  );
};

export default ProfileScreen;
