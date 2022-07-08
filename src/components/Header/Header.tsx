import {Flex, Heading} from "@chakra-ui/react";
import "@fontsource/creepster/400.css";

type titleType = {title: string};

export function Header({title}: titleType) {
	return (
		<Flex justifyContent="space-between" alignItems="center">
			<Heading
				color="#0ecfe0"
				textShadow="2px 2px 7px #33e627"
				fontFamily="creepster"
				as="h2"
				h="min"
				size="4xl"
				noOfLines={1}
				p="3">
				{title}
			</Heading>
		</Flex>
	);
}
