import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Box, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import Colors from "../../../../helpers/Colors";
import OrderInfoScreen from "./OrderInfoScreen";
import OrderItemScreen from "./OrderItemScreen";
import PlaceOrderModal from "./PlaceOrderModal";

const PlaceOrderScreen = () => {
  return (
    <>
      <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfoScreen
            title="COUSTMER"
            subTitle="AdminDoe"
            text="admin@.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfoScreen
            title="SHIPPING INFO"
            subTitle="Shipping: BBSR"
            text="Pay Method: Pay Pal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfoScreen
            title="DELIVERY TO"
            subTitle="Address: "
            text="Mancheswar "
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
        {/* Order Item */}

        <Box>
          <Heading>PRODUCTS</Heading>
          <OrderItemScreen />
          <PlaceOrderModal />
        </Box>
      </Box>
    </>
  );
};
export default PlaceOrderScreen;
