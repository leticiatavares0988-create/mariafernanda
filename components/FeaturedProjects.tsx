'use client';

import { useEffect, useRef } from 'react';

const projects = [
  { image: '/assets/images/portfolio/andreia-eiras.jpg', title: 'Andréia Eiras', tags: ['Landing page', 'Fisioterapia'], url: 'https://andreia-eiras.vercel.app' },
  { image: '/assets/images/portfolio/isabella-de-luna.jpg', title: 'Isabella de Luna', tags: ['Landing page', 'Psicologia'], url: 'https://isabelladelunapsicologa.vercel.app' },
  { image: '/assets/images/portfolio/mafer-petsitter.jpg', title: 'Mafer Petsitter', tags: ['Landing page', 'Pet care'], url: 'https://maferpetsitter.framer.website/' },
  { image: '/assets/images/portfolio/em-breve.svg', title: 'Em breve', tags: ['Novo projeto'], url: '#contact' },
  { image: '/assets/images/portfolio/em-breve.svg', title: 'Em breve', tags: ['Novo projeto'], url: '#contact' },
  { image: '/assets/images/portfolio/em-breve.svg', title: 'Em breve', tags: ['Novo projeto'], url: '#contact' },
];

export default function FeaturedProjects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const media = window.matchMedia('(min-width: 992px)');
    let distance = 0;

    const measure = () => {
      if (!media.matches) {
        wrapper.style.height = '';
        track.style.transform = '';
        return;
      }
      distance = Math.max(track.scrollWidth - track.clientWidth, 0);
      wrapper.style.height = `${window.innerHeight + distance}px`;
      update();
    };

    const update = () => {
      if (!media.matches || distance === 0) return;
      const top = wrapper.getBoundingClientRect().top;
      const progress = Math.min(Math.max(-top / distance, 0), 1);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    measure();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', measure);
    media.addEventListener('change', measure);
    const images = Array.from(track.querySelectorAll('img'));
    images.forEach((img) => img.addEventListener('load', measure));
    // re-measure when fonts load or the track/cards change size
    if (document.fonts) document.fonts.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    Array.from(track.children).forEach((el) => ro.observe(el));

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', measure);
      media.removeEventListener('change', measure);
      images.forEach((img) => img.removeEventListener('load', measure));
      ro.disconnect();
    };
  }, []);

  return (
    <section id="portfolio" className="featured-projects bg-light-gray">
      <div ref={wrapperRef} className="projects-wrapper">
        <div className="projects-sticky d-flex flex-column justify-content-center py-5 py-lg-11 py-xl-12">
          <div className="container">
            <div className="row gap-7 gap-xl-0">
              <div className="col-xl-4 col-xxl-4">
                <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                  data-aos-duration="1000">
                  <span
                    className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">02</span>
                  <hr className="border-line" />
                  <span className="badge text-bg-dark">Portfólio</span>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7">
                <div className="row">
                  <div className="col-xxl-8">
                    <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                      data-aos-duration="1000">
                      <h2 className="mb-0">Projetos em <span className="text-gradient">destaque</span></h2>
                      <p className="fs-5 mb-0">Um pouco do que já criei: sites e landing pages que passam confiança e trazem novos clientes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-projects-slider projects-viewport container">
            <div ref={trackRef} className="projects-track d-flex">
              {projects.map((project, index) => (
                <div key={index} className="projects-item flex-shrink-0">
                  <div className="portfolio d-flex flex-column gap-6">
                    <div className="portfolio-img position-relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="img-fluid" />
                      <div className="portfolio-overlay">
                        <a href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                          aria-label={`Ver projeto ${project.title}`}
                          className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                          <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-details d-flex flex-column gap-3">
                      <h3 className="mb-0">{project.title}</h3>
                      <div className="hstack gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="badge text-dark border">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
