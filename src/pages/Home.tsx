import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Page from "../components/Page";

function HomePage() {
  return (
    <Page>
      <Flex
        w="100%"
        h="100vh"
        direction="column"
        align="center"
        bgImage="bg2.jpg"
        bgSize="cover"
        bgPosition="center"
        padding="6"
      >
        <Image src="favicon.png" w="25%" maxW="135px" />
        <Text
          color="#0e5332"
          fontWeight="bold"
          fontSize="5xl"
          lineHeight="1"
          textAlign="center"
        >
          Programa Nutricional
          <Text fontSize="3xl" mt="2px">
            & Estilo de Vida
          </Text>
        </Text>
        <Text
          mt="30px"
          color="gray"
          fontSize="18px"
          maxW="800px"
          textAlign="center"
        >
          Este é um método simples e prático para uma avaliação preventiva de
          sua condição física e seu estilo de vida.
        </Text>
        <Divider w="25%" mt="20px" mb="5px" bgColor="#000" />
        <Button
          w="180px"
          bgColor="#0e5332"
          mt="30px"
          shadow="md"
          color="white"
          _hover={{ bgColor: "#17392b" }}
          onClick={() => (window.location.href = "/formulario")}
        >
          Iniciar
        </Button>
      </Flex>
    </Page>
  );
}

export default HomePage;
