import { AspectRatio, HStack, Image, Stack, Text } from "@chakra-ui/react";

export default function LoginHeader() {
  return (
    <Stack>
      <HStack>
        <AspectRatio w="60px" ratio={1}>
          <Image src="logo.png" alt="playground-logo" />
        </AspectRatio>

        <Text fontSize={32} fontWeight={600}>
          Playground
        </Text>
      </HStack>
      <Text fontSize={62} fontWeight={700}>
        Sign Into
      </Text>
      <Text fontSize={30} fontWeight={700}>
        Your Account
      </Text>
    </Stack>
  );
}
