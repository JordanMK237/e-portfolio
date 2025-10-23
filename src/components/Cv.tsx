export default function CV() {
    // 🔗 Lien direct vers ton CV hébergé sur Google Drive
    const driveLink =
        "https://drive.google.com/file/d/16TmYSoJ8D7MPzSZPWAr_wWP-TDnq8_Ez/view?usp=sharing"; // ← ton lien ici

    return (
        <section className="cv-section" id="cv">
            <h2 className="cv-title"> Mon CV</h2>
            <p className="cv-sub">
                Découvrez mon parcours complet, mes compétences et mes expériences.
            </p>

            <div className="cv-actions">
                <a
                    href={driveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn solid"
                >
                    Consulter le CV
                </a>
            </div>
        </section>
    );
}
