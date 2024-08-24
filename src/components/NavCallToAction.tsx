import { Box, Image, Text } from "@chakra-ui/react";

const NavCallToAction = () => {
  return (
    <>
      <Box display="flex" gap="200px" alignItems="center">
        <Image src="/pngegg (3).png" width="100px" height="70px"></Image>
        <Box display="flex" alignItems="center" gap="15px">
          <Image src="/waIcon.png" width="50px" height="50px"></Image>
          <Text>Quiero Mi Cita</Text>
        </Box>
      </Box>
    </>
  );
};

export default NavCallToAction;
