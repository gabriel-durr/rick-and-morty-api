import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./components/Theme/Theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <App />
        </ChakraProvider>
    </React.StrictMode>
);
