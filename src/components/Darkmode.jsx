import React from 'react';
import DarkButton from "../assets/website/dark-mode-button.png";
// import LightButton from "./assets/website/light-mode-button.png";
const Darkmode = () => {
    const [theme, settheme] = React.useState("dark");
    return (
        <div>
            {/* <img src={LightButton} alt="" */}
                {/* className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-0" */}
                    {/* : "opacity-100" */}
                    {/* } `} */}
            {/* /> */}

            <img src={DarkButton} alt=""
                className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-0"
                    : "opacity-100"
                    } `}
            />
        </div>
    )
}

export default Darkmode