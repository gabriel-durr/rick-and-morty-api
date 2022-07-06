import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/creepster";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,

    fonts: {
        heading: `'creepster', sans-serif`,
    },
});

export default theme;
