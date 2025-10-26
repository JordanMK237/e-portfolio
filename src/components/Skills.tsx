// src/components/Skills.tsx

// Images
const IMAGES = {
    artist: new URL("../assets/BS405365.JPG", import.meta.url).href,
    uiux: new URL("../assets/UI-UX.jpeg", import.meta.url).href,
    frontend: new URL("../assets/front-end.png", import.meta.url).href,
    fullstack: new URL("../assets/full-stack.jpeg", import.meta.url).href,
    fullpack: new URL("../assets/full-pack.jpeg", import.meta.url).href,
    communication: new URL("../assets/communication2.jpg", import.meta.url).href,
    organization: new URL("../assets/orga-gestion.jpg", import.meta.url).href,
    adaptabilite: new URL("../assets/adaptabilite.jpg", import.meta.url).href,
};

// ---------- HARD SKILLS ----------
const hardSkills = [
    {
        id: 1,
        title: "UI/UX Design",
        desc: "Conception de maquettes sur Figma, design systems, ergonomie, micro-interactions, accessibilité et optimisation UX.",
        image: IMAGES.uiux,
        tags: ["UI/UX", "Figma", "Design System"],
    },
    {
        id: 2,
        title: "Front-End Web",
        desc: "Développement d’interfaces modernes avec React, Next.js et JavaScript. Performance, SEO, animations et responsive design.",
        image: IMAGES.frontend,
        tags: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
    },
    {
        id: 3,
        title: "Full-Stack",
        desc: "Développement d’API, gestion de bases de données, intégration front/back, déploiement et maintenance technique.",
        image: IMAGES.fullstack,
        tags: ["PHP", "Node.js", "MySQL", "MongoDB", "Firebase"],
    },
    {
        id: 4,
        title: "Fullpack",
        desc: "Accompagnement complet : identité visuelle, UX/UI, développement web/mobile, optimisation et livraison.",
        image: IMAGES.fullpack,
        tags: ["UI/UX", "Front-End", "Back-End"],
    },
];

// ---------- SOFT SKILLS ----------
const softSkills = [
    {
        id: 1,
        title: "Créativité & Vision",
        desc: "Capacité à imaginer, conceptualiser et transformer une vision en projet concret et cohérent.",
        image: IMAGES.artist,
        tags: ["Créativité", "Direction artistique"],
    },
    {
        id: 2,
        title: "Communication",
        desc: "Très à l’aise à l’oral comme à l’écrit. Capable d’expliquer clairement des choix techniques et créatifs.",
        image: IMAGES.communication,
        tags: ["Communication", "Clarté"],
    },
    {
        id: 3,
        title: "Organisation & Gestion",
        desc: "Habitude du travail en équipe, GitHub, Trello, deadlines, gestion de projet agile.",
        image: IMAGES.organization,
        tags: ["Organisation", "Gestion de projet"],
    },
    {
        id: 4,
        title: "Adaptabilité & Apprentissage",
        desc: "Grande capacité d’adaptation et envie constante d’apprendre de nouvelles technologies.",
        image: IMAGES.adaptabilite,
        tags: ["Adaptabilité", "Curiosité"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section container services">
            <h1 className="section-title">Skills</h1>
            <p className="section-sub">Hard Skills • Soft Skills</p>

            {/* ---------- HARD SKILLS ---------- */}
            <h2 className="section-title" style={{ marginTop: "40px" }}>Hard Skills</h2>
            <div className="services-grid" style={{ marginBottom: "40px" }}>
                {hardSkills.map((c) => (
                    <div key={c.id} className="svc-card card">
                        <div className="svc-media">
                            <img
                                src={c.image}
                                alt={c.title}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = IMAGES.frontend;
                                }}
                            />
                        </div>
                        <div className="svc-body">
                            <h3 className="svc-title">{c.title}</h3>
                            <div className="svc-tags">
                                {c.tags.map((t) => (
                                    <span key={t} className="svc-tag">{t}</span>
                                ))}
                            </div>
                            <p className="svc-desc">{c.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ---------- SOFT SKILLS ---------- */}
            <h2 className="section-title">Soft Skills</h2>
            <div className="services-grid">
                {softSkills.map((c) => (
                    <div key={c.id} className="svc-card card">
                        <div className="svc-media">
                            <img
                                src={c.image}
                                alt={c.title}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = IMAGES.communication;
                                }}
                            />
                        </div>
                        <div className="svc-body">
                            <h3 className="svc-title">{c.title}</h3>
                            <div className="svc-tags">
                                {c.tags.map((t) => (
                                    <span key={t} className="svc-tag">{t}</span>
                                ))}
                            </div>
                            <p className="svc-desc">{c.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
