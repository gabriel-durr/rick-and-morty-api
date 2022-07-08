import {Flex, Heading, Stack} from "@chakra-ui/react";
import "@fontsource/creepster/400.css";
import {Button} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
type titleType = {title: string};

export function Header({title}: titleType) {
	return (
		<Flex justifyContent="space-between" alignItems="center">
			<Stack direction="row" spacing={2} mr="20">
				<Button
					leftIcon={<ArrowLeftIcon />}
					colorScheme="teal"
					size="sm"
					variant="outline">
					Prev Page
				</Button>
				<Button
					rightIcon={<ArrowRightIcon />}
					colorScheme="cyan"
					size="sm"
					variant="solid">
					Next Page
				</Button>
			</Stack>

			<Heading
				color="#0ecfe0"
				textShadow="2px 2px 7px #33e627"
				fontFamily="creepster"
				as="h2"
				size="4xl"
				noOfLines={1}
				p="3">
				{title}
			</Heading>
		</Flex>
	);
}
