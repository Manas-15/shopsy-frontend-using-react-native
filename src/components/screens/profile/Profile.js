import {
  Box,
  Text,
  View,
  ScrollView,
  VStack,
  FormControl,
  Input,
} from "native-base";
import React from "react";
import Colors from "../../../helpers/Colors";
import ButtonOne from "../../buttons/ButtonOne";

const Inputs = [
  { label: "USERNAME", type: "text", placeholder: "username" },
  { label: "EMAIL", type: "email", placeholder: "email" },
  { label: "PASSWORD", type: "password", placeholder: "password" },
];

const Profile = () => {
  return (
    <>
      <Box w="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={10} mt={5} pb={5}>
            {Inputs.map((input, index) => (
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
                  borderWidth={0.5}
                  bg={Colors.subGreen}
                  borderColor={Colors.main}
                  py={2}
                  type={input.type}
                  placeholder={input.placeholder}
                  color={Colors.main}
                  fontSize={20}
                  _focus={{
                    bg: Colors.subGreen,
                    borderColor: Colors.main,
                    borderWidth: 1,
                  }}
                />
              </FormControl>
            ))}
            <ButtonOne color={Colors.white} bg={Colors.main}>
              UPDATE PROFILE
            </ButtonOne>
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
};
export default Profile;
