import React from 'react'
    import { ChakraProvider,extendTheme } from '@chakra-ui/react'
    import App from "./App"



   const colors= {
      brand:{
        900:"#024fc9",
        800:"#146af5"
      }
     
    }
const theme= extendTheme(colors)
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
)