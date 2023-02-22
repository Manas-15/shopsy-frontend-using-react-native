import { Box, Button, HStack, ScrollView, Text, View } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../../helpers/Colors";

const Orders = () => {
  return (
    <>
      <Box h="full" bg={Colors.white} pt={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Paid order */}
          <Pressable>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
              bg={Colors.deepGray}
              py={5}
              px={2}
            >
              <Text isTruncated color={Colors.blue} fontSize={9}>
                4564564654546
              </Text>
              <Text color={Colors.black} fontSize={12} bold>
                PAID
              </Text>
              <Text italic color={Colors.black} fontSize={11}>
                Dec 12 2022
              </Text>
              <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.main}
                _text={{
                  color: Colors.white,
                }}
                _pressed={{ bg: Colors.main }}
              >
                $ 21
              </Button>
            </HStack>
          </Pressable>
          {/* Not Paid */}
          <Pressable>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
              // bg={Colors.deepGray}
              py={5}
              px={2}
            >
              <Text isTruncated color={Colors.blue} fontSize={9}>
                4564564654546
              </Text>
              <Text color={Colors.black} fontSize={12} bold>
                NOT PAID
              </Text>
              <Text italic color={Colors.black} fontSize={11}>
                Dec 12 2022
              </Text>
              <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.red}
                _text={{
                  color: Colors.white,
                }}
                _pressed={{ bg: Colors.main }}
              >
                $ 21
              </Button>
            </HStack>
          </Pressable>
        </ScrollView>
      </Box>
    </>
  );
};
export default Orders;
