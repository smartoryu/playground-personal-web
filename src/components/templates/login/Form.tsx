import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { UilEye, UilEyeSlash, UilLock, UilUser } from "@iconscout/react-unicons";
import { useState } from "react";
import { Controller, FieldError, useForm } from "react-hook-form";
import { ILoginForm } from "../../../@types/login";

interface P {
  onSignIn: (data: ILoginForm) => void;
}

export default function LoginForm({ onSignIn }: P) {
  const [isShowing, setIsShowing] = useState(false);
  const toggleShowing = () => setIsShowing(!isShowing);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    defaultValues: {
      username: "",
      password: "",
      isRemember: false,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSignIn, console.log)}>
      <Stack mt={9} spacing={10}>
        <Controller
          control={control}
          name="username"
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <FormInput error={errors.username} leftIcon={UilUser}>
              <Input
                {...field}
                id="username"
                bg="white"
                color="#203060"
                onChange={(e) => field.onChange(e.target.value)}
                placeholder="Username"
                _placeholder={{ color: "#afafaf" }}
                type="text"
              />
            </FormInput>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <FormInput
              error={errors.password}
              leftIcon={UilLock}
              toggleShowing={toggleShowing}
              isShowing={isShowing}
            >
              <Input
                {...field}
                id="password"
                bg="white"
                color="#203060"
                onChange={(e) => field.onChange(e.target.value)}
                placeholder="Password"
                _placeholder={{ color: "#afafaf" }}
                type={isShowing ? "text" : "password"}
              />
            </FormInput>
          )}
        />

        <Controller
          control={control}
          name="isRemember"
          render={({ field }) => (
            <Checkbox
              color="#666666"
              isChecked={field.value}
              name={field.name}
              onChange={(e) => field.onChange(e.target.checked)}
            >
              Remember Me
            </Checkbox>
          )}
        />
      </Stack>

      <Flex>
        <Button
          flex={1}
          bg="#F35D5D"
          _hover={{ bg: "red.500" }}
          _active={{ bg: "red.600" }}
          color="#fff"
          mt="40px"
          type="submit"
        >
          Sign In
        </Button>
      </Flex>
    </form>
  );
}

interface IFormInput {
  children: React.ReactNode;
  error?: FieldError;
  isShowing?: boolean;
  leftIcon: any;
  toggleShowing?: () => void;
}
function FormInput({
  children,
  error,
  isShowing,
  leftIcon,
  toggleShowing,
}: IFormInput) {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={leftIcon} color={!!error ? "red.400" : "#203060"} />
        </InputLeftElement>
        {children}
        {toggleShowing && (
          <InputRightElement width="3.5rem">
            <Button h="1.75rem" size="sm" onClick={toggleShowing} variant="ghost">
              {isShowing ? <UilEye size={16} /> : <UilEyeSlash size={16} />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
