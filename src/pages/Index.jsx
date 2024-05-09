import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaDumbbell } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="center">
        <Image src="https://images.unsplash.com/photo-1623874514711-0f321325f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGd5bXxlbnwwfHx8fDE3MTUyMzM1Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="CrossFit Gym" borderRadius="lg" boxSize="300px" objectFit="cover" />
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CrossFit Challenge
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join our community and push your limits with daily challenges!
        </Text>
        <Button rightIcon={<FaDumbbell />} colorScheme="teal" size="lg">
          Start Your Journey
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
