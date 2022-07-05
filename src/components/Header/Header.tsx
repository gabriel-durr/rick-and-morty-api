import { Heading } from "@chakra-ui/react";

type titleType = { title: string };

export function Header({ title }: titleType) {
    return (
        <Heading size="lg" fontSize="50px">
            {title}
        </Heading>
    );
}
