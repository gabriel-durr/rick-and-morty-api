import { Switch, useColorMode } from "@chakra-ui/react";

export function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <header>
            <>
                <Switch
                    colorScheme={"cyan"}
                    size="md"
                    onChange={toggleColorMode}
                >
                    {colorMode == "light" ? "🌚" : "☀️"}
                </Switch>
            </>
        </header>
    );
}
