import { Box, Badge, Image, Icon, Flex, useColorMode } from "@chakra-ui/react";
import { StarIcon, WarningTwoIcon } from "@chakra-ui/icons";

export function Card<T>(props: T | any) {
    const { colorMode } = useColorMode();

    return (
        <Box
            color={"black"}
            bgColor={colorMode == "light" ? "cyan.100" : "azure"}
            maxW="sm"
            h={"md"}
            borderWidth="px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="2xl"
            p="1"
            rounded="md"
        >
            <Flex p={2} justifyContent={"center"}>
                <Image
                    src={props.avatar}
                    alt={props.imageAlt}
                    width="full"
                    h={"52"}
                    borderRadius={10}
                />
            </Flex>
            <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
                fontSize="4xl"
                textAlign={"center"}
            >
                {props.title}
            </Box>

            <Box p="4">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"flex-start"}
                >
                    <Badge
                        hidden={props.life == false}
                        bg={"blackAlpha.900"}
                        borderRadius="8"
                        colorScheme="teal"
                        color={"red"}
                        textAlign={"center"}
                        padding={1}
                        pl={2}
                    >
                        {props.life && "is dead"}
                        <Icon
                            textAlign={"right"}
                            marginLeft={1}
                            marginBottom={1}
                            as={WarningTwoIcon}
                            color={props.life && "darkorange"}
                            fontWeight={"extrabold"}
                        />
                    </Badge>

                    <Box
                        letterSpacing="wide"
                        fontSize="1rem"
                        textTransform="uppercase"
                        ml="4"
                    >
                        {props.breed}
                    </Box>
                </Box>

                <Flex
                    mt={5}
                    justifyContent={"flex-start"}
                    direction={"column"}
                    gap={1}
                >
                    <Box as="h4" lineHeight="tight" noOfLines={1} fontSize="md">
                        Origin: {props.origin}
                    </Box>

                    <Box as="h4" lineHeight="tight" noOfLines={1} fontSize="md">
                        Location: {"Planeta dos Macacos"}
                    </Box>
                </Flex>

                <Box display="flex" mt="3" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={
                                    i < props.popularityStar
                                        ? "gold"
                                        : "gray.300"
                                }
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {props.episodesCounts} episode participation
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
