export default function StatsFacts() {
  return (
    <section className="stats-facts py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
      <div className="container">
        <div className="row gap-7 gap-xl-0">
          <div className="col-xl-4 col-xxl-4">
            <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
              data-aos-duration="1000">
              <span
                className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">01</span>
              <hr className="border-line" />
              <span className="badge text-bg-dark">Números</span>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-7">
            <div className="d-flex flex-column gap-9">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Sites bem feitos, pensados para vender.</h2>
                    <p className="fs-5 mb-0">Psicólogos, médicos, clínicas, advogados e negócios locais: crio sites que passam confiança e
                      transformam quem pesquisa no Google em quem agenda um horário.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-7 mb-lg-0">
                  <div className="d-flex flex-column gap-6 pt-9 border-top" data-aos="fade-up" data-aos-delay="200"
                    data-aos-duration="1000">
                    <h2 className="mb-0 fs-14">+<span className="count" data-target="2">2</span></h2>
                    <p className="mb-0">Anos criando para a web</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-7 mb-lg-0">
                  <div className="d-flex flex-column gap-6 pt-9 border-top" data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="1000">
                    <h2 className="mb-0 fs-14"><span className="count" data-target="100">100</span>%</h2>
                    <p className="mb-0">Dos clientes satisfeitos</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-7 mb-lg-0">
                  <div className="d-flex flex-column gap-6 pt-9 border-top" data-aos="fade-up" data-aos-delay="400"
                    data-aos-duration="1000">
                    <h2 className="mb-0 fs-14"><span className="count" data-target="7">7</span> dias</h2>
                    <p className="mb-0">Prazo máximo de entrega da primeira versão de uma landing page</p>
                  </div>
                </div>
              </div>
              <a href="#about" className="btn" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                <span className="btn-text">Quem sou eu</span>
                <iconify-icon icon="lucide:arrow-up-right"
                  className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 start-0" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
        <img src="/assets/images/backgrounds/paw-outline.svg" alt="" className="img-fluid" />
      </div>
    </section>
  );
}
