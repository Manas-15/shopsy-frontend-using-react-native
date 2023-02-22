import { Box, Center, HStack, Modal, Text, VStack } from "native-base";
import React, { useState } from "react";
import Colors from "../../../../helpers/Colors";
import ButtonOne from "../../../buttons/ButtonOne";

const OrderInfos = [{ title: "Products", price: "125.77", color: "black" }];

const PlaceOrderModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Center>
        <ButtonOne
          onPress={() => setShowModal(true)}
          bg={Colors.black}
          color={Colors.white}
          mt={5}
        >
          SHOW TOTAL
        </ButtonOne>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <Modal.Content maxWidth={350}>
            {/* <Modal.CloseButton /> */}
            <Modal.Header>Order</Modal.Header>
            <Modal.Body>
              <VStack space={7}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Products</Text>
                  <Text color={Colors.black} bold fontSize={14}>
                    $ 234.68
                  </Text>
                </HStack>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Center>
    </>
  );
};

export default PlaceOrderModal;
