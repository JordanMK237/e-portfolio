// src/components/BubbleNav.tsx
import { useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number };

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export default function BubbleNav() {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const dragRef = useRef({ active: false, offsetX: 0, offsetY: 0 });
    const [pos, setPos] = useState<Pos>({ x: 0, y: 0 }); // fixé au mount
    const menuId = "bubble-menu";

    // --- init position (en bas à droite) + localStorage
    useEffect(() => {
        const saved = localStorage.getItem("bubble-pos");
        if (saved) {
            try {
                const p = JSON.parse(saved) as Pos;
                setPos(p);
                return;
            } catch {}
        }
        const DEFAULT_SIZE = 56; // ≈ diamètre bouton
        const margin = 24;
        const x = window.innerWidth - DEFAULT_SIZE - margin;
        const y = window.innerHeight - DEFAULT_SIZE - margin;
        setPos({ x, y });
    }, []);

    // clamp sur resize et persistance
    useEffect(() => {
        const onResize = () => {
            const el = wrapRef.current;
            const w = el?.offsetWidth ?? 200;  // pill ouverte peut être plus large
            const h = el?.offsetHeight ?? 56;
            setPos((p) => ({
                x: clamp(p.x, 8, window.innerWidth - w - 8),
                y: clamp(p.y, 8, window.innerHeight - h - 8),
            }));
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        localStorage.setItem("bubble-pos", JSON.stringify(pos));
    }, [pos]);

    // fermer au clic extérieur / ESC
    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            const root = wrapRef.current;
            const t = e.target as Node | null;
            if (!root || !t) return;
            if (open && !root.contains(t)) setOpen(false);
        };
        const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open]);

    // --- drag souris
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (!dragRef.current.active || !wrapRef.current) return;
            const el = wrapRef.current;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            const nx = clamp(e.clientX - dragRef.current.offsetX, 8, window.innerWidth - w - 8);
            const ny = clamp(e.clientY - dragRef.current.offsetY, 8, window.innerHeight - h - 8);
            setPos({ x: nx, y: ny });
        };
        const onUp = () => (dragRef.current.active = false);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
    }, []);

    const startDragMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        const root = wrapRef.current;
        if (!root) return;
        const r = root.getBoundingClientRect();
        dragRef.current.active = true;
        dragRef.current.offsetX = e.clientX - r.left;
        dragRef.current.offsetY = e.clientY - r.top;
    };

    // --- drag tactile
    useEffect(() => {
        const onTouchMove = (e: TouchEvent) => {
            if (!dragRef.current.active || !wrapRef.current) return;
            const t = e.touches[0];
            const el = wrapRef.current;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            const nx = clamp(t.clientX - dragRef.current.offsetX, 8, window.innerWidth - w - 8);
            const ny = clamp(t.clientY - dragRef.current.offsetY, 8, window.innerHeight - h - 8);
            setPos({ x: nx, y: ny });
        };
        const onTouchEnd = () => (dragRef.current.active = false);
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("touchend", onTouchEnd);
        return () => {
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    const startDragTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
        const root = wrapRef.current;
        if (!root) return;
        const r = root.getBoundingClientRect();
        const t = e.touches[0];
        dragRef.current.active = true;
        dragRef.current.offsetX = t.clientX - r.left;
        dragRef.current.offsetY = t.clientY - r.top;
    };

    return (
        <div
            ref={wrapRef}
            className={`fab-nav ${open ? "open" : ""}`}
            style={{
                position: "fixed",
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                zIndex: 1000,
                transition: dragRef.current.active ? "none" : "transform .15s ease",
            }}
        >
            {/* Le menu PILL = ta NAV PRINCIPALE */}
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

            {/* BOUTON Bulle = toggle + poignée de drag */}
            <button
                className="fab-toggle"
                type="button"
                onClick={() => setOpen((v) => !v)}
                onMouseDown={startDragMouse}
                onTouchStart={startDragTouch}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
            >
                <span className="fab-icon" data-open={open}>{open ? "✕" : "☰"}</span>
            </button>
        </div>
    );
}
