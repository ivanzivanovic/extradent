// Main App
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [lang, setLang] = useStateApp('sr');
  const [bookOpen, setBookOpen] = useStateApp(false);
  const t = window.TRANSLATIONS[lang];

  // Smooth scroll
  useEffectApp(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Reveal on scroll
  useEffectApp(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} onBook={() => setBookOpen(true)} />
      <Hero t={t} onBook={() => setBookOpen(true)} />
      <About t={t} />
      <ServiceGrid id="dental" t={t} data={t.dental} accent="dental" />
      <ServiceGrid id="aesthetic" t={t} data={t.aesthetic} accent="aesthetic" />
      <Gallery t={t} />
      <Reviews t={t} />
      <Contact t={t} onBook={() => setBookOpen(true)} />
      <Footer t={t} />
      <HeroQuickBar />
      <BookingModal open={bookOpen} onClose={() => setBookOpen(false)} t={t} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
