import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xwpbabdj");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  const customHandleSubmit = async (event) => {
    event.preventDefault();
    setSubmittedOnce(true);
    await handleSubmit(event);
  };

  return (
    <div className={styles.contact}>
      <fieldset>Deixe uma mensagem</fieldset>

      {/* Condicionalmente renderiza o formulário ou a mensagem de sucesso */}
      {state.succeeded ? (
        <p className={styles.successMessage}>Obrigado por entrar em contato! Sua mensagem foi enviada.</p>
      ) : (
        <form onSubmit={customHandleSubmit}>
          {submittedOnce && !state.succeeded && !state.submitting && (
            <p className={styles.errorMessage}>
              Ocorreu um erro ao enviar sua mensagem. Por favor, verifique os campos e tente novamente.
            </p>
          )}

          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
          />
          <ValidationError prefix="Nome" field="name" errors={state.errors} />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Escreva sua mensagem"
            required
          ></textarea>
          <ValidationError prefix="Mensagem" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      )}

      {/* A seção de detalhes permanece sempre visível */}
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
