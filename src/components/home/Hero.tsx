import React from "react";
import { useScrollToSection } from "@hooks/useScrollToSection";
import { useContent } from "@hooks/useContent";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const { content } = useContent();
  const scrollToSection = useScrollToSection();

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroInner}>
        <p className={styles.serviceLabel}>{content.HOME_PAGE.HERO.LABEL}</p>
        <h1 className={styles.title}>
          {content.HOME_PAGE.HERO.TITLE}
        </h1>
        <p className={styles.subtitle}>
          {content.HOME_PAGE.HERO.SUBTITLE}
        </p>
        <div className={styles.heroActions}>
          <a
            href="https://calendly.com/michal-sysflow/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
          >
            {content.HOME_PAGE.HERO.BUTTON_PRIMARY}
          </a>
          <button
            className={styles.secondaryAction}
            onClick={() => scrollToSection("flowone")}
          >
            {content.HOME_PAGE.HERO.BUTTON_SECONDARY}
          </button>
        </div>
      </div>
    </section>
  );
};
