// Reviews, Contact, Footer, Booking modal
const { useState: useState3, useEffect: useEffect3 } = React;

function Reviews({ t }) {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__head">
        <div className="eyebrow">{t.reviews.eyebrow}</div>
        <h2 className="section__title">{t.reviews.title}</h2>
      </div>
      <div className="reviews__grid">
        {t.reviews.items.map((r, i) => (
          <div key={i} className="reviewCard" style={{animationDelay: `${i * 80}ms`}}>
            <div className="reviewCard__stars">
              {Array.from({length: r.rating}).map((_, j) => <span key={j}>★</span>)}
            </div>
            <p className="reviewCard__text">"{r.text}"</p>
            <div className="reviewCard__author">
              <div className="reviewCard__avatar">{r.name.charAt(0)}</div>
              <div className="reviewCard__name">{r.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ t, onBook }) {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__copy">
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="section__sub">{t.contact.sub}</p>

          <div className="contact__items">
            <div className="contactItem">
              <div className="contactItem__lab">{t.contact.addressLab}</div>
              <div className="contactItem__val">Njegoševa 18<br/>Podgorica, Crna Gora</div>
            </div>
            <div className="contactItem">
              <div className="contactItem__lab">{t.contact.phoneLab}</div>
              <a className="contactItem__val contactItem__link" href="tel:+38220665625">+382 20 665 625</a>
            </div>
            <div className="contactItem">
              <div className="contactItem__lab">{t.contact.mobileLab}</div>
              <a className="contactItem__val contactItem__link" href="tel:+38269642892">+382 69 642 892</a>
            </div>
            <div className="contactItem">
              <div className="contactItem__lab">{t.contact.emailLab}</div>
              <a className="contactItem__val contactItem__link" href="mailto:extradentpodgorica@gmail.com">extradentpodgorica@gmail.com</a>
            </div>
            <div className="contactItem contactItem--wide">
              <div className="contactItem__lab">{t.contact.hoursLab}</div>
              <div className="contactItem__val">{t.contact.hours}<br/><span className="contactItem__valDim">{t.contact.hoursWeekend}</span></div>
            </div>
          </div>

          <div className="contact__ctas contact__ctas--mobile">
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
          <a className="contact__ig" href="https://www.instagram.com/extradent_podgorica/" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            @extradent_podgorica
          </a>
        </div>
        <div className="contact__map">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.260%2C42.435%2C19.275%2C42.448&layer=mapnik&marker=42.4415%2C19.2675"
            title="Extradent — Podgorica"
            style={{border: 0, width: '100%', height: '100%'}}
            loading="lazy"
          />
          <div className="contact__mapOverlay">
            <div className="contact__mapPin">
              <img src="images/logo-clean.png?v=4" alt="" />
            </div>
            <div>
              <div className="contact__mapTitle">Extradent</div>
              <div className="contact__mapAddr">Njegoševa 18, Podgorica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="images/logo-clean.png?v=4" alt="Extradent" />
          <div>
            <div className="footer__name">EXTRADENT</div>
            <div className="footer__tag">{t.footer.tagline}</div>
          </div>
        </div>
        <div className="footer__cols">
          <div>
            <div className="footer__col">{t.contact.addressLab}</div>
            <div className="footer__line">Njegoševa 18, Podgorica</div>
          </div>
          <div>
            <div className="footer__col">{t.contact.phoneLab}</div>
            <a className="footer__line" href="tel:+38220665625">+382 20 665 625</a>
            <a className="footer__line" href="tel:+38269642892">+382 69 642 892</a>
          </div>
          <div>
            <div className="footer__col">{t.contact.emailLab}</div>
            <a className="footer__line" href="mailto:extradentpodgorica@gmail.com">extradentpodgorica@gmail.com</a>
            <a className="footer__line" href="https://www.instagram.com/extradent_podgorica/" target="_blank" rel="noopener">@extradent_podgorica</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Extradent. {t.footer.rights}</span>
        <span className="footer__made">{t.footer.made}</span>
      </div>
    </footer>
  );
}

function BookingModal({ open, onClose, t }) {
  const [step, setStep] = useState3(0);
  const [data, setData] = useState3({ service: '', date: '', time: '', name: '', phone: '', note: '' });
  const [done, setDone] = useState3(false);

  useEffect3(() => {
    if (open) { setStep(0); setDone(false); setData({ service: '', date: '', time: '', name: '', phone: '', note: '' }); }
  }, [open]);

  if (!open) return null;

  const services = [
    'Konsultacije', 'Estetska stomatologija', 'Bijeljenje zuba', 'Implantologija',
    'Hijaluronski fileri (usne)', 'Botoks', 'Konturisanje lica', 'Mezoterapija',
  ];
  const times = ['09:00','10:30','12:00','14:00','15:30','17:00','18:30','20:00'];

  const next = () => setStep(s => Math.min(s+1, 3));
  const back = () => setStep(s => Math.max(s-1, 0));
  const submit = () => setDone(true);

  const canNext = (
    (step === 0 && data.service) ||
    (step === 1 && data.date && data.time) ||
    (step === 2 && data.name && data.phone)
  );

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        {!done ? (
          <>
            <div className="modal__head">
              <div className="eyebrow">Zakažite termin</div>
              <h3 className="modal__title">Korak {step+1} / 3</h3>
              <div className="modal__progress">
                <div className="modal__progressBar" style={{width: `${((step+1)/3)*100}%`}}></div>
              </div>
            </div>
            <div className="modal__body">
              {step === 0 && (
                <div>
                  <div className="modal__label">Izaberite uslugu</div>
                  <div className="modal__chips">
                    {services.map(s => (
                      <button
                        key={s}
                        className={`chip ${data.service === s ? 'is-active' : ''}`}
                        onClick={() => setData({...data, service: s})}
                      >{s}</button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="modal__col">
                  <div>
                    <div className="modal__label">Datum</div>
                    <input
                      type="date"
                      className="modal__input"
                      value={data.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setData({...data, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <div className="modal__label">Vrijeme</div>
                    <div className="modal__chips">
                      {times.map(tt => (
                        <button
                          key={tt}
                          className={`chip ${data.time === tt ? 'is-active' : ''}`}
                          onClick={() => setData({...data, time: tt})}
                        >{tt}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="modal__col">
                  <div>
                    <div className="modal__label">Ime i prezime</div>
                    <input className="modal__input" value={data.name} onChange={e => setData({...data, name: e.target.value})} placeholder="Vaše ime" />
                  </div>
                  <div>
                    <div className="modal__label">Telefon / WhatsApp</div>
                    <input className="modal__input" value={data.phone} onChange={e => setData({...data, phone: e.target.value})} placeholder="+382 ..." />
                  </div>
                  <div>
                    <div className="modal__label">Napomena (opciono)</div>
                    <textarea className="modal__input" rows={3} value={data.note} onChange={e => setData({...data, note: e.target.value})} placeholder="Pitanja, posebne napomene..." />
                  </div>
                </div>
              )}
            </div>
            <div className="modal__foot">
              {step > 0 ? <button className="btn btn--ghost btn--sm" onClick={back}>Nazad</button> : <span />}
              {step < 2
                ? <button className="btn btn--gold btn--sm" disabled={!canNext} onClick={next}>Dalje →</button>
                : <button className="btn btn--gold btn--sm" disabled={!canNext} onClick={submit}>Pošalji zahtjev ✓</button>}
            </div>
          </>
        ) : (
          <div className="modal__success">
            <div className="modal__successIcon">✓</div>
            <h3 className="modal__title">Hvala vam!</h3>
            <p className="modal__successText">
              Vaš zahtjev za <b>{data.service}</b> {data.date && `dana ${data.date} u ${data.time}`} je primljen.
              <br/>Javljamo vam se u najkraćem roku na <b>{data.phone}</b>.
            </p>
            <button className="btn btn--gold btn--sm" onClick={onClose}>U redu</button>
          </div>
        )}
      </div>
    </div>
  );
}

window.Reviews = Reviews;
window.Contact = Contact;
window.Footer = Footer;
window.BookingModal = BookingModal;
