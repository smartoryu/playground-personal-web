import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  const username = "Playground";

  return (
    <Flex as="nav" className={styles.navbar}>
      <HStack flex={1}>
        <AspectRatio w="40px" ratio={1}>
          <Image src="logo.png" alt="playground-logo" />
        </AspectRatio>

        <Text fontSize={14} fontWeight={600}>
          Playground
        </Text>
      </HStack>

      <Center>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                bg={isOpen ? "white" : "#F5F6F8"}
                as={Button}
                leftIcon={
                  <Avatar
                    size="sm"
                    name={username}
                    src="https://bit.ly/broken-link"
                  />
                }
              >
                <VStack spacing={0} justify="left" align="left">
                  <Text align="left" fontSize={10} color="#5c5c5c">
                    Signed as
                  </Text>
                  <Text fontSize={14}>{username}</Text>
                </VStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Center>
    </Flex>
  );
};
