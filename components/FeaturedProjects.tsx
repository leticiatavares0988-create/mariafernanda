'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const projects = [
  { image: '/assets/images/portfolio/portfolio-img-1.jpg', title: 'Snapclear', tags: ['UX Strategy', 'UI Design'] },
  { image: '/assets/images/portfolio/portfolio-img-2.jpg', title: 'Amber Bottle', tags: ['Web development', 'Digital design'] },
  { image: '/assets/images/portfolio/portfolio-img-3.jpg', title: 'Pixelforge', tags: ['UI/UX design', 'Web development'] },
  { image: '/assets/images/portfolio/portfolio-img-4.jpg', title: 'BioTrack LIMS', tags: ['Brand identity', 'Digital design'] },
  { image: '/assets/images/portfolio/portfolio-img-5.jpg', title: 'Amber Bottle', tags: ['Photography', 'Studio'] },
  { image: '/assets/images/portfolio/portfolio-img-6.jpg', title: 'Digital Magazine', tags: ['Digital design', 'Web development'] },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="featured-projects py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="d-flex flex-column gap-5 gap-xl-11">
        <div className="container">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">02</span>
                <hr className="border-line" />
                <span className="badge text-bg-dark">Portfolio</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Featured projects</h2>
                    <p className="fs-5 mb-0">A glimpse into our creativity—exploring innovative designs, successful
                      collaborations, and transformative digital experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-projects-slider px-3">
          <Swiper
            modules={[Autoplay]}
            centeredSlides
            loop
            spaceBetween={30}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {[...projects, ...projects].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio d-flex flex-column gap-6">
                  <div className="portfolio-img position-relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                    <div className="portfolio-overlay">
                      <a href="#portfolio"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
