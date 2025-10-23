

// Chemins résolus par le bundler (marche en dev + build)
const IMAGES = {
    qolibri: new URL("../assets/qolibri-cie.png", import.meta.url).href,
    omarche: new URL("../assets/omarche2.jpg", import.meta.url).href,
    franceasso: new URL("../assets/france-asso2.png", import.meta.url).href,
    smarteco: new URL("../assets/Logo-SmartEco.png", import.meta.url).href,
    eportfolio: new URL("../assets/e-portfolio.jpeg", import.meta.url).href,
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
        title: "Qolibri & cie",
        desc: "Lors de mon stage chez Qolibri & Cie, entreprise spécialisée dans le recrutement et le conseil RH, j’ai mené la refonte complète du site internet, de la conception UX/UI au développement front-end.\n" +
            "J’ai également assuré l’hébergement et la mise en ligne du site via OVH, garantissant sa stabilité et ses performances.\n" +
            "Ce projet m’a permis de combiner créativité, compétences techniques et gestion de projet pour livrer une expérience digitale moderne, claire et fidèle à l’identité de l’entreprise.\n" +
            "Découvrez le résultat ici :",
        image: IMAGES.qolibri,
        tags: ["UI/UX", "Front-End", "Html/CSS", "JavaScript","Php"],
        link: "https://www.qolibri-cie.com/",
    },
    {
        id: 2,
        title: "Ô Marché Mbouda",
        desc: "Dans le cadre d’un projet personnel, je suis entrain de concevoir et développé le site e-commerce du magasin de produits exotiques Ô Marché Mbouda.\n" +
            "Ce projet me permet de travailler sur la conception de la base de données MySQL, le développement dynamique en PHP, ainsi que sur l’intégration front-end et le design UI/UX.\n" +
            "L’objectif : proposer une gestion automatisée des produits, une interface responsive et une expérience utilisateur fluide et moderne.\n" +
            "Le projet complet est consultable sur mon GitHub :",
        image: IMAGES.omarche,
        tags: ["UI/UX", "Figma", "Front-End", "Back-end", "Mysql", "Php", "Api", "Html", "Css", "JavaScript"],
        link: "https://github.com/JordanMK237/marche-Mbouda",
    },
    {
        id: 3,
        title: "Application Mobile Permettant le suivi et la gestion des dons pour France Assos",
        desc: "Dans le cadre d’un projet en BUT 2, j’ai participé au développement d’une application Android de gestion des dons destinée aux associations du réseau France Assos.\n" +
            "L’application permettait aux utilisateurs de faire des dons uniques, mensuels ou annuels, tout en offrant aux administrateurs une vue complète sur les transactions, les statistiques de dons par association et les catégories associées.\n" +
            "J’ai contribué à la mise en place de fonctionnalités clés : système d’inscription et d’authentification sécurisée, gestion des profils, historique des dons, intégration de QR Code, ainsi que la correction de nombreux bugs liés à la navigation et aux intents Android.\n" +
            "Le projet incluait également une amélioration de l’expérience utilisateur à travers des animations (Splash, Login, Connexion, Dons), des messages d’erreur dynamiques, et un design inspiré du prototype Figma.\n" +
            "Ce travail d’équipe m’a permis de renforcer mes compétences en développement mobile (Java, Android Studio, Firebase), en gestion de base de données et en travail collaboratif structuré."+
            "Le projet complet est consultable sur GitHub :",
        image: IMAGES.franceasso,
        tags: ["Android Studio", "Layouts", "Base de données", "Firebase","Back-end", "Gestion de projet", "Front-End"],
        link: "https://github.com/tyranosx/SAE-S4.01",
    },
    {
        id: 4,
        title: "Application Mobile Permettant la gestion d'une résidence participative",
        desc: "Dans le cadre d’un projet en BUT2, j’ai participé au développement de l’application Android “Gestion d’une Résidence Participative”.\n" +
            "Cette application a pour objectif de faciliter la gestion des consommations électriques au sein d’une résidence tout en encourageant les comportements écocitoyens grâce à un système de bonus/malus (éco-coins).\n" +
            "Les principales fonctionnalités incluent la visualisation des consommations individuelles et collectives, la réservation de créneaux d’utilisation des équipements électroménagers, ainsi qu’un système d’authentification et de gestion des équipements.\n" +
            "Le projet s’appuie sur une architecture connectée à une API Web distante, avec un back-end en PHP/MySQL et une interface mobile développée sous Android Studio.\n" +
            "L’équipe a utilisé GitHub pour la collaboration, Figma pour le maquettage, Postman pour le test des API et Trello pour le suivi de l’avancement du projet.\n" +
            "Ce projet m’a permis de renforcer mes compétences en développement mobile, intégration d’API REST, gestion de projet collaboratif et conception d’interfaces intuitives." +
            "Le projet complet est consultable sur mon GitHub :",
        image: IMAGES.smarteco,
        tags: ["Android Studio", "Layouts", "Base de données", "Firebase","Back-end", "Gestion de projet", "Front-End","API","Trello","Figma"],
        link: "https://github.com/JordanMK237/ProjetDevMob",
    },
    {
        id: 5,
        title: "Conception et Dévéloppement de mon e-portfolio",
        desc: "J’ai conçu et développé mon e-portfolio de A à Z afin de présenter mes projets et mon parcours.\n" +
            "Réalisé avec React, JavaScript, HTML et CSS, il met en avant mes compétences en développement front-end, en design d’interfaces modernes et en optimisation de l’expérience utilisateur.\n" +
            "J’ai également assuré son hébergement et sa mise en ligne, garantissant un rendu fluide, responsive et professionnel.\n",
        image: IMAGES.eportfolio,
        tags: ["Front-End", "UI/UX", "React","Figma","Javascript","Css","Html"],
    },

];

export default function Services() {
    return (
        <section id="projects" className="section container services">
            <h1 className="section-title">Projets</h1>
            <p className="section-sub">Projets Professionnels, Académiques & Personnels</p>

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
