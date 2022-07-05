import { Box, Badge, Image, Icon, Flex } from "@chakra-ui/react";
import { StarIcon, WarningTwoIcon } from "@chakra-ui/icons";

export function Card<T>(props: T | any) {
    return (
        <Box
            bgColor={"white"}
            maxW="sm"
            h={"md"}
            borderWidth="px"
            borderRadius="lg"
            overflow="hidden"
        >
            <Flex justifyContent={"center"}>
                <Image
                    src={props.avatar}
                    alt={props.imageAlt}
                    width="full"
                    pt="1"
                    pl="3"
                    pr="4"
                    borderRadius={10}
                />
            </Flex>
            <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
                fontSize="3xl"
            >
                {props.title}
            </Box>

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Badge
                        hidden={props.life == false}
                        borderRadius="8"
                        colorScheme="teal"
                        color={"greenyellow"}
                        padding={1}
                    >
                        {props.life && "is dead"}
                        <Icon
                            textAlign={"right"}
                            marginLeft={1}
                            marginBottom={1}
                            as={WarningTwoIcon}
                            color={props.life && "red.500"}
                            fontWeight={"extrabold"}
                        />
                    </Badge>
                    <Box
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="4"
                    >
                        {props.breed}
                    </Box>
                </Box>

                <Box
                    color={"whiteAlpha.800"}
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    fontSize="sm"
                >
                    Origin: {props.origin}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={
                                    i < props.popularityStar
                                        ? "teal.500"
                                        : "gray.300"
                                }
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {props.episodesCounts} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
