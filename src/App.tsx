import {Header} from "./components/Header/Header";
import {Toggle} from "./components/Toggle/Toggle";
import {Flex, Box, useColorMode} from "@chakra-ui/react";
import {Card} from "./components/Card/Card";
import axios from "axios";

import {useEffect, useState} from "react";

function App() {
	// type charactersTip = {
	// 	id: number;
	// 	avatar: string;
	// 	imageAlt: string;
	// 	title: string;
	// 	life: string;
	// 	species: string;
	// 	origin: string;
	// 	location: string;
	// 	popularity: string;
	// 	episodes: [];
	// };

	// GET API RICK AND MORTY

	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

	const [chars, setCharts] = useState([]);

	const getChars = (url: any) => {
		axios.get(url).then((res: any) => setCharts(res.data.results));
	};

	console.log(chars);

	useEffect(() => {
		getChars(url);
	}, [url]);

	//  -----------------------------------------------------------

	const {colorMode} = useColorMode();
	return (
		<Box
			borderTop="5px solid #0aebff"
			bgColor={colorMode == "light" ? "#d1cccc88" : "#1e1e2c21"}
			maxW="ful"
			margin="0 auto"
			borderRight="10px solid black"
			borderLeft="10px solid black">
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
				}>
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
				p="2rem">
				<Flex wrap="wrap" gap="24" ml="4rem" margin="0 auto 0 4rem">
					{chars.map((char: any) => (
						<Card
							avatar={char.image}
							key={char.id}
							title={char.name}
							life={char.status === "Dead" ? true : false}
							species={char.species}
							origin={char.origin.name}
							location={char.location.name}
							popularity={"20"}
							episodes={Object.keys(char.episode).length}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	);
}

export default App;
