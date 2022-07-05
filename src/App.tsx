import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { Toggle } from "./components/toggle/Toggle";
import { Flex } from "@chakra-ui/react";

function App() {
    return (
        <div>
            <Flex justifyContent={"space-evenly"}>
                <Header title="Rick and Morty API"></Header>
                <Toggle />
            </Flex>
            <Card
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qk9Z7y8c6CEz1x-FBwbMtPYp68znOQjcpPh4aZ5zdVyLBcYIDsLHlWKBFvwEvzQhn-U&usqp=CAU"
                imgAlt="Rick doidaoo"
                status={true}
                title="Rick Modern"
                origin="SP"
                location="Planeta doido"
                life={true}
                breed="Animal"
                popularityStar={2}
                episodesCounts={3}
            />
        </div>
    );
}

export default App;
