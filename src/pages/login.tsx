import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import LoginPage from "../components/templates/login";

const Login: NextPage = () => {
  return (
    <Box m={0} p="1rem">
      <Head>
        <title>Login</title>
        <meta name="description" content="Login on Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginPage />
    </Box>
  );
};

export default Login;
