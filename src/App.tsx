import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Toggle } from "./components/toggle/Toggle";
import { Flex, Box, useColorMode } from "@chakra-ui/react";

function App() {
    const { colorMode } = useColorMode();
    return (
        <Box
            borderTop="5px solid #0aebff"
            bgColor={colorMode == "light" ? "#d1cccc88" : "#1e1e2c21"}
            maxW="ful"
            margin="0 auto"
            borderRight="1px solid black"
            borderLeft="1px solid black"
        >
            <Flex
                justifyContent={"space-evenly"}
                alignItems="center"
                margin="0 auto"
                pos="sticky"
                w="container.xl"
                pb="1rem"
                top="0"
                right="0"
                left="0"
                bg={colorMode == "light" ? "#ffffff37" : "#1e1e2c2d"}
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
                <Flex wrap="wrap" gap="10">
                    <Card
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                        imgAlt="Rick doidaoo"
                        status={true}
                        title="Rick Modern"
                        origin="SP"
                        location="Planeta dos Macacos!"
                        life={true}
                        breed="Animal"
                        popularityStar={2}
                        episodesCounts={3}
                    />
                    <Card
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                        imgAlt="Rick doidaoo"
                        status={true}
                        title="Rick Modern"
                        origin="SP"
                        location="Planeta dos Macacos!"
                        life={true}
                        breed="Animal"
                        popularityStar={2}
                        episodesCounts={3}
                    />
                    <Card
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                        imgAlt="Rick doidaoo"
                        status={true}
                        title="Rick Modern"
                        origin="SP"
                        location="Planeta dos Macacos!"
                        life={true}
                        breed="Animal"
                        popularityStar={2}
                        episodesCounts={3}
                    />
                    <Card
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                        imgAlt="Rick doidaoo"
                        status={true}
                        title="Rick Modern"
                        origin="SP"
                        location="Planeta dos Macacos!"
                        life={true}
                        breed="Animal"
                        popularityStar={2}
                        episodesCounts={3}
                    />
                    <Card
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                        imgAlt="Rick doidaoo"
                        status={true}
                        title="Rick Modern"
                        origin="SP"
                        location="Planeta dos Macacos!"
                        life={true}
                        breed="Animal"
                        popularityStar={2}
                        episodesCounts={3}
                    />
                </Flex>
            </Flex>
        </Box>
    );
}

export default App;
