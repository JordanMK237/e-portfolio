// src/components/BubbleNav.tsx
import { useEffect, useRef, useState } from "react";

export default function BubbleNav() {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const menuId = "bubble-menu";

    // Ferme au clic extérieur / touche Échap
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            const root = wrapRef.current;
            if (open && root && !root.contains(e.target as Node)) setOpen(false);
        };
        const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open]);

    return (
        <div ref={wrapRef} className={`fab-nav ${open ? "open" : ""}`}>
            {/* Menu déroulant */}
            <nav
                id={menuId}
                className="fab-menu"
                aria-hidden={!open}
                aria-label="Navigation principale"
            >
                <a href="#home" className="fab-link">About</a>
                <a href="#music" className="fab-link">Music</a>
                <a href="#services" className="fab-link">Services</a>
                <a href="#projects" className="fab-link">Projects</a>
                <a href="#contact" className="fab-link">Contact</a>

                <a href="#contact" className="btn solid small">
                    Book a call <span className="online-dot" />
                </a>
            </nav>

            {/* Bouton bulle */}
            <button
                className="fab-toggle"
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
            >
                <span className="fab-icon" data-open={open}>{open ? "✕" : "☰"}</span>
            </button>
        </div>
    );
}
