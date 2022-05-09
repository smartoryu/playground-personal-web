import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginPage from "../components/templates/login";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
            <LoginPage />
          </ModalBody>
        </ModalContent>
      </Modal>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by &nbsp;
          <Button onClick={onOpen} size="md">
            Login
          </Button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
