export default function CV() {
    // 🔗 Lien direct vers ton CV hébergé sur Google Drive
    const driveLink =
        "https://drive.google.com/drive/folders/14e78p9e6ZHr0QeR9N9umr2io85WvpRox?usp=drive_link"; // ← ton lien ici

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
