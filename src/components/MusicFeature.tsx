// src/components/MusicFeature.tsx

// ✅ Icônes SVG inline (pas de lib nécessaire)
const IconSpotify = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.5 17.3a.9.9 0 0 1-1.24.3c-3.4-2.08-7.67-2.55-12.71-1.41a.9.9 0 1 1-.4-1.76c5.45-1.25 10.17-.72 14 1.59.43.26.57.82.35 1.28Zm1.7-3.2a1 1 0 0 1-1.37.34c-3.9-2.4-9.84-3.1-14.45-1.71a1 1 0 0 1-.57-1.91c5.08-1.53 11.56-.77 15.94 1.93.47.29.62.92.35 1.35ZM19.5 10a1.2 1.2 0 0 1-1.64.41c-3.43-2.05-8.67-2.51-12.6-1.37a1.2 1.2 0 0 1-.67-2.3c4.57-1.34 10.4-.81 14.28 1.5.58.35.78 1.1.43 1.76Z"/>
    </svg>
);
const IconApple = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.7 13.5c-.03-3 2.45-4.57 2.56-4.64-1.4-2.06-3.59-2.34-4.36-2.37-1.85-.19-3.62 1.08-4.56 1.08-.96 0-2.4-1.05-3.95-1.02-2.03.03-3.92 1.18-4.96 3-2.11 3.65-.54 9.04 1.51 12.02 1 .43 2.19.92 3.58.9 1.41-.03 1.93-.91 3.62-.91 1.68 0 2.16.91 3.64.88 1.5-.02 2.46-.43 3.37-.86.64-.47 1.18-1.03 1.61-1.69-4.23-1.6-4-6.46-.06-8.39ZM14.9 3.6c.82-.99 1.37-2.38 1.22-3.6-1.18.05-2.62.79-3.46 1.78-.76.89-1.41 2.3-1.23 3.65 1.31.1 2.66-.68 3.47-1.83Z"/>
    </svg>
);
const IconYouTube = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.9 32.9 0 0 0 0 12a32.9 32.9 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.8.5 9.3.5 9.3.5s7.5 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/>
    </svg>
);
const IconExternal = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M14 3h7v7h-2V7.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3ZM5 5h7v2H7v10h10v-5h2v7H5V5Z"/>
    </svg>
);

// ✅ Données – remplace/complète avec tes titres, covers et liens
type Track = {
    id: number;
    title: string;
    subtitle?: string;      // style / durée
    cover: string;          // URL résolue ou /public
    spotify?: string;
    apple?: string;
    youtube?: string;
};

const TRACKS: Track[] = [
    {
        id: 1,
        title: "Whine",
        subtitle: "Afro-pop • Rap",
        cover: new URL("../assets/Whine-cover.jpg", import.meta.url).href, // ➜ mets ton image
        spotify: "https://open.spotify.com/intl-fr/track/3pCKdmjgpCAyzHiE7nopN2?si=fb219bdaa96b49a4",
        apple: "https://music.apple.com/fr/song/whine/1804082805",
        youtube: "https://www.youtube.com/watch?v=A4swRzo_gjw&list=RDA4swRzo_gjw&start_radio=1",
    },
    {
        id: 2,
        title: "Heaven",
        subtitle: "Afro-beat • Rap",
        cover: new URL("../assets/Heaven-Cover.jpg", import.meta.url).href, // ➜ mets ton image
        spotify: "https://open.spotify.com/intl-fr/album/7jN7x89mq9Gv7ew36RjsmS",
        apple: "https://music.apple.com/fr/album/mood-ep/1639615854",
        youtube: "https://www.youtube.com/watch?v=WN53nf8wz6Q&list=RDWN53nf8wz6Q&start_radio=1",
    },
    {
        id: 3,
        title: "Mood - EP",
        subtitle: "Afro-beat • Rap • Afro-Swing",
        cover: new URL("../assets/Mood.jpg", import.meta.url).href, // ➜ mets ton image
        spotify: "https://open.spotify.com/intl-fr/track/3niByYJXLU9LE5SHy3zMnr?si=ebcaef5b26dd4357",
        apple: "https://music.apple.com/fr/song/heaven/1786289838",
        youtube: "https://www.youtube.com/watch?v=HEF_ZA-dYSs&list=RDHEF_ZA-dYSs&start_radio=1",
    },

];

// ✅ “À propos” – fiche Google + articles (remplace les liens par les tiens)
type Press = { id: number; title: string; source: string; url: string; };
const GOOGLE_PROFILE = "https://www.google.com/search?q=le+zer&oq=le+zer&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMgwIARAuGCcYgAQYigUyBwgCEAAYgAQyBwgDEC4YgAQyBggEEEUYPDIGCAUQRRhBMgYIBhBFGD0yBggHEEUYQdIBCDExMTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"; // ta fiche/knowledge panel si dispo
const PRESS: Press[] = [
     { id:1, title:"Article- Le Zer nous fait faire un tour en Californie : Une Virée Vers Ses Rêves”", source:"ExtravaFrench", url:"https://extravafrench.com/2024/12/27/le-zer-nous-fait-faire-un-tour-en-californie-une-viree-vers-ses-reves/" },
    { id:1, title:"Article- Le Zer détonne avec son superbe EP « Mood » !", source:"RAPUNCHLINE", url:"https://rapunchline.fr/actualites/le-zer-detonne-avec-son-superbe-ep-mood.html" },

];

export default function MusicFeature() {
    return (
        <section id="music" className="section container musicV2" data-reveal>
            <h1 className="section-title">Music & Releases</h1>
            <p className="section-sub">Listen to my latest tracks and discover more about my journey.</p>

            {/* Cartes des morceaux */}
            <div className="music-grid">
                {TRACKS.map((t) => (
                    <article key={t.id} className="music-card card">
                        <div className="music-cover">
                            <img src={t.cover} alt={t.title} />
                        </div>

                        <div className="music-body">
                            <h3 className="music-title">{t.title}</h3>
                            {t.subtitle && <p className="music-sub">{t.subtitle}</p>}

                            <div className="music-actions">
                                {t.spotify && (
                                    <a className="chip" href={t.spotify} target="_blank" rel="noreferrer" aria-label="Listen on Spotify">
                                        <IconSpotify /> <span>Spotify</span>
                                    </a>
                                )}
                                {t.apple && (
                                    <a className="chip" href={t.apple} target="_blank" rel="noreferrer" aria-label="Listen on Apple Music">
                                        <IconApple /> <span>Apple Music</span>
                                    </a>
                                )}
                                {t.youtube && (
                                    <a className="chip" href={t.youtube} target="_blank" rel="noreferrer" aria-label="Watch on YouTube">
                                        <IconYouTube /> <span>YouTube</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Cartes “À propos” : Google & articles */}
            <div className="about-grid">
                <a className="about-card card" href={GOOGLE_PROFILE} target="_blank" rel="noreferrer">
                    <div className="about-icon">G</div>
                    <div className="about-content">
                        <h4>Google profile</h4>
                        <p className="about-sub">Knowledge/Business profile about Le Zer</p>
                    </div>
                    <span className="about-cta"><IconExternal /></span>
                </a>

                {PRESS.length === 0 ? (
                    <div className="about-card card about-placeholder">
                        <div className="about-icon">📰</div>
                        <div className="about-content">
                            <h4>Press & Articles</h4>
                            <p className="about-sub">Ajoute tes liens d’articles ici.</p>
                        </div>
                    </div>
                ) : (
                    PRESS.map(p => (
                        <a key={p.id} className="about-card card" href={p.url} target="_blank" rel="noreferrer">
                            <div className="about-icon">📰</div>
                            <div className="about-content">
                                <h4>{p.title}</h4>
                                <p className="about-sub">{p.source}</p>
                            </div>
                            <span className="about-cta"><IconExternal /></span>
                        </a>
                    ))
                )}
            </div>
        </section>
    );
}
