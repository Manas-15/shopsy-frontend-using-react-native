import { FontAwesome } from "@expo/vector-icons";
import { Box, Button, Center, HStack, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../../../helpers/Colors";
import CartEmpty from "./CartEmpty";
import CartItemList from "./CartItemList";
import ButtonOne from "../../../buttons/ButtonOne";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../redux/actions/cart.actions";

const CartScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const product = route.params;

  const allCartItems = useSelector((state) => state.allCartProducts);

  const userDetails = useSelector((state) => state?.user);

  useEffect(() => {
    const userId = userDetails.user?.data?.user?._id;
    const productId = product.id;
    const formData = { userId, productId };

    dispatch(cartActions.addProduct(product));
  }, [product]);

  return (
    <>
      <Box flex={1} safeAreaTop bg={Colors.subGreen}>
        <Center w="full" py="5">
          <Text color={Colors.black} bold fontSize={20}>
            Cart
          </Text>
        </Center>
        {/* If cart is empty */}
        {/* <CartEmpty /> */}
        {/* If cart item available */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItemList />
          <Center mt={5} mb={5}>
            <HStack
              justifyContent="space-between"
              rounded={50}
              bg={Colors.white}
              shadow={2}
              w="90%"
              pl={5}
              h={45}
              alignItems="center"
            >
              <Text>Total</Text>
              <Button
                bg={Colors.main}
                rounded={50}
                h={45}
                px={10}
                _text={{ color: Colors.white, fontWeight: "semibold" }}
                _pressed={{ bg: Colors.main }}
              >
                $ 450
              </Button>
            </HStack>
          </Center>
          <Center px={5} mb={5}>
            <ButtonOne
              onPress={() => navigation.navigate("Shipping")}
              mt={10}
              bg={Colors.black}
              color={Colors.white}
            >
              CHECKOUT
            </ButtonOne>
          </Center>
        </ScrollView>
      </Box>
    </>
  );
};

export default CartScreen;
