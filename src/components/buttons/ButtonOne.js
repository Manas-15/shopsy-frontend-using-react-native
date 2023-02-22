import { Button } from "native-base";

const ButtonOne = ({ mt, bg, color, onPress, children }) => {
  return (
    <>
      <Button
        w="full"
        h={55}
        mt={mt}
        rounded="full"
        bg={bg}
        _text={{ color: color, fontWeight: "bold" }}
        _pressed={{ bg: bg }}
        onPress={onPress}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonOne;
