// Hero, Nav, About sections
const { useState, useEffect, useRef } = React;

function Nav({ t, lang, setLang, onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  useEffect(() => {
    const onScroll = () => setScrolled(window.innerWidth > 768 && window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'dental', label: t.nav.dental },
    { id: 'aesthetic', label: t.nav.aesthetic },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'contact', label: t.nav.contact },
  ];
  const langs = [['sr','SR'],['en','EN'],['ru','RU'],['tr','TR']];
  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <img src="images/logo-clean.png?v=4" alt="Extradent" className="nav__logo" />
          <div className="nav__brandText">
            <span className="nav__brandName">EXTRADENT</span>
            <span className="nav__brandSub">dr Ivana Pejović Božović</span>
          </div>
        </a>
        <div className="nav__links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </div>
        <div className="nav__right">
          <div className="nav__lang">
            {langs.map(([code, label]) => (
              <button
                key={code}
                className={`nav__langBtn ${lang === code ? 'is-active' : ''}`}
                onClick={() => setLang(code)}
              >{label}</button>
            ))}
          </div>
          <button className={`nav__themeSwitch ${theme === 'dark' ? 'is-dark' : ''}`} onClick={toggleTheme} aria-label="Toggle theme">
            <svg className="nav__themeSwitchIcon nav__themeSwitchIcon--sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            <span className="nav__themeSwitchKnob"></span>
            <svg className="nav__themeSwitchIcon nav__themeSwitchIcon--moon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button className="btn btn--gold nav__cta" onClick={onBook}>{t.nav.book}</button>
          <button className="nav__menu" onClick={() => setOpen(!open)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {open && (
        <div className="nav__mobile">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <div className="nav__mobileLang">
            {langs.map(([code, label]) => (
              <button
                key={code}
                className={`nav__langBtn ${lang === code ? 'is-active' : ''}`}
                onClick={() => { setLang(code); setOpen(false); }}
              >{label}</button>
            ))}
          </div>
          <div className="nav__mobileTheme">
            <span className="nav__mobileThemeLabel">{theme === 'dark' ? 'Tamni mod' : 'Svetli mod'}</span>
            <button className={`nav__themeSwitch ${theme === 'dark' ? 'is-dark' : ''}`} onClick={toggleTheme} aria-label="Toggle theme">
              <svg className="nav__themeSwitchIcon nav__themeSwitchIcon--sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              <span className="nav__themeSwitchKnob"></span>
              <svg className="nav__themeSwitchIcon nav__themeSwitchIcon--moon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
          </div>
          <button className="btn btn--gold" onClick={() => { setOpen(false); onBook(); }}>{t.nav.book}</button>
        </div>
      )}
    </nav>
  );
}

function Hero({ t, onBook }) {
  return (
    <section id="top" className="hero">
      <div className="hero__bg">
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">{t.hero.eyebrow}</div>
          <h1 className="hero__title">
            <span className="hero__titleLine">{t.hero.title1}</span>
            <span className="hero__titleLine hero__titleLine--italic">{t.hero.title2}</span>
          </h1>
          <p className="hero__sub">{t.hero.sub}</p>
          <div className="hero__ctas">
            <button className="btn btn--gold" onClick={onBook}>{t.hero.cta1}</button>
            <a href="#dental" className="btn btn--ghost">{t.hero.cta2}</a>
          </div>
          <div className="hero__quickContact">
            <a className="contact__quickBtn contact__quickBtn--wa" href="https://wa.me/38269642892" target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.932-1.418A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.073-1.118l-.292-.173-3.031.872.85-3.097-.19-.302A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/></svg>
              WhatsApp
            </a>
            <a className="contact__quickBtn contact__quickBtn--viber" href="viber://chat?number=38269642892">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.996 2c-5.14 0-9.5 4.2-9.5 9.5 0 2.3.82 4.44 2.2 6.12L3 22l4.5-1.66A9.47 9.47 0 0 0 12 21.5c5.14 0 9.5-4.2 9.5-9.5S17.136 2 11.996 2zm4.68 13.27c-.22.62-1.08 1.14-1.76 1.28-.47.1-1.08.17-3.14-.67-2.62-1.06-4.3-3.72-4.43-3.89-.13-.17-1.1-1.46-1.1-2.79 0-1.33.7-1.98 .94-2.25.24-.27.53-.34.7-.34h.5c.16 0 .38-.06.59.45.22.53.73 1.79.8 1.92.07.13.11.28.02.45-.09.17-.13.27-.26.42-.13.14-.27.32-.39.43-.13.12-.26.25-.11.49.15.24.66 1.09 1.42 1.76 1 .88 1.82 1.15 2.07 1.28.25.13.39.11.53-.07.14-.17.61-.71.77-.95.16-.24.32-.2.54-.12.22.08 1.41.67 1.65.79.24.12.4.18.46.28.06.1.06.6-.16 1.22z"/></svg>
              Viber
            </a>
            <a className="contact__quickBtn contact__quickBtn--call" href="tel:+38269642892">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.94-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22.92 16z"/></svg>
              Pozovi
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__statNum">{t.hero.stat1Num}</div>
              <div className="hero__statLab">{t.hero.stat1Lab}</div>
            </div>
            <div className="hero__statDivider"></div>
            <div className="hero__stat">
              <div className="hero__statNum">{t.hero.stat2Num}</div>
              <div className="hero__statLab">{t.hero.stat2Lab}</div>
            </div>
            <div className="hero__statDivider"></div>
            <div className="hero__stat">
              <div className="hero__statNum">{t.hero.stat3Num}</div>
              <div className="hero__statLab">{t.hero.stat3Lab}</div>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__imageWrap">
            <img
              src="assets/hero-smile.png"
              alt=""
              className="hero__image"
            />
            <div className="hero__imageOverlay"></div>
          </div>
          <div className="hero__badge">
            <img src="images/logo-clean.png?v=4" alt="" />
            <div>
              <div className="hero__badgeTitle">Vivacy Paris</div>
              <div className="hero__badgeSub">Certified injector</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__marquee">
        <div className="hero__marqueeTrack">
          {Array.from({length: 2}).map((_, i) => (
            <div key={i} className="hero__marqueeGroup">
              <span>· Estetska stomatologija</span>
              <span>· Hijaluronski fileri</span>
              <span>· Smile design</span>
              <span>· Botoks</span>
              <span>· Implantologija</span>
              <span>· Konturisanje lica</span>
              <span>· Bijeljenje zuba</span>
              <span>· Mezoterapija</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="about">
      <div className="about__mobileIntro">
        <p>Extradent je privatna ordinacija dr Ivane Pejović Božović — sertifikovanog doktora stomatologije i estetske medicine. Vrhunska njega u srcu Podgorice, sa pažnjom prema svakom detalju vašeg lica i osmijeha.</p>
      </div>
      <div className="about__inner">
        <div className="about__visual">
          <div className="about__imageWrap">
            <img src="images/ivana-portrait.jpg" alt={t.about.name} className="about__image" />
            <div className="about__imageBorder"></div>
          </div>
          <div className="about__signature">
            <div className="about__sigName">Ivana Pejović Božović</div>
            <div className="about__sigRole">— Doctor & Founder</div>
          </div>
        </div>
        <div className="about__copy">
          <div className="eyebrow">{t.about.eyebrow}</div>
          <h2 className="section__title">{t.about.name}</h2>
          <div className="about__role">{t.about.role}</div>
          <p className="about__p">{t.about.p1}</p>
          <p className="about__p">{t.about.p2}</p>
          <ul className="about__creds">
            <li><span className="about__credDot"></span>{t.about.cred1}</li>
            <li><span className="about__credDot"></span>{t.about.cred2}</li>
            <li><span className="about__credDot"></span>{t.about.cred3}</li>
            <li><span className="about__credDot"></span>{t.about.cred4}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.About = About;
