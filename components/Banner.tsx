export default function Banner() {
  return (
    <section className="banner-section position-relative d-flex align-items-end min-vh-100">
      <video className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" autoPlay muted loop playsInline>
        <source src="/assets/images/backgrounds/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="d-flex flex-column gap-4 pb-8 pb-lg-12 position-relative z-1">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                <img src="/assets/images/svgs/leaf-primary.svg" alt="" className="img-fluid animate-spin" />
                <p className="mb-0 text-white fs-5 text-opacity-70">Crio <span
                    className="text-primary">sites e landing pages</span> que transformam visitantes em clientes e
                  fazem sua marca vender mais.</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h1 className="mb-0 fs-16 text-white lh-1">Maria Fernanda<span className="text-primary">.</span></h1>
            <a href="#contact" className="p-1 ps-7 bg-primary rounded-pill" aria-label="Ir para contato">
              <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
