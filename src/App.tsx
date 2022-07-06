import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";
import { Toggle } from "./components/Toggle/Toggle";
import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { CardsAPI } from "./components/CardsAPI/CardsAPI";

function App() {
    const { colorMode } = useColorMode();
    return (
        <Box
            borderTop="5px solid #0aebff"
            bgColor={colorMode == "light" ? "#d1cccc88" : "#1e1e2c21"}
            maxW="ful"
            margin="0 auto"
            borderRight="10px solid black"
            borderLeft="10px solid black"
        >
            <Flex
                justifyContent={"space-evenly"}
                alignItems="center"
                border="2px solid rgba(255, 255, 255, 0.010)"
                margin="0 auto"
                pos="sticky"
                w="container.xl"
                p="2"
                top="2"
                right="0"
                left="0"
                bg={
                    colorMode == "light"
                        ? "rgba(30, 30, 44, 0.020)"
                        : "rgba(255, 255, 255, 0.007)"
                }
            >
                <Header title="Rick and Morty API"></Header>
                <Toggle />
            </Flex>
            <Flex
                margin="1rem auto"
                direction="column"
                justifyContent={"space-evenly"}
                gap="180"
                maxW="8xl"
                minH="1050px"
                p="2rem"
            >
                <Flex wrap="wrap" gap="24" ml="4rem" margin="0 auto 0 4rem">
                    <Card
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                        imgAlt="Rick doidaoo"
                        status={true}
                        title="Rick Modern"
                        origin="SP"
                        location="Planeta dos Macacos!"
                        life={true}
                        species="Animal"
                        episodesCounts={3}
                        popularity={"20"}
                    />
                </Flex>
            </Flex>
            <CardsAPI />
        </Box>
    );
}

export default App;
