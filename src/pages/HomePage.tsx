import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Footer } from "@components/layout";
import { Testimonials } from "@components/home/Testimonials";
import { TrustedBy } from "@components/home/TrustedBy";
import { useContent } from "../hooks/useContent";
import { useRevealOnIntersect } from "@hooks/useRevealOnIntersect";
import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const { content } = useContent();
  const { ref: solutionsRef, isVisible } = useRevealOnIntersect();
  const { ref: forWhoRef, isVisible: forWhoVisible } = useRevealOnIntersect();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useRevealOnIntersect();
  const { ref: caseStudyRef, isVisible: caseStudyVisible } = useRevealOnIntersect();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Handle scroll to section from navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    // Submit via hidden iframe to avoid CORS issues
    const iframe = document.createElement('iframe');
    iframe.name = 'buttondown-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://buttondown.com/api/emails/embed-subscribe/sysflow';
    form.target = 'buttondown-iframe';

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);

    const tagInput = document.createElement('input');
    tagInput.type = 'hidden';
    tagInput.name = 'tag';
    tagInput.value = 'website';
    form.appendChild(tagInput);

    document.body.appendChild(form);
    form.submit();

    // Clean up and show success after short delay
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      setSubmitStatus("success");
      setEmail("");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="app loaded">
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroInner}>
          <p className={styles.serviceLabel}>{content.HOME_PAGE.HERO.LABEL}</p>
          <h1 className={styles.title}>
            {content.HOME_PAGE.HERO.TITLE}
            <br />
            <span className={styles.gradientText}>{content.HOME_PAGE.HERO.TITLE_HIGHLIGHT}</span>
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
            <a href="#newsletter" className={styles.secondaryAction}>
              {content.HOME_PAGE.HERO.BUTTON_SECONDARY}
            </a>
          </div>
          <p className={styles.heroProof}>{content.HOME_PAGE.HERO.PROOF}</p>

          {/* Featured Case Study */}
          <div className={styles.featuredCase}>
            <p>
              {content.HOME_PAGE.FEATURED_CASE.EMOJI}{" "}
              <strong>{content.HOME_PAGE.FEATURED_CASE.TEXT}</strong>{" "}
              {content.HOME_PAGE.FEATURED_CASE.DESCRIPTION}{" "}
              <a href="#case-study">{content.HOME_PAGE.FEATURED_CASE.LINK}</a>
            </p>
          </div>
        </div>
      </section>

      {/* DLA KOGO SECTION */}
      <section id="dla-kogo" className={`section ${styles.forWhoSection}`} ref={forWhoRef}>
        <div className="container">
          <h2 className="section-title">{content.HOME_PAGE.FOR_WHO.TITLE}</h2>
          <div className={styles.audienceGrid}>
            {content.HOME_PAGE.FOR_WHO.CARDS.map((card, index) => (
              <div
                key={index}
                className={`${styles.audienceCard} ${forWhoVisible ? styles.cardVisible : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.audienceIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DLACZEGO MY SECTION */}
      <section id="dlaczego-my" className={`section section--darker ${styles.whySection}`} ref={whyUsRef}>
        <div className="container">
          <h2 className="section-title">{content.HOME_PAGE.WHY_US.TITLE}</h2>
          <div className={styles.whyGrid}>
            {content.HOME_PAGE.WHY_US.CARDS.map((card, index) => (
              <div
                key={index}
                className={`${styles.whyCard} ${whyUsVisible ? styles.cardVisible : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.whyIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section id="case-study" className={`section ${styles.caseStudySection}`} ref={caseStudyRef}>
        <div className="container">
          <div className={styles.caseStudyBadge}>{content.HOME_PAGE.CASE_STUDY.BADGE}</div>
          <h2 className="section-title">{content.HOME_PAGE.CASE_STUDY.TITLE}</h2>

          <div className={`${styles.caseStudyContent} ${caseStudyVisible ? styles.visible : ""}`}>
            <div className={styles.caseStudyIntro}>
              <p>{content.HOME_PAGE.CASE_STUDY.INTRO}</p>
            </div>

            <div className={styles.caseStudyResults}>
              <h3>{content.HOME_PAGE.CASE_STUDY.WHAT_WE_DID.TITLE}</h3>
              <ul>
                {content.HOME_PAGE.CASE_STUDY.WHAT_WE_DID.ITEMS.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>{content.HOME_PAGE.CASE_STUDY.RESULTS.TITLE}</h3>
              <div className={styles.resultsGrid}>
                {content.HOME_PAGE.CASE_STUDY.RESULTS.ITEMS.map((item, index) => (
                  <div key={index} className={styles.resultItem}>
                    <span className={styles.resultNumber}>{item.number}</span>
                    <span className={styles.resultLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className={styles.caseStudyCta}>
            <a
              href="https://calendly.com/michal-sysflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              {content.HOME_PAGE.CASE_STUDY.CTA}
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      <TrustedBy />

      {/* SOLUTIONS SECTION */}
      <section className="section section--darker" ref={solutionsRef}>
        <div className="container">
          <h2 className="section-title">{content.HOME_PAGE.SOLUTIONS.TITLE}</h2>
          <p className={`${styles.descriptionText} ${isVisible ? styles.visible : ""}`}>
            {content.HOME_PAGE.SOLUTIONS.DESCRIPTION}
          </p>
          <h3 className={styles.heading}>{content.HOME_PAGE.SOLUTIONS.SUBHEADING}</h3>
          <div className={styles.cards}>
            <Link
              to="/szkolenie"
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
            >
              <div className={styles.cardImage}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt={content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.TITLE}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.TITLE}</h4>
                <p>{content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.DESCRIPTION}</p>
                <span className={styles.link}>
                  {content.HOME_PAGE.SOLUTIONS.CARDS.TRAINING.LINK}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link
              to="/wdrozenia"
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className={styles.cardImage}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt={content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.TITLE}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.TITLE}</h4>
                <p>{content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.DESCRIPTION}</p>
                <span className={styles.link}>
                  {content.HOME_PAGE.SOLUTIONS.CARDS.FLOWONE.LINK}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section id="newsletter" className={`section ${styles.newsletterSection}`}>
        <div className="container">
          <div className={styles.newsletterWrapper}>
            <div className={styles.newsletterContent}>
              <h2>{content.HOME_PAGE.NEWSLETTER.TITLE}</h2>
              <p className={styles.newsletterIntro}>{content.HOME_PAGE.NEWSLETTER.INTRO}</p>
              <ul className={styles.newsletterBenefits}>
                {content.HOME_PAGE.NEWSLETTER.BENEFITS.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <p className={styles.newsletterCommunity}>{content.HOME_PAGE.NEWSLETTER.COMMUNITY}</p>
            </div>

            <div className={styles.newsletterFormWrapper}>
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.HOME_PAGE.NEWSLETTER.PLACEHOLDER}
                  required
                />
                <button
                  type="submit"
                  className={`${styles.primaryAction} ${submitStatus === "success" ? styles.success : ""} ${submitStatus === "error" ? styles.error : ""}`}
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? "Zapisuję..." :
                   submitStatus === "success" ? "✓ Zapisano!" :
                   submitStatus === "error" ? "Błąd — spróbuj ponownie" :
                   content.HOME_PAGE.NEWSLETTER.BUTTON}
                </button>
              </form>
              <p className={styles.newsletterDisclaimer}>{content.HOME_PAGE.NEWSLETTER.DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontakt" className={styles.cta}>
        <div className="container">
          <div className={styles.contactHeader}>
            <h2>{content.HOME_PAGE.CONTACT.TITLE}</h2>
            <p className={styles.contactSubtitle}>{content.HOME_PAGE.CONTACT.SUBTITLE}</p>
            <ul className={styles.contactBenefits}>
              {content.HOME_PAGE.CONTACT.BENEFITS.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className={styles.ctaButtons}>
            <a
              href="https://calendly.com/michal-sysflow/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              {content.HOME_PAGE.CTA.BUTTON_PRIMARY}
            </a>
            <a href={content.CONTACT.phoneLink} className={styles.secondaryAction}>
              {content.CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className={styles.mobileStickyCtaWrapper}>
        <a
          href="https://calendly.com/michal-sysflow/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.primaryAction} ${styles.btnFull}`}
        >
          Bezpłatna konsultacja →
        </a>
      </div>

      <Footer />
    </div>
  );
};
