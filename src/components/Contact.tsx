import { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_g341yq9";
const TEMPLATE_ID = "template_hv3ltgf";
const PUBLIC_KEY  = "Rx8POplt3OY66u8s3";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            const resp = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    // ⚠️ Doit matcher ton template EmailJS (title, name, email, message, time)
                    title: "Message depuis le portfolio",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                PUBLIC_KEY
            );
            console.log("EmailJS OK:", resp); // { status: 200, text: 'OK' }
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (err: unknown) {
            // pas de 'any' : on sécurise
            const maybe = err as { text?: string; message?: string };
            console.error("EmailJS error:", err);
            setErrorMsg(maybe.text ?? maybe.message ?? "Échec d’envoi. Vérifie IDs/Origin/Template.");
            setStatus("error");
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                {/* Infos */}
                <div className="contact-info">
                    <h2 className="contact-title"> Contact</h2>
                    <ul className="contact-list">
                        <li><strong>Téléphone :</strong><br /><a href="tel:+33769397297">07 69 39 72 97</a></li>
                        <li><strong>Email :</strong><br /><a href="mailto:jordanmvotio@gmail.com">jordanmvotio@gmail.com</a></li>
                        <li><strong>Adresse :</strong><br />Paris, France</li>
                    </ul>
                </div>

                {/* Formulaire */}
                <div className="contact-form">
                    <h3>Envoyer un message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input id="name" name="name" value={formData.name}
                                   onChange={handleChange} placeholder="Votre nom" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" value={formData.email}
                                   onChange={handleChange} placeholder="Votre email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} value={formData.message}
                                      onChange={handleChange} placeholder="Votre message..." required />
                        </div>

                        <button type="submit" className="btn solid" disabled={status === "sending"}>
                            {status === "sending" ? "Envoi en cours..." :
                                status === "success" ? "Message envoyé ✅" : "Envoyer"}
                        </button>

                        {status === "error" && (
                            <p className="error-msg" style={{ marginTop: 10, color: "#f66" }}>
                                ❌ {errorMsg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
