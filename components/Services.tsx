export default function Services() {
  return (
    <section className="services py-5 py-lg-11 py-xl-12 bg-dark" id="services">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">03</span>
                <hr className="border-line bg-white" />
                <span className="badge text-dark bg-white">Serviços</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0 text-white">O que eu faço</h2>
                    <p className="fs-5 mb-0 text-white text-opacity-70">Do primeiro rascunho à publicação, cuido de cada etapa para o seu site ficar bonito, rápido e
                      pronto para vender.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-tab">
            <div className="row gap-5 gap-xl-0">
              <div className="col-xl-4">
                <div className="tab-content" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                  <div className="tab-pane active" id="one" role="tabpanel" aria-labelledby="one-tab" tabIndex={0}>
                    <img src="/assets/images/portfolio/em-breve.svg" alt="Imagem em breve" className="img-fluid" />
                  </div>
                  <div className="tab-pane" id="two" role="tabpanel" aria-labelledby="two-tab" tabIndex={0}>
                    <img src="/assets/images/portfolio/em-breve.svg" alt="Imagem em breve" className="img-fluid" />
                  </div>
                  <div className="tab-pane" id="four" role="tabpanel" aria-labelledby="four-tab" tabIndex={0}>
                    <img src="/assets/images/portfolio/em-breve.svg" alt="Imagem em breve" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="d-flex flex-column gap-5">
                  <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-delay="200"
                    data-aos-duration="1000">
                    <li
                      className="nav-item py-4 py-lg-8 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                      role="presentation">
                      <div className="row w-100 align-items-center gx-3">
                        <div className="col-lg-6 col-xxl-5">
                          <button className="nav-link fs-10 fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0 active"
                            id="one-tab" data-bs-toggle="tab" data-bs-target="#one" type="button" role="tab"
                            aria-controls="one" aria-selected="true">Landing pages</button>
                        </div>
                        <div className="col-lg-6 col-xxl-7">
                          <p className="text-white text-opacity-70 mb-0">
                            Páginas focadas em um único objetivo: fazer o paciente ou cliente agendar, pedir orçamento ou
                            chamar no WhatsApp, com texto e layout pensados para converter.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className="nav-item py-4 py-lg-8 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                      role="presentation">
                      <div className="row w-100 align-items-center gx-3">
                        <div className="col-lg-6 col-xxl-5">
                          <button className="nav-link fs-10 fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0" id="two-tab"
                            data-bs-toggle="tab" data-bs-target="#two" type="button" role="tab" aria-controls="two"
                            aria-selected="false">Sites institucionais</button>
                        </div>
                        <div className="col-lg-6 col-xxl-7">
                          <p className="text-white text-opacity-70 mb-0">
                            Sites completos para consultórios, clínicas e empresas apresentarem seus serviços com
                            profissionalismo, fáceis de navegar em qualquer dispositivo.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      className="nav-item py-4 py-lg-8 border-top border-white border-opacity-10 d-flex align-items-center w-100"
                      role="presentation">
                      <div className="row w-100 align-items-center gx-3">
                        <div className="col-lg-6 col-xxl-5">
                          <button className="nav-link fs-10 fw-bold py-1 px-0 border-0 rounded-0 flex-shrink-0"
                            id="four-tab" data-bs-toggle="tab" data-bs-target="#four" type="button" role="tab"
                            aria-controls="four" aria-selected="false">Otimização e SEO</button>
                        </div>
                        <div className="col-lg-6 col-xxl-7">
                          <p className="text-white text-opacity-70 mb-0">
                            Ajustes de velocidade, estrutura e conteúdo para o seu site carregar rápido e aparecer melhor no
                            Google.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a href="#portfolio" className="btn border border-white border-opacity-25" data-aos="fade-up"
                    data-aos-delay="300" data-aos-duration="1000">
                    <span className="btn-text">Ver meus trabalhos</span>
                    <iconify-icon icon="lucide:arrow-up-right"
                      className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
