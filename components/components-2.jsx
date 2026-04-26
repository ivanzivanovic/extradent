// Services (dental + aesthetic), Before/After gallery
const { useState: useState2, useRef: useRef2, useEffect: useEffect2 } = React;

function ServiceGrid({ id, t, data, accent }) {
  return (
    <section id={id} className={`services services--${accent}`}>
      <div className="services__head">
        <div className="eyebrow">{data.eyebrow}</div>
        <h2 className="section__title">{data.title}</h2>
        <p className="section__sub">{data.sub}</p>
      </div>
      <div className="services__grid">
        {data.items.map((item, i) => (
          <div key={i} className="serviceCard">
            <div className="serviceCard__num">0{i+1}</div>
            <div className="serviceCard__body">
              <h3 className="serviceCard__title">{item.t}</h3>
              <p className="serviceCard__desc">{item.d}</p>
            </div>
            <div className="serviceCard__arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter({ before, after, labels }) {
  const [pos, setPos] = useState2(50);
  const wrapRef = useRef2(null);
  const dragRef = useRef2(false);

  const onMove = (clientX) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect2(() => {
    const mm = (e) => { if (dragRef.current) onMove(e.clientX); };
    const tm = (e) => { if (dragRef.current && e.touches[0]) onMove(e.touches[0].clientX); };
    const up = () => { dragRef.current = false; };
    window.addEventListener('mousemove', mm);
    window.addEventListener('touchmove', tm);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('touchmove', tm);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, []);

  return (
    <div
      className="ba"
      ref={wrapRef}
      onMouseDown={(e) => { dragRef.current = true; onMove(e.clientX); }}
      onTouchStart={(e) => { dragRef.current = true; if (e.touches[0]) onMove(e.touches[0].clientX); }}
    >
      <img src={before} alt="" className="ba__img" />
      <div className="ba__afterWrap" style={{clipPath: `inset(0 0 0 ${pos}%)`}}>
        <img src={after} alt="" className="ba__img" />
      </div>
      <div className="ba__labels">
        <span className="ba__label ba__label--before">{labels.before}</span>
        <span className="ba__label ba__label--after">{labels.after}</span>
      </div>
      <div className="ba__handle" style={{left: `${pos}%`}}>
        <div className="ba__handleLine"></div>
        <div className="ba__handleKnob">
          <span>‹</span><span>›</span>
        </div>
      </div>
    </div>
  );
}

function Gallery({ t }) {
  const cases = [
    { before: "assets/case-5-before.jpg",  after: "assets/case-5-after.jpg",  cat: "dental",    title: t.gallery.cases[0].title, tag: t.gallery.cases[0].tag },
    { before: "assets/case-9-before.jpg",  after: "assets/case-9-after.jpg",  cat: "dental",    title: t.gallery.cases[3].title, tag: t.gallery.cases[3].tag },
    { before: "assets/case-11-before.jpg", after: "assets/case-11-after.jpg", cat: "dental",    title: t.gallery.cases[4].title, tag: t.gallery.cases[4].tag },
    { before: "assets/case-7-before.jpg",  after: "assets/case-7-after.jpg",  cat: "aesthetic", title: t.gallery.cases[1].title, tag: t.gallery.cases[1].tag },
    { before: "assets/case-3-before.jpg",  after: "assets/case-3-after.jpg",  cat: "aesthetic", title: t.gallery.cases[2].title, tag: t.gallery.cases[2].tag },
    { before: "assets/case-10-before.jpg", after: "assets/case-10-after.jpg", cat: "aesthetic", title: t.gallery.cases[5].title, tag: t.gallery.cases[5].tag },
  ];
  const [filter, setFilter] = useState2('all');
  const [idx, setIdx] = useState2(0);
  const filtered = filter === 'all' ? cases : cases.filter(c => c.cat === filter);
  const safeIdx = Math.min(idx, filtered.length - 1);
  const current = filtered[safeIdx];

  useEffect2(() => { setIdx(0); }, [filter]);

  useEffect2(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft')  setIdx((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [filtered.length]);

  const filters = [
    { id: 'all',       label: t.gallery.filterAll },
    { id: 'dental',    label: t.gallery.filterDental },
    { id: 'aesthetic', label: t.gallery.filterAesthetic },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__head">
        <div className="eyebrow">{t.gallery.eyebrow}</div>
        <h2 className="section__title">{t.gallery.title}</h2>
        <p className="section__sub">{t.gallery.sub}</p>
      </div>
      <div className="gallery__filters">
        {filters.map(f => (
          <button
            key={f.id}
            className={`galleryFilter ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >{f.label}</button>
        ))}
      </div>
      <div className="gallerySlider">
        <button
          className="gallerySlider__nav gallerySlider__nav--prev"
          onClick={() => setIdx((i) => (i - 1 + filtered.length) % filtered.length)}
          aria-label="Prev"
        >‹</button>
        <button
          className="gallerySlider__nav gallerySlider__nav--next"
          onClick={() => setIdx((i) => (i + 1) % filtered.length)}
          aria-label="Next"
        >›</button>
        <div className="gallerySlider__stage" key={`${filter}-${safeIdx}`}>
          <BeforeAfter before={current.before} after={current.after} labels={t.gallery.labels} />
        </div>
        <div className="gallerySlider__meta">
          <div className="gallerySlider__metaLeft">
            <div className="gallerySlider__tag">{current.tag}</div>
            <div className="gallerySlider__title">{current.title}</div>
          </div>
          <div className="gallerySlider__count">{(safeIdx + 1).toString().padStart(2,'0')} / {filtered.length.toString().padStart(2,'0')}</div>
        </div>
        <div className="gallerySlider__dots">
          {filtered.map((_, i) => (
            <button
              key={i}
              className={`gallerySlider__dot ${i === safeIdx ? 'is-active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i+1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ServiceGrid = ServiceGrid;
window.Gallery = Gallery;
