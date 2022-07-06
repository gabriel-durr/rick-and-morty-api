import {
    Box,
    Badge,
    Image,
    Icon,
    Flex,
    useColorMode,
    Text,
} from "@chakra-ui/react";

import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/react";

import { WarningTwoIcon } from "@chakra-ui/icons";
import "@fontsource/creepster/400.css";
import "@fontsource/open-sans/400.css";

export function Card<T>(props: T | any) {
    const { colorMode } = useColorMode();

    return (
        <Box
            color={colorMode == "light" ? "white" : "black"}
            bgColor={colorMode == "light" ? "gray.800" : "azure"}
            maxW="22rem"
            h="max"
            borderWidth="medium"
            borderRadius="full"
            overflow="hidden"
            boxShadow="2xl"
            p="1"
            rounded="md"
        >
            <Flex p={2} justifyContent="center">
                <Image
                    src={props.avatar}
                    alt={props.imageAlt}
                    width="full"
                    h="52"
                    borderRadius={5}
                />
            </Flex>
            <Box
                mt="1"
                fontWeight="extrabold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
                fontSize="3xl"
                color={colorMode == "light" ? " #ffffffb9" : "#000000d3"}
                textAlign="center"
                boxShadow="0px 0px 40px 01px #448C3F"
                fontFamily="open-sans"
            >
                {props.title}
            </Box>

            <Box p="4">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <Badge
                        hidden={props.life == false}
                        bg="blackAlpha.300"
                        borderRadius="8"
                        colorScheme="teal"
                        color="red"
                        fontWeight="extrabold"
                        textAlign="center"
                        padding={1}
                        pl={2}
                    >
                        {props.life && "is dead"}
                        <Icon
                            textAlign="right"
                            fontSize="15"
                            marginLeft={1}
                            marginBottom={1}
                            as={WarningTwoIcon}
                            color={props.life && "greenyellow"}
                            fontWeight="extrabold"
                        />
                    </Badge>

                    <Text
                        letterSpacing="wide"
                        fontSize="1.4rem"
                        fontFamily="creepster"
                        fontWeight="extrabold"
                        ml={props.life ? "4" : "none"}
                        color={colorMode == "light" ? "#d6ffdd" : "#00c510"}
                    >
                        {props.species}
                    </Text>
                </Box>

                <Flex
                    mt={5}
                    justifyContent="flex-start"
                    direction="column"
                    gap={1}
                    fontFamily="open-sans"
                >
                    <Flex gap={2}>
                        <Text fontWeight="bold">Origin: </Text>
                        <Box
                            as="h4"
                            lineHeight="tight"
                            noOfLines={1}
                            fontSize="sm"
                        >
                            {props.origin}
                        </Box>
                    </Flex>

                    <Flex gap={2} mt="1">
                        <Text fontWeight="bold">Location:</Text>
                        <Box
                            as="h4"
                            lineHeight="tight"
                            noOfLines={1}
                            fontSize="sm"
                        >
                            {props.location}
                        </Box>
                    </Flex>
                </Flex>

                <StatGroup mt="2" fontFamily="open-sans">
                    <Stat>
                        <Flex gap="3">
                            <StatLabel fontWeight="bold" fontSize="1rem">
                                Episodes:
                            </StatLabel>

                            <StatNumber
                                fontWeight="extrabold"
                                color={
                                    colorMode == "light"
                                        ? "whiteAlpha.700"
                                        : "black"
                                }
                                fontSize="smaller"
                            >
                                33
                            </StatNumber>
                            <StatHelpText fontSize="smaller">
                                <StatArrow
                                    type={
                                        props.popularity > 50
                                            ? "increase"
                                            : "decrease"
                                    }
                                />
                                {23.36}% of participation
                            </StatHelpText>
                        </Flex>
                    </Stat>
                </StatGroup>
            </Box>
        </Box>
    );
}
