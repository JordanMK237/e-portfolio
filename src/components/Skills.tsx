// src/components/Skills.tsx

// Chemins résolus par le bundler (marche en dev + build)
const IMAGES = {
    artist: new URL("../assets/BS405365.JPG", import.meta.url).href,
    uiux: new URL("../assets/UI-UX.jpeg", import.meta.url).href,
    frontend: new URL("../assets/front-end.png", import.meta.url).href,
    fullstack: new URL("../assets/full-stack.jpeg", import.meta.url).href,
    fullpack: new URL("../assets/full-pack.jpeg", import.meta.url).href,
    placeholder: new URL("../assets/services/placeholder.jpg", import.meta.url).href, // optionnel
};

type Card = {
    id: number;
    title: string;
    desc: string;
    image: string;   // on stocke l'URL résolue
    tags: string[];
    link?: string;
};

const cards: Card[] = [
    {
        id: 1,
        title: "Artist — Releases & Visuals",
        desc: "En tant qu’artiste complet, je prends part à chaque étape du processus créatif : de la direction artistique au songwriting, en passant par les sessions d’enregistrement, la conception des visuels promotionnels et le lancement des projets.\n" +
            "J’écris, compose et interprète mes chansons, poèmes et récits, en mêlant émotion, esthétique et cohérence visuelle pour donner vie à une œuvre authentique et inspirée.",
        image: IMAGES.artist,
        tags: ["Music", "Branding"],
        link: "https://open.spotify.com/intl-fr/artist/2Ki7VbEypGhVcAgzffDQaz",
    },
    {
        id: 2,
        title: "UI/UX Design",
        desc: "Je conçois des interfaces modernes alliant esthétique, ergonomie et accessibilité.\n" +
            "De la création de maquettes Figma à la mise en place de design systems cohérents, j’accorde une attention particulière aux micro-interactions et aux détails visuels qui renforcent l’expérience utilisateur.\n" +
            "Mon objectif : offrir des interfaces à la fois élégantes, intuitives et fonctionnelles, qui traduisent l’identité de chaque projet dans une expérience fluide et engageante.",
        image: IMAGES.uiux,
        tags: ["UI/UX", "Figma"],
    },
    {
        id: 3,
        title: "Front-End Web",
        desc: "Je développe des interfaces modernes et performantes avec React et Next.js, en alliant design épuré et technologies réactives.\n" +
            "Chaque site est conçu pour offrir une navigation fluide, une expérience utilisateur optimale et un référencement naturel (SEO) soigné.\n" +
            "Mon approche front-end repose sur la performance, la réactivité et la cohérence visuelle, afin de garantir des produits rapides, accessibles et esthétiques.",
        image: IMAGES.frontend,
        tags: ["React", "Next.js","Vue.js","Html","Css","Javascript","Node.js"],
    },
    {
        id: 4,
        title: "Full-stack",
        desc: "Développeur Full-Stack, j’assure la création d’interfaces modernes (front-end) et la mise en place d’architectures fiables et sécurisées (back-end).\n" +
            "Mon approche allie design, ergonomie et performance pour offrir des solutions sur mesure, du concept au déploiement.",
        image: IMAGES.fullstack,
        tags: ["Firebase", "Sql","MongoDB","Mysql","Php","Database"],
    },
    {
        id: 5,
        title: "Fullpack",
        desc: "J’offre un accompagnement complet, de la création de l’identité visuelle à la conception de l’expérience utilisateur (UI/UX), jusqu’au développement web et mobile.\n" +
            "Mon approche full-pack garantit une cohérence entre design et technologie, pour des produits à la fois esthétiques, performants et intuitifs.\n" +
            "Chaque projet est pensé dans sa globalité, afin de proposer une solution sur mesure, fidèle à votre vision et optimisée pour vos utilisateurs.",
        image: IMAGES.fullpack,
        tags: ["UI/UX", "Front-End","Back-end"],
    },
];

export default function Skills() {
    return (
        <section id="services" className="section container services">
            <h1 className="section-title">Skills</h1>
            <p className="section-sub">Artist services & creative development</p>

            <div className="services-grid">
                {cards.map((c) => {
                    const Wrapper: any = c.link ? "a" : "div";
                    return (
                        <Wrapper
                            key={c.id}
                            className="svc-card card"
                            {...(c.link ? { href: c.link, target: "_blank", rel: "noreferrer" } : {})}
                        >
                            <div className="svc-media">
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    onError={(e) => {
                                        // fallback automatique si l'image manque
                                        (e.currentTarget as HTMLImageElement).src = IMAGES.placeholder || "https://picsum.photos/800/600?blur=2";
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

                            {c.link && <span className="svc-cta" aria-hidden>↗</span>}
                        </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}
