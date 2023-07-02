import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Page from "../components/Page";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";

type Question = {
  index: number;
  text: string;
  relations: number[];
};

type S = {
  name: string;
  description: string;
  pontuation: number;
};

const questions: Question[] = [
  {
    index: 1,
    text: "Sofre cansaço ou debilidade geral?",
    relations: [1, 0, 1, 0, 1, 0, 0, 1, 0],
  },
  {
    index: 2,
    text: "Fica doente facilmente?",
    relations: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  },
  {
    index: 3,
    text: "Possui mal odor corporal ou mau hálito?",
    relations: [1, 1, 0, 0, 0, 1, 1, 0, 0],
  },
  {
    index: 4,
    text: "Tem problema com a digestão de certos alimentos?",
    relations: [1, 0, 0, 0, 1, 0, 0, 0, 0],
  },
  {
    index: 5,
    text: "Ingere carnes vermelhas com frequência?",
    relations: [0, 1, 1, 0, 0, 0, 1, 0, 0],
  },
];

const allS = [
  {
    name: "S1",
    description: "Sistema Digestivo",
    pontuation: 0,
  },
  {
    name: "S2",
    description: "Sistema Intestinal",
    pontuation: 0,
  },
  {
    name: "S3",
    description: "Sistema Circulatório",
    pontuation: 0,
  },
  {
    name: "S4",
    description: "Sistema Nervoso",
    pontuation: 0,
  },
  {
    name: "S5",
    description: "Sistema Imunológico",
    pontuation: 0,
  },
  {
    name: "S6",
    description: "Sistema Respiratório",
    pontuation: 0,
  },
  {
    name: "S7",
    description: "Sistema Urinário",
    pontuation: 0,
  },
  {
    name: "S8",
    description: "Sistema Glandular",
    pontuation: 0,
  },
  {
    name: "S9",
    description: "Sistema Estrutural",
    pontuation: 0,
  },
];

const Result = (result: S[]) => (
  <Flex
    direction="column"
    mt="20px"
    w="100%"
    maxW="900px"
    h="100%"
    overflowY="scroll"
    align="center"
    gap="2"
    css={{
      "&::-webkit-scrollbar": {
        display: "none",
      },
    }}
  >
    {result?.map((item, index) => (
      <>
        <Flex
          direction="column"
          textAlign="center"
          border="1px"
          borderColor="gray"
          shadow="lg"
          borderRadius="8px"
          padding="2"
          bgColor="#f6fce0"
          w="100%"
        >
          <Text>{`${item.name} (${item.description})`}</Text>
          <Text fontWeight="bold">{item.pontuation}</Text>
        </Flex>
        {index === result.length - 1 ? (
          <Flex
            w="100%"
            direction="column"
            align="center"
            justifyContent="center"
            mb="40px"
            mt="18px"
          >
            <Divider w="90%" mb="20px" />
            <Button
              bgColor="#0e5332"
              shadow="md"
              w="180px"
              color="white"
              _hover={{ bgColor: "#17392b" }}
              gap="1"
              justifyContent="center"
              alignItems="center"
              onClick={() => (window.location.href = "/")}
            >
              Voltar ao início
            </Button>
          </Flex>
        ) : null}
      </>
    ))}
  </Flex>
);

const FormPage = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [s, setS] = useState<S[]>(allS);
  const [formIsCompleted, setFormIsCompleted] = useState(false);

  const next = (answer: boolean) => {
    console.log(questionIndex);

    setQuestionIndex(questionIndex + 1);

    if (answer) {
      const updatedS = s;

      s?.map((value, index) => {
        if (questions[questionIndex]?.relations[index] === 1) {
          updatedS[index] = { ...value, pontuation: value.pontuation + 1 };
        }
      });

      setS(updatedS);
    }

    if (questionIndex >= questions?.length - 1) {
      setFormIsCompleted(true);
    }
  };

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
        paddingBottom="0"
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
        <Divider w="25%" mt="20px" mb="5px" bgColor="#000" />

        {formIsCompleted ? (
          Result(s)
        ) : (
          <Flex
            w="100%"
            maxW="900px"
            align="center"
            direction="column"
            bgColor="#f6fce0"
            mt="30px"
            padding="4"
            borderRadius="8px"
            shadow="lg"
          >
            <Flex
              w="100%"
              bgColor="#0e5332"
              color="white"
              shadow="lg"
              padding="6"
              borderRadius="8px"
            >
              <Text>
                {`${questions[questionIndex]?.index}. ` +
                  questions[questionIndex]?.text}
              </Text>
            </Flex>
            <Flex w="100%" mt="15px" justifyContent="space-between">
              <Button
                bgColor="#0e5332"
                shadow="md"
                color="white"
                _hover={{ bgColor: "#17392b" }}
                gap="1"
                justifyContent="center"
                alignItems="center"
                w="130px"
                onClick={() => next(false)}
              >
                <AiFillDislike fontSize="24px" />
                Não
              </Button>
              <Button
                bgColor="#0e5332"
                shadow="md"
                color="white"
                _hover={{ bgColor: "#17392b" }}
                gap="1"
                justifyContent="center"
                alignItems="center"
                w="130px"
                onClick={() => next(true)}
              >
                <AiFillLike fontSize="24px" />
                Sim
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Page>
  );
};

export default FormPage;
