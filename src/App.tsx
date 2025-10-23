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


export default function App() {
    useEffect(() => {
        const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        // option: délai individuel via data-delay (ex: "120ms", "0.2s")
                        const delay = el.dataset.delay || "0ms";
                        el.style.transitionDelay = delay;
                        el.classList.add("visible");
                        io.unobserve(el); // on révèle une fois
                    }
                });
            },
            { threshold: 0.15 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

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


                <section data-reveal data-delay="160ms">
                    <Services/>
                </section>

                <section data-reveal data-delay="200ms">
                    <Projects/>
                </section>

                <section data-reveal data-delay="120ms">
                    <MusicFeature/>
                </section>

                <section data-reveal data-delay="120ms">
                    <Contact/>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
