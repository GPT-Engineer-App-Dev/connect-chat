import { useForm } from "react-hook-form";
import { Container, VStack, Input, Button, FormControl, FormLabel, FormErrorMessage, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required"),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md" mt={10}>
        <Heading>Register</Heading>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" {...register("confirmPassword")} />
              <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">Register</Button>
          </VStack>
        </form>
        <Button as={Link} to="/login" colorScheme="teal" variant="link">Already have an account? Login</Button>
      </VStack>
    </Container>
  );
};

export default Register;