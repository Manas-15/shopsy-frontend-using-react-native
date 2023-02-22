import { Image, Box, Text, Flex, HStack } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../helpers/Colors";

const Ratings = ({ value }) => {
  // const value = 1;
  const color = Colors.orange;
  return (
    <>
      <HStack alignItems="center" space={0.4} mt="1">
        <FontAwesome
          name={value >= 1 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
          color={color}
          fontSize="8"
        />
        <FontAwesome
          name={value >= 2 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
          color={color}
          fontSize="8"
        />
        <FontAwesome
          name={value >= 3 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
          color={color}
          fontSize="8"
        />
        <FontAwesome
          name={value >= 4 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
          color={color}
          fontSize="8"
        />
        <FontAwesome
          name={value >= 5 ? "star" : value >= 5.5 ? "star-half-o" : "star-o"}
          color={color}
          fontSize="8"
        />
      </HStack>
    </>
  );
};

export default Ratings;
