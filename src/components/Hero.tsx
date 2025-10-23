// src/components/Hero.tsx
import portrait from "../assets/image-cv.jpeg"; // ton image locale

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-grid">

                {/* Bloc gauche : image grand format */}
                <div className="hero-image">
                    <img src={portrait} alt="Jordan MVOTIO KENNE" />
                </div>

                {/* Bloc droit : texte de présentation */}
                <div className="hero-content">
          <span className="badge">
            <span className="online-dot" /> Disponible pour de nouveaux projets
          </span>

                    <h1>
                        Bonjour, je suis <span className="accent">Jordan MVOTIO</span>
                    </h1>

                    <p>
                        Étudiant en <strong>3ᵉ année de BUT Informatique</strong> (parcours Développement et
                        déploiement de systèmes applicatifs) à l’IUT Paris Rives-de-Seine, je suis passionné
                        par le <strong>développement web et mobile</strong>, mais aussi par la <strong>musique</strong>.
                        J’aime allier créativité et technicité dans chacun de mes projets.
                    </p>

                    <p>
                        Grâce à mon parcours académique et mes projets personnels, j’ai acquis de solides
                        compétences en <strong>Java, React, PHP, SQL, et Android</strong>. Je crois que ma
                        sensibilité artistique et ma vision originale peuvent apporter une vraie valeur ajoutée
                        à chaque collaboration.
                    </p>

                    <a href="#projects" className="btn solid hero-btn">
                        Voir mes réalisations →
                    </a>
                </div>
            </div>
        </section>
    );
}
