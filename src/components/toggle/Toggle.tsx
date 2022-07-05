import { useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

export function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <header>
            <>
                <Switch
                    colorScheme={"red"}
                    size="lg"
                    onChange={toggleColorMode}
                >
                    {colorMode == "light" ? "🌚" : "☀️"}
                </Switch>
            </>
        </header>
    );
}
