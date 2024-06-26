import { Box, Flex, Button, useColorModeValue, Stack, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>ChatApp</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button as={Link} to="/" variant={"link"}>Home</Button>
              <Button as={Link} to="/chat" variant={"link"}>Chat</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;