import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import CustomContainer from "../container";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box as="header" bg="primary.1">
      <CustomContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" color="white" fontSize="xl" py="1.8rem">
            CodeLeap Network
          </Heading>

          <Button variant="default" bg="primary.2" onClick={handleClick}>
            Logout
          </Button>
        </Flex>
      </CustomContainer>
    </Box>
  );
}

export default Header;
