import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to ChatApp</Text>
        <Text>Connect with your friends and family.</Text>
        <Button as={Link} to="/login" colorScheme="teal" size="lg">Login</Button>
        <Button as={Link} to="/register" colorScheme="teal" size="lg">Register</Button>
      </VStack>
    </Container>
  );
};

export default Index;