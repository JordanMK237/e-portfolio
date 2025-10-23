import "./App.css";

import { useEffect } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import MusicFeature from "./components/MusicFeature";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BubbleNav from "./components/BubbleNav";
import Education from "./components/Education";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop.tsx";


function useFastReveal() {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (!en.isIntersecting) return;
                    const el = en.target as HTMLElement;

                    // ✅ Couper tout délai sur mobile (écrase les inline styles)
                    if (isMobile) {
                        el.style.transitionDelay = "0ms";
                        el.style.transitionDuration = "180ms"; // encore + nerveux
                    } else {
                        // Desktop : garder un léger cap si tu as des data-delay
                        const raw = (el.getAttribute("data-delay") || "0").trim();
                        const ms = Math.min(parseInt(raw, 10) || 0, 150);
                        el.style.transitionDelay = `${ms}ms`;
                    }

                    el.classList.add("visible");
                    io.unobserve(el);
                });
            },
            {
                // ✅ Déclenche AVANT que la section n’entre totalement dans le viewport
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.05,
            }
        );

        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

export default function App() {
    useFastReveal();

    return (
        <div className="page">
            {/* NAV bulle flottante (remplace le header) */}
            <BubbleNav />

            {/* INTRO plein écran noir */}
            <Intro />

            {/* Point d’ancrage pour le bouton "Découvrir" */}
            <div id="content-start" />

            {/* CONTENU : chaque section s'affiche progressivement */}
            <main className="main">
                <section data-reveal>
                    <Hero/>
                </section>

                <section data-reveal data-delay="80ms">
                    <Education/>
                </section>

                <section data-reveal data-delay="80ms">
                    <Cv/>
                </section>


                <section data-reveal data-delay="100ms">
                    <Services/>
                </section>

                <section data-reveal data-delay="100ms">
                    <Projects/>
                </section>

                <section data-reveal data-delay="100ms">
                    <MusicFeature/>
                </section>

                <section data-reveal data-delay="100ms">
                    <Contact/>
                </section>

                <section data-reveal data-delay="100ms">
                    <BackToTop/>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
