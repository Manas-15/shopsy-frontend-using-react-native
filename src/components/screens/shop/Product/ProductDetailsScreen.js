import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import Colors from "../../../../helpers/Colors";
import Ratings from "../../../shared/Ratings";
import NumericInput from "react-native-numeric-input";
import ButtonOne from "../../../buttons/ButtonOne";
import ProductReview from "./ProductReview";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const product = route.params;
  return (
    <>
      <Box safeAreaTop={10} flex={1} bg={Colors.white}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image
            alt="productdeatils"
            w="full"
            h={300}
            resizeMode={"contain"}
            source={{ uri: product.image }}
          />
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
            {product.title}
          </Heading>
          <Ratings value={product.rating.rate} />
          <HStack space={2} alignItems="center" py={5}>
            <NumericInput
              value={quantity}
              onChange={setQuantity}
              totalWidth={140}
              totalHeight={35}
              iconSize={30}
              step={1}
              maxValue={product.rating.count}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
            <Spacer />
            <Heading fontSize="19">$ {product.price}</Heading>
          </HStack>
          <Text fontSize={14} lineHeight={22}>
            {product.description}
          </Text>
          <ButtonOne
            onPress={() => navigation.navigate("Cart")}
            color={Colors.white}
            bg={Colors.main}
            mt="2"
          >
            ADD TO CART
          </ButtonOne>
          <ProductReview />
        </ScrollView>
      </Box>
    </>
  );
};

export default ProductDetailScreen;
