import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../../../../helpers/Colors";
import ButtonOne from "../../../buttons/ButtonOne";

const ShippingInputs = [
  { label: "ENTER CITY", type: "text", placeholder: "Enter city" },
  { label: "ENTER COUNTRY", type: "text", placeholder: "Enter country" },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
    placeholder: "Enter postal code",
  },
  { label: "ENTER ADDRESS", type: "text", placeholder: "Enter address" },
];

const ShippingScreen = () => {
  return (
    <>
      <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
        {/* Header */}
        <Center pb={15}>
          <Text color={Colors.white}>DELIVERY ADDRESS</Text>
        </Center>
        {/* Inputs */}
        <Box bg={Colors.white} px={5} h="full">
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack mt={5} space={6}>
              {ShippingInputs.map((input, index) => (
                <FormControl key={index}>
                  <FormControl.Label
                    _text={{
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {input.label}
                  </FormControl.Label>
                  <Input
                    placeholder={input.placeholder}
                    borderColor={Colors.main}
                    bg={Colors.subGreen}
                    borderWidth={0.2}
                    py={4}
                    type={input.type}
                    color={Colors.main}
                    _focus={{
                      bg: Colors.subGreen,
                      borderWidth: 1,
                      borderColor: Colors.main,
                    }}
                  />
                </FormControl>
              ))}
              <ButtonOne color={Colors.white} bg={Colors.main} mt={10}>
                COUNTINUE
              </ButtonOne>
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </>
  );
};
export default ShippingScreen;
