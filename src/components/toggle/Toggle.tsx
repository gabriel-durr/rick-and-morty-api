import { Switch, useColorMode } from "@chakra-ui/react";

export function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <header>
            <>
                <Switch
                    colorScheme={"cyan"}
                    size="lg"
                    onChange={toggleColorMode}
                >
                    {colorMode == "light" ? "🌚" : "☀️"}
                </Switch>
            </>
        </header>
    );
}
