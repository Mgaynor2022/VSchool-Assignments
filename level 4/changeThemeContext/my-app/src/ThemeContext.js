import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [colorTheme, setColorTheme] = useState("light")

    function toggleTheme(){
        setColorTheme(prevColor => prevColor === "light" ? "dark" : "light")
    }
    return (
        <>
            < ThemeContext.Provider value={{
                colorTheme:colorTheme ,
                toggleTheme:toggleTheme
            }}>
                {props.children}

            </ThemeContext.Provider>
        </>
    )
}
export {ThemeContext, ThemeContextProvider}