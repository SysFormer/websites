import React from "react";
import { Navbar, Footer } from "@components/layout";
import { FlowOne } from "@components/home/FlowOne";
import { WhyChoose } from "@components/home/WhyChoose";
import { Team } from "@components/home/Team";
import { useContent } from "../hooks/useContent";
import { useScrollToSection } from "@hooks/useScrollToSection";
import styles from "./WdrozeniaPage.module.css";

export const WdrozeniaPage: React.FC = () => {
  const { content } = useContent();
  const scrollToSection = useScrollToSection();

  return (
    <div className="app loaded">
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <p className={styles.serviceLabel}>{content.IMPLEMENTATIONS_PAGE.HERO.LABEL}</p>
          <h1 className={styles.title}>
            {content.IMPLEMENTATIONS_PAGE.HERO.TITLE}
          </h1>
          <p className={styles.subtitle}>
            {content.IMPLEMENTATIONS_PAGE.HERO.SUBTITLE}
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://calendly.com/michal-sysflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              {content.IMPLEMENTATIONS_PAGE.HERO.BUTTON_PRIMARY}
            </a>
            <button
              className={styles.secondaryAction}
              onClick={() => scrollToSection("flowone")}
            >
              {content.IMPLEMENTATIONS_PAGE.HERO.BUTTON_SECONDARY}
            </button>
          </div>
        </div>
      </section>

      <FlowOne />
      <WhyChoose />
      <Team />

      <section className={styles.cta}>
        <div className="container">
          <h2>{content.IMPLEMENTATIONS_PAGE.CTA.TITLE}</h2>
          <p>
            {content.IMPLEMENTATIONS_PAGE.CTA.DESCRIPTION}
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://calendly.com/michal-sysflow/30min" target="_blank" rel="noopener noreferrer" className={styles.primaryAction}>
              {content.IMPLEMENTATIONS_PAGE.CTA.BUTTON_PRIMARY}
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
