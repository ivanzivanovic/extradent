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
        <p>{t.hero.sub}</p>
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
