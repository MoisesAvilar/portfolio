import React, { useState } from 'react';
import { MdEmail, MdSend } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";

function Contact() {
  const [state, handleSubmit] = useForm("xwpbabdj");
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const customHandleSubmit = async (event) => {
    event.preventDefault();
    setSubmittedOnce(true);
    await handleSubmit(event);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h2>Entre em Contato</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>Preencha o formulário ou use um dos meios diretos</p>
        </div>

        <div className={styles.contactContent}>
          {state.succeeded ? (
            <div className={styles.successMessage}>
              <h3>Mensagem Enviada!</h3>
              <p>Obrigado pelo seu contato. Responderei o mais breve possível.</p>
              <div className={styles.successIcon}>✓</div>
            </div>
          ) : (
            <form onSubmit={customHandleSubmit} className={styles.contactForm}>
              {submittedOnce && !state.succeeded && !state.submitting && (
                <div className={styles.errorMessage}>
                  <h4>Erro no Envio</h4>
                  <p>Por favor, verifique os campos e tente novamente.</p>
                </div>
              )}

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                  className={styles.formInput}
                />
                <label htmlFor="name" className={styles.formLabel}>Nome</label>
                <ValidationError prefix="Nome" field="name" errors={state.errors} />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                  className={styles.formInput}
                />
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  id="message"
                  placeholder=" "
                  required
                  className={`${styles.formInput} ${styles.formTextarea}`}
                ></textarea>
                <label htmlFor="message" className={styles.formLabel}>Mensagem</label>
                <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className={styles.submitButton}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {state.submitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <MdSend className={`${styles.sendIcon} ${isHovered ? styles.animate : ''}`} />
                  </>
                )}
              </button>
            </form>
          )}

          <div className={styles.contactMethods}>
            <h3>Contato Direto</h3>
            <div className={styles.methodsGrid}>
              <a href="mailto:moisesavilar0@gmail.com" className={styles.contactCard}>
                <MdEmail className={styles.contactIcon} />
                <span>Email</span>
              </a>
              
              <a href="https://wa.me/5573999699511" target='_blank' rel="noopener noreferrer" className={styles.contactCard}>
                <FaWhatsapp className={styles.contactIcon} />
                <span>WhatsApp</span>
              </a>
              
              <a href="https://www.linkedin.com/in/moisés-avilar/" target='_blank' rel="noopener noreferrer" className={styles.contactCard}>
                <FaLinkedin className={styles.contactIcon} />
                <span>LinkedIn</span>
              </a>
              
              <a href="https://github.com/MoisesAvilar" target='_blank' rel="noopener noreferrer" className={styles.contactCard}>
                <FaGithub className={styles.contactIcon} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;