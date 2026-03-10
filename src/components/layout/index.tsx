import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContent } from "../../hooks/useContent";
import { ThemeToggle } from "../shared/ThemeToggle";
import styles from "./layout.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const { content } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScroll = window.pageYOffset;
    const handleScroll = () => {
      const current = window.pageYOffset;
      setScrolled(current > 80);
      if (current > lastScroll && current > 220) {
        setHidden(true);
        if (window.innerWidth <= 768) {
          setMobileMenuOpen(false);
        }
      } else {
        setHidden(false);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClose = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname.includes(path);

  const scrollToSection = (sectionId: string, targetPath?: string) => {
    handleMobileClose();
    const dest = targetPath || '/';
    if (location.pathname !== dest) {
      navigate(dest, { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""
        } ${className}`}
    >
      <div className="container">
        <div className={styles.navContent}>
          <Link
            to="/"
            className={styles.brand}
            onClick={handleMobileClose}
          >
            <img
              src={`${import.meta.env.BASE_URL}image/logo.png`}
              alt="Sysformer logo"
              className={styles.brandMark}
            />
            <span className={styles.brandText}>Sysformer</span>
          </Link>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`${styles.navCluster} ${mobileMenuOpen ? styles.navClusterOpen : ""
              }`}
          >
            <div
              className={`${styles.navLinks} ${mobileMenuOpen ? styles.open : ""
                }`}
            >
              <Link
                to={`/${content.NAV.URLS.TRAINING}`}
                onClick={handleMobileClose}
                className={isActive(content.NAV.URLS.TRAINING) ? styles.active : ""}
              >
                {content.NAV.TRAINING}
              </Link>
              <Link
                to={`/${content.NAV.URLS.IMPLEMENTATIONS}`}
                onClick={handleMobileClose}
                className={isActive(content.NAV.URLS.IMPLEMENTATIONS) ? styles.active : ""}
              >
                {content.NAV.IMPLEMENTATIONS}
              </Link>
              <a
                onClick={() => scrollToSection("team", `/${content.NAV.URLS.IMPLEMENTATIONS}`)}
                className={styles.navLink}
              >
                {content.NAV.TEAM}
              </a>
            </div>

            <div className={styles.actions}>
              <ThemeToggle />
              <button
                className={styles.ctaButton}
                onClick={() => scrollToSection("kontakt")}
              >
                {content.NAV.CONTACT}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <Link to="/" className={styles.footerLogo}>
              <img
                src={`${import.meta.env.BASE_URL}image/logo.png`}
                alt="Sysformer logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>Sysformer</span>
            </Link>
            <div className={styles.footerContact}>
              <a href={`mailto:${content.CONTACT.email}`} className={styles.footerLink}>
                {content.CONTACT.email}
              </a>
              <a href={content.CONTACT.phoneLink} className={styles.footerLink}>
                {content.CONTACT.phone}
              </a>
            </div>
          </div>
          <div className={styles.footerRight}>
            {content.FOOTER.PRIVACY_POLICY && content.FOOTER.PRIVACY_URL && content.FOOTER.TERMS && content.FOOTER.TERMS_URL && (
              <div className={styles.footerLegal}>
                <Link to={content.FOOTER.PRIVACY_URL} className={styles.footerLegalLink}>
                  {content.FOOTER.PRIVACY_POLICY}
                </Link>
                <Link to={content.FOOTER.TERMS_URL} className={styles.footerLegalLink}>
                  {content.FOOTER.TERMS}
                </Link>
              </div>
            )}
            <p className={styles.footerText}>
              © {new Date().getFullYear()} Sysformer. {content.FOOTER.COPYRIGHT}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
