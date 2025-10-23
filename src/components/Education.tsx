export default function Education() {
    return (
        <section className="section education" id="education">
            <div className="container">
                <h1 className="section-title"> Parcours académique</h1>
                <p className="section-sub">
                    Mon parcours m’a permis d’acquérir des bases solides en développement,
                    conception logicielle et gestion de projets informatiques.
                </p>

                <div className="edu-timeline">

                    {/* BUT Informatique */}
                    <div className="edu-item">
                        <div className="edu-header">
                            <h3>BUT Informatique – IUT Paris Rives-de-Seine</h3>
                            <span className="edu-year">2023 – 2026 (en cours)</span>
                        </div>
                        <p className="edu-desc">
                            Parcours Réalisation d’Applications : conception, développement et
                            déploiement d’applications complètes. Approche agile, communication
                            technique et travail d’équipe.
                        </p>
                        <ul className="edu-tags">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Vue</li>
                            <li>React</li>
                            <li>Next</li>
                            <li>Laravel</li>
                            <li>SQL</li>
                            <li>Docker</li>
                            <li>Méthode Agile</li>
                            <li>Github</li>
                            <li>Trello</li>
                            <li>Figma</li>
                        </ul>
                    </div>

                    {/* BAC STI2D */}
                    <div className="edu-item">
                        <div className="edu-header">
                            <h3>Baccalauréat STI2D – Lycée Polyvalent de Cachan</h3>
                            <span className="edu-year">2022</span>
                        </div>
                        <p className="edu-desc">
                            Spécialité Systèmes d’Information et Numérique – Mention Très Bien.
                            Premiers projets en électronique, développement embarqué et algorithmique.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}