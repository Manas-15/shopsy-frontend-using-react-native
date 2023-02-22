import {
  Text,
  Box,
  Flex,
  ScrollView,
  Pressable,
  Image,
  Heading,
} from "native-base";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Colors from "../../../../helpers/Colors";
import Ratings from "../../../shared/Ratings";
import { useNavigation } from "@react-navigation/native";

const HomeProducts = () => {
  const navigation = useNavigation();
  const [productData, setProductData] = useState([]);
  const URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios.get(URL).then((resp) => {
      setProductData(resp.data);
    });
  }, []);
  return (
    <>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px="6"
        >
          {productData.map((product) => (
            <Pressable
              onPress={() => navigation.navigate("ProductDetail", product)}
              key={product.id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt="0.3"
              my="3"
              pb="2"
              overflow="hidden"
            >
              <Image
                source={{ uri: product.image }}
                alt={product.title}
                w="full"
                h="24"
                resizeMode="contain"
              />
              <Box px="4" pt="1">
                <Heading fontSize="13" bold>
                  $ {product.price}
                </Heading>
                <Text fontSize="12" mt="1" isTruncated w="full">
                  {product.title}
                </Text>

                <Ratings value={product.rating.rate} />
              </Box>
            </Pressable>
          ))}
        </Flex>
      </ScrollView>
    </>
  );
};

export default HomeProducts;
