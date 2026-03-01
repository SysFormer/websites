import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useContent } from '../../hooks/useContent';
import { useRevealOnIntersect } from '@hooks/useRevealOnIntersect';
import styles from './Testimonials.module.css';
import gsap from 'gsap';

const AUTO_ROTATE_INTERVAL = 8000;

export const Testimonials: React.FC = () => {
    const { content } = useContent();
    const { ref, isVisible } = useRevealOnIntersect();
    const cardRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const testimonials = content.TESTIMONIALS;
    const showCarousel = testimonials.length > 3;
    const testimonial = testimonials[currentIndex];

    const animateTransition = useCallback((newIndex: number) => {
        if (isAnimating || !cardRef.current) return;

        setIsAnimating(true);

        gsap.to(cardRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                setCurrentIndex(newIndex);
                gsap.fromTo(
                    cardRef.current,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: () => setIsAnimating(false)
                    }
                );
            }
        });
    }, [isAnimating]);

    const goToNext = useCallback(() => {
        const newIndex = (currentIndex + 1) % testimonials.length;
        animateTransition(newIndex);
    }, [currentIndex, testimonials.length, animateTransition]);

    const goToPrev = useCallback(() => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        animateTransition(newIndex);
    }, [currentIndex, testimonials.length, animateTransition]);

    const goToIndex = useCallback((index: number) => {
        if (index !== currentIndex) {
            animateTransition(index);
        }
    }, [currentIndex, animateTransition]);

    const resetAutoRotate = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(goToNext, AUTO_ROTATE_INTERVAL);
    }, [goToNext]);

    useEffect(() => {
        if (isVisible && cardRef.current && showCarousel) {
            gsap.fromTo(
                cardRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );
        }
    }, [isVisible, showCarousel]);

    useEffect(() => {
        if (showCarousel && testimonials.length > 1) {
            intervalRef.current = setInterval(goToNext, AUTO_ROTATE_INTERVAL);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [goToNext, testimonials.length, showCarousel]);

    const handleNavClick = (index: number) => {
        goToIndex(index);
        resetAutoRotate();
    };

    const handlePrevClick = () => {
        goToPrev();
        resetAutoRotate();
    };

    const handleNextClick = () => {
        goToNext();
        resetAutoRotate();
    };

    // Grid layout for 3 or fewer testimonials
    if (!showCarousel) {
        return (
            <section className={`${styles.section} section`} ref={ref}>
                <div className="container">
                    <h2 className="section-title">
                        {content.HOME_PAGE.TESTIMONIALS.TITLE}
                    </h2>

                    <div className={styles.gridWrapper}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {testimonial.image && (
                                    <div className={styles.imageWrapper}>
                                        <img src={testimonial.image} alt={testimonial.author} className={styles.image} />
                                    </div>
                                )}
                                <p className={styles.quote}>
                                    "{testimonial.content}"
                                </p>
                                <div className={styles.author}>
                                    <span className={styles.name}>{testimonial.author}</span>
                                    <span className={styles.role}>
                                        {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Carousel layout for more than 3 testimonials
    return (
        <section className={`${styles.section} section`} ref={ref}>
            <div className="container">
                <h2 className="section-title">
                    {content.HOME_PAGE.TESTIMONIALS.TITLE}
                </h2>

                <div className={styles.testimonialWrapper}>
                    <div className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`} ref={cardRef}>
                        {testimonial.image && (
                            <div className={styles.imageWrapper}>
                                <img src={testimonial.image} alt={testimonial.author} className={styles.image} />
                            </div>
                        )}
                        <p className={styles.quote}>
                            "{testimonial.content}"
                        </p>
                        <div className={styles.author}>
                            <span className={styles.name}>{testimonial.author}</span>
                            <span className={styles.role}>
                                {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                            </span>
                        </div>
                    </div>

                    {testimonials.length > 1 && (
                        <div className={styles.navigation}>
                            <button
                                className={styles.navButton}
                                onClick={handlePrevClick}
                                aria-label="Previous testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            <div className={styles.dots}>
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                                        onClick={() => handleNavClick(index)}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                className={styles.navButton}
                                onClick={handleNextClick}
                                aria-label="Next testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
