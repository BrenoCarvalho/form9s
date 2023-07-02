/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@chakra-ui/react";

type Props = {
  props?: any;
  children?: string | JSX.Element | JSX.Element[];
};

const Page = ({ props, children }: Props) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      align="center"
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Page;
