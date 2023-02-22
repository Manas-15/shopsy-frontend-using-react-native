import { FontAwesome } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState, useEffect } from "react";
import Colors from "../../../../helpers/Colors";
import ButtonOne from "../../../buttons/ButtonOne";
import { SwipeListView } from "react-native-swipe-list-view";
import axios from "axios";

const hiddenItem = () => (
  <Pressable
    w={50}
    roundedBottomRight={10}
    roundedTopRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

const CartItemList = () => {
  //   const [productData, setProductData] = useState([]);
  const productData = Array(20)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

  //   const URL = "https://fakestoreapi.com/products";
  //   useEffect(() => {
  //     axios.get(URL).then((resp) => {
  //       setProductData(resp.data);
  //     });
  //   }, []);
  return (
    <>
      <Box mr="6">
        <SwipeListView
          data={productData}
          renderItem={() => (
            <Pressable>
              <Box ml="6" mb="3">
                <HStack
                  alignItems="center"
                  bg={Colors.white}
                  shadow={1}
                  rounded={10}
                  overflow="hidden"
                >
                  <Center w="25%" color={Colors.deepGray}>
                    <Image
                      alt="cartImage"
                      source={require("../../../../../assets/shoes.png")}
                      w="full"
                      h={24}
                      resizeMode="contain"
                    />
                  </Center>
                  <VStack w="60%" px={2} space={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={10}>
                      Adidas shoes
                    </Text>
                    <Text color={Colors.lightBlack}>$ 40</Text>
                  </VStack>
                  <Center>
                    <Button
                      bg={Colors.main}
                      _pressed={{ bg: Colors.main }}
                      _text={{ color: Colors.white }}
                    >
                      5
                    </Button>
                  </Center>
                </HStack>
              </Box>
            </Pressable>
          )}
          renderHiddenItem={hiddenItem}
          rightOpenValue={-50}
          previewRowKey="0"
          previewOpenValue={-40}
          previewOpenDelay={3000}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </>
  );
};

export default CartItemList;
