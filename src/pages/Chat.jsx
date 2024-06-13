import { Container, VStack, Input, Button, Box, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md" mt={10}>
        <Box width="100%" height="400px" border="1px solid" borderColor="gray.200" borderRadius="md" overflowY="scroll" p={4}>
          {messages.map((msg, index) => (
            <HStack key={index} justify={msg.sender === "You" ? "flex-end" : "flex-start"}>
              <Box bg={msg.sender === "You" ? "teal.100" : "gray.100"} p={2} borderRadius="md">
                <Text>{msg.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
          <Button onClick={handleSend} colorScheme="teal">Send</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Chat;