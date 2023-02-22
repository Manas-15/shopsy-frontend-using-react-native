import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../../../../helpers/Colors";
import ButtonOne from "../../../buttons/ButtonOne";

const PaymentMethod = [
  { img: "image1", alt: "paypal", icon: "Ionicons" },
  { img: "image2", alt: "phonepay", icon: "fontAwesome" },

  { img: "image3", alt: "googlepay", icon: "fontAwesome" },
];

const PaymentScreen = () => {
  return (
    <>
      <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
        {/* Header */}
        <Center pb={15}>
          <Text color={Colors.white}>SELECT PAYMENT METHOD</Text>
        </Center>
        {/* Selection */}
        <Box bg={Colors.white} px={5} h="full">
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack mt={5} space={6}>
              {PaymentMethod.map((payment, index) => (
                <HStack
                  kay={index}
                  alignItems="center"
                  bg={Colors.white}
                  px={3}
                  py={1}
                  rounded={10}
                  justifyContent="space-between"
                >
                  <Box>
                    <Image
                      alt={payment.alt}
                      source={require("../../../../../assets/shoes.png")}
                      resizeMode="contain"
                      w={60}
                      h={50}
                    />
                  </Box>
                  {payment.icon === "Ionicons" ? (
                    <Ionicons
                      name="checkmark-circle"
                      size={30}
                      color={Colors.main}
                    />
                  ) : (
                    <FontAwesome
                      name="circle-thin"
                      size={30}
                      color={Colors.main}
                    />
                  )}
                </HStack>
              ))}

              <ButtonOne color={Colors.white} bg={Colors.main} mt={10}>
                COUNTINUE
              </ButtonOne>
              <Text italic textAlign="center">
                Payment method is <Text bold>Paypal</Text> by default
              </Text>
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </>
  );
};
export default PaymentScreen;
