import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const isDark = saved ? saved === "dark" : true;
        document.documentElement.dataset.theme = isDark ? "dark" : "light";
        setDark(isDark);
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.dataset.theme = next ? "dark" : "light";
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme" title="Theme">
            {dark ? "🌙" : "☀️"}
        </button>
    );
}
