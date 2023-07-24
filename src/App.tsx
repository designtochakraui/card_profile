import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import imgCard from "./assets/card_bg.avif";

function App() {
  return (
    <HStack w="full" h="100vh" justifyContent="center">
      <Card
        maxW={236}
        w="full"
        h={315}
        variant="outline"
        bgImage={imgCard}
        bgPosition="-110px -140px"
        bgSize="450px"
        bgRepeat="no-repeat"
        justifyContent="end"
      >
        <Box
          w="100%"
          bgGradient="linear(134deg, rgba(0, 0, 0, 0.70) 0.86%, rgba(0, 0, 0, 0.21) 100%)"
          backdropFilter="blur(2px)"
          borderRadius={7}
        >
          <CardBody>
            <Text fontSize="larger" fontWeight="bold" color="white">
              Design2ChakraUi
            </Text>
            <Text fontSize="sm" color="white">
              Front-end developer
            </Text>

            <Flex
              mt={2}
              w="full"
              justifyContent="space-between"
              alignItems="end"
            >
              <List spacing={1}>
                <ListItem
                  color="white"
                  fontSize="xs"
                  display="flex"
                  alignItems="center"
                >
                  <ListIcon as={FaGithub} />
                  Followers{" "}
                  <Text ml={1} color="teal.500" fontWeight="bold">
                    50k
                  </Text>
                </ListItem>
                <ListItem
                  color="white"
                  fontSize="xs"
                  display="flex"
                  alignItems="center"
                >
                  <ListIcon as={FaYoutube} />
                  Subscribers{" "}
                  <Text ml={1} color="teal.500" fontWeight="bold">
                    1k
                  </Text>
                </ListItem>
              </List>
              <Button colorScheme="teal" size="xs">
                View
              </Button>
            </Flex>
          </CardBody>
        </Box>
      </Card>
    </HStack>
  );
}

export default App;
