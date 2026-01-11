import { useEffect } from 'react'
import { Link } from 'wouter';
import './App.css'

function App() {
  const whatsappMessage = encodeURIComponent(
    'I want to book a free session, what time are you available?',
  )
  const whatsappUrl = `https://wa.me/971528750021?text=${whatsappMessage}`


  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))


    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <a className="logo" href={'#home'}>Ahmed Hamza</a>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <Link href="/book a meeting" className="btn-primary">
            Book a free meeting
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content reveal" data-reveal>
            <h1 className="hero-title">Master English for exams, work, and real life.</h1>
            <p className="hero-description">IELTS, TOEFL & SAT preparation, professional English, and everyday english.</p>
            <Link href="/book a meeting" className="btn-primary">
              Book a free meeting
            </Link>
          </div>
          <div className="hero-image reveal reveal-delay-1" data-reveal>
            <div className="profile-placeholder">
              <img className="profile-img" src="/ahmed.png" alt="Ahmed Hamza" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="stats-bar">
        <div className="stats-card reveal" data-reveal>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years of Teaching</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">78,900+</div>
              <div className="stat-label">Tiktok followers</div>
            </div>
          </div>
        </div>
      </section>

      {/* How Classes Work Section */}
      <section className="how-it-works" id="about">
        <div className="section-container">
          <h2 className="section-title reveal" data-reveal>
            How do our classes work?
          </h2>
          <div className="steps-container">
            <div className="step-box step-box-large reveal" data-reveal>
              <div className="step-content">
                <h3 className="step-title">Step 1 - Initial meeting</h3>
                <p className="step-description">Schedule classes and discuss your goals</p>
              </div>
            </div>
            <div className="step-box reveal reveal-delay-1" data-reveal>
              <div className="step-content">
                <h3 className="step-title">Step 2 - Personalized Curriculum</h3>
                <p className="step-description">Receive feedback and tailored lesson plans</p>
              </div>
            </div>
            <div className="step-box reveal reveal-delay-2" data-reveal>
              <div className="step-content">
                <h3 className="step-title">Step 3 - Track Progress & Reach Goals</h3>
                <p className="step-description">Regular feedback and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-container">
          <h2 className="section-title reveal" data-reveal>
            Services
          </h2>
          <div className="services-grid">
            <button className="service-btn reveal" data-reveal>
              IELTS Preparation
            </button>
            <button className="service-btn reveal reveal-delay-1" data-reveal>
              SAT Preparation
            </button>
            <button className="service-btn reveal reveal-delay-2" data-reveal>
              TOEFL Preparation
            </button>
            <button className="service-btn reveal reveal-delay-3" data-reveal>
              Business English
            </button>
          </div>
        </div>
      </section>

      {/* Why Learn with Ahmed Section */}
      <section className="why-learn">
        <div className="section-container">
          <h2 className="section-title reveal" data-reveal>
            Why learn with Ahmed?
          </h2>
          <div className="benefits-box reveal" data-reveal>
            <ul className="benefits-list">
              <li>20+ years teaching experience</li>
              <li>500+ students helped</li>
              <li>Personalized lesson plans</li>
              <li>Clear exam strategies</li>
              <li>Friendly, supportive teaching style</li>
              <li>78.1k TikTok followers</li>
              <li>5.9k followers on YouTube</li>
              <li>Proven strategies</li>
            </ul>
          </div>
        </div>
      </section>

  {/*new section */}
      <section className="why-learn">
        <div className="section-container">
          <h2 className="section-title reveal" data-reveal>
            What to Expect in Your First Trial Lesson
          </h2>
          <p className={"benefits-box2"}>
            <h2 className={"first-h2"}>How long is the free trial lesson?</h2>
            The free trial lesson lasts 20–30 minutes and is conducted online via Zoom.<br/>
            <h3>What happens during the trial lesson?</h3>

            <li>Level Assessment: A quick check to gauge your proficiency and learning needs.</li>
            <li>Goal Discussion: We’ll discuss your goals, whether for IELTS, TOEFL, SAT, general English, or university-level English.</li>
            <li>Teaching Demo: A mini lesson tailored to your level and goals to showcase my teaching style.</li>

            <h3>Why is the Trial Lesson Beneficial?</h3>
            <ul>
              <li>Clarity on Your English Level: Understand your skills in speaking and writing.</li>
              <li>Personalized Learning Path: Get recommendations based on your goals.</li>
              <li>Engaging Demo: Experience how my approach adapts to your needs.</li>
            </ul>
          </p>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="reviews">
        <div className="section-container">
          <h2 className="section-title reveal" data-reveal>
            What do our students say?
          </h2>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal" data-reveal>
              <p className="testimonial-quote">"I got a 7 overall after Mr Ahmed taught me. His strategies made the difference!"</p>
              <div className="testimonial-meta">
                <div className="avatar">A</div>
                <div className="meta-text">
                  <div className="student-name">Ali S.</div>
                  <div className="exam-tag">IELTS</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-1" data-reveal>
              <p className="testimonial-quote">"I improved my speaking confidence and scored 100 on TOEFL."</p>
              <div className="testimonial-meta">
                <div className="avatar">M</div>
                <div className="meta-text">
                  <div className="student-name">Mariam K.</div>
                  <div className="exam-tag">TOEFL</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-2" data-reveal>
              <p className="testimonial-quote">"Clear, practical lessons. I reached my SAT target in 4 weeks."</p>
              <div className="testimonial-meta">
                <div className="avatar">H</div>
                <div className="meta-text">
                  <div className="student-name">Hassan R.</div>
                  <div className="exam-tag">SAT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-container reveal" data-reveal>
          <div className="cta-text">
            <h3 className="cta-title">Ready to improve your English?</h3>
            <p className="cta-subtitle">Book a free meeting and start your journey today.</p>
          </div>
          <a className="btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Book a free meeting
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-brand">Ahmed Hamza</h3>
            <p className="footer-tagline">
              Your trusted partner in mastering English for exams, work, and everyday life.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.tiktok.com/@mr.ahmad.hamza" className="social-icon" aria-label="TikTok" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@EnglishwithAhmadYLW" className="social-icon" aria-label="YouTube" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1C8JgpaLVf" className="social-icon" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/english.with.ahmad4" className="social-icon" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://t.me/V1Z8tSWa9c8zNWFk" className="social-icon" aria-label="Telegram" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ahmed Hamza. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
