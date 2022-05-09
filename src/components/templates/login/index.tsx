import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import LoginForm from "./Form";
import LoginHeader from "./Header";

const LoginPage: NextPage = () => {
  const router = useRouter();

  return (
    <Flex>
      <Box p={100} w={600} bg="#F6F6F6">
        <LoginHeader />

        <LoginForm
          onSignIn={(data) => {
            console.log("LOGIN FORM:", data);
            router.push("/home");
          }}
        />
      </Box>

      <Center p="80px" flex="1" bg="#FFF7F5">
        <VStack>
          <Image src="bg-login.jpg" alt="bg-art" />
          <Text>
            <Link href="https://www.vecteezy.com/free-vector/geometric">
              Geometric Vectors by Vecteezy
            </Link>
          </Text>
        </VStack>
      </Center>
    </Flex>
  );
};

export default LoginPage;
