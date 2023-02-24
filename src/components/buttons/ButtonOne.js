import { Button } from "native-base";

const ButtonOne = ({ width, mt, bg, color, onPress, children }) => {
  return (
    <>
      <Button
        w={width}
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
