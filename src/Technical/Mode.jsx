import { useState } from "react";
import "./Mode.css";

function DarkMode (){

    const [theme, setCurrentTheme] = useState("Darkmode")

    function ToggleLightTheme (){

        if (theme === "DarkMode"){
            setCurrentTheme("LightMode")
        }

        else{
            setCurrentTheme("DarkMode");
        }
    }

    return (
        <button onClick={ToggleLightTheme} value = {theme}> Mode</button>
    )
}

export default DarkMode;