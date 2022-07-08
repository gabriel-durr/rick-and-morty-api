import {Header} from "./components/Header/Header";
import {Toggle} from "./components/Toggle/Toggle";
import {
	Flex,
	Box,
	useColorMode,
	Stack,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon, SearchIcon} from "@chakra-ui/icons";
import {Card} from "./components/Card/Card";
import axios from "axios";

import {useEffect, useState} from "react";

function App() {
	// GET API RICK AND MORTY

	const [nextChars, setNextChars] = useState("");
	const [prevChars, prevNextChars] = useState("");

	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

	const [chars, setChars] = useState([]);

	const [searchChars, setSearchChars] = useState("");

	const getChars = (url: any) => {
		axios.get(url).then((res: any) => {
			setChars(res.data.results);

			setNextChars(res.data.info.next);
			prevNextChars(res.data.info.prev);
		});
	};

	useEffect(() => {
		getChars(url);
	}, [url]);

	//  -----------------------------------------------------------

	const {colorMode} = useColorMode();
	return (
		<Box>
			<Box
				borderTop="5px solid #0aebff"
				bgColor={colorMode == "light" ? "#f6f8fa" : "#1e1e2c21"}
				maxW={colorMode == "light" ? "calc(100% - 300px)" : "full"}
				margin="0 auto"
				borderRight={colorMode == "light" ? "none" : "10px solid black"}
				borderLeft={colorMode == "light" ? "none" : "10px solid black"}>
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
					<Stack direction="row" spacing={2} mr="20">
						<Button
							onClick={() => setUrl(prevChars)}
							leftIcon={<ArrowLeftIcon />}
							colorScheme="teal"
							size="xs"
							variant="outline">
							Prev
						</Button>
						<Button
							onClick={() => setUrl(nextChars)}
							rightIcon={<ArrowRightIcon />}
							colorScheme="cyan"
							size="xs"
							variant="solid">
							Next
						</Button>
					</Stack>

					<Header title="Rick and Morty API"></Header>
					<Toggle />
					<Stack ml="2rem" spacing={4}>
						<InputGroup>
							<InputLeftElement
								fontSize="0.9rem"
								children={<SearchIcon color="gray.300" />}
							/>
							<Input
								type="text"
								placeholder="search by character.."
								size="md"
								borderRadius={7}
								focusBorderColor="cyan.400"
								_placeholder={{
									opacity: 1,
									color: "gray.500",
								}}
								onChange={e => setSearchChars(e.target.value)}
							/>
						</InputGroup>
					</Stack>
				</Flex>
				<Flex
					margin="1rem auto"
					direction="column"
					justifyContent={"space-evenly"}
					gap="180"
					maxW="8xl"
					minH="1050px"
					p="2rem">
					<Flex wrap="wrap" gap="24" ml="4rem" margin="0 auto 0 7rem">
						{chars
							.filter((val: any) => {
								if (searchChars == "") {
									return val;
								} else if (
									val.name
										.toLowerCase()
										.includes(searchChars.toLowerCase())
								) {
									return val;
								}
							})

							.map((char: any) => (
								<Card
									avatar={char.image}
									key={char.id}
									title={char.name}
									life={char.status === "Dead" ? true : false}
									species={char.species}
									origin={char.origin.name}
									location={char.location.name}
									popularity={Math.round(
										(Object.keys(char.episode).length /
											51) *
											100
									)}
									episodes={Object.keys(char.episode).length}
								/>
							))}
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
}

export default App;
