"use client"

// ui component
import { Switch } from "@/components/ui/switch"
// hooks
import { useState } from "react";
import { useTheme } from "next-themes";
// icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { setTheme } = useTheme();

    const handleChange = () => {
        if (darkMode) {
            setTheme('light');
            setDarkMode(false);
        } else {
            setTheme('dark');
            setDarkMode(true);
        }
    }

    return (
        <div className="flex flex-row space-x-2 items-center">
            <Switch onCheckedChange={handleChange} color="black" />
            {darkMode ? <BsFillMoonFill size={18} /> : <BsFillSunFill size={16} />}
        </div>
    )
}

export default DarkModeToggle;