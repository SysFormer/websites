import React from "react";
import { Navbar, Footer } from "@components/layout";
import { Training } from "@components/home/Training";
import { Team } from "@components/home/Team";
import { useContent } from "../hooks/useContent";
import { useScrollToSection } from "@hooks/useScrollToSection";
import styles from "./SzkoleniePage.module.css";

export const SzkoleniePage: React.FC = () => {
  const { content } = useContent();
  const scrollToSection = useScrollToSection();

  return (
    <div className="app loaded">
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <p className={styles.serviceLabel}>{content.TRAINING_PAGE.HERO.LABEL}</p>
          <h1 className={styles.title}>
            {content.TRAINING_PAGE.HERO.TITLE}
          </h1>
          <p className={styles.subtitle}>
            {content.TRAINING_PAGE.HERO.SUBTITLE}
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://calendly.com/michal-sysflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              {content.TRAINING_PAGE.HERO.BUTTON_PRIMARY}
            </a>
            <button
              className={styles.secondaryAction}
              onClick={() => scrollToSection("szkolenie")}
            >
              {content.TRAINING_PAGE.HERO.BUTTON_SECONDARY}
            </button>
          </div>
        </div>
      </section>

      <Training />
      <Team />

      <section className={styles.cta}>
        <div className="container">
          <h2>{content.TRAINING_PAGE.CTA.TITLE}</h2>
          <p>
            {content.TRAINING_PAGE.CTA.DESCRIPTION}
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://calendly.com/michal-sysflow/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
              {content.TRAINING_PAGE.CTA.BUTTON_PRIMARY}
            </a>
            <a href={content.CONTACT.phoneLink} className={styles.secondaryAction}>
              {content.CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
