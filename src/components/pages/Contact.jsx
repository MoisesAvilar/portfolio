import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  function handleSendEmail(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    const emailAdress = "moisesavilar0@gmail.com";

    const subject = encodeURIComponent("Mensagem do formulário de contato");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    );
    const mailToLink = `mailto:${emailAdress}?subject=${subject}&body=${body}`;

    window.location.href = mailToLink;
  }

  return (
    <div className={styles.contact}>
      <fieldset>Deixe uma mensagem</fieldset>
      <form onSubmit={handleSendEmail}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu email"
          required
        />
        <label htmlFor="message">Mensagem:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Escreva sua mensagem"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className={styles.details}>
        <p>
          <MdEmail /> moisesavilar0@gmail.com
        </p>
        <p>
          <FaWhatsapp /> (73) 99969-9511
        </p>
      </div>
    </div>
  );
}

export default Contact;
