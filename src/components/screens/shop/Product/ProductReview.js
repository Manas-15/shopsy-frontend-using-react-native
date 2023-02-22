import { Box, Heading, Text } from "native-base";
import React from "react";
import Colors from "../../../../helpers/Colors";
import Message from "../../../shared/Message";
import Ratings from "../../../shared/Ratings";

const ProductReview = () => {
  return (
    <>
      <Box my={9}>
        <Heading fontSize={15} mb="2">
          Review
        </Heading>
        <Message
          color={Colors.main}
          bg={Colors.deepGray}
          size={11}
          bold
          children={"No Review"}
        />
        <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
          <Heading fontSize={15} color={Colors.black}>
            User Doe
          </Heading>
          <Ratings value={3} />
          <Text mb="3" fontSize={11}>
            Jan 02 2023
          </Text>
          <Message
            color={Colors.black}
            bg={Colors.white}
            size={11}
            children={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim"
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductReview;
