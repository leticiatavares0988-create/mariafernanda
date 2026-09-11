export default function Faq() {
  return (
    <section id="faq" className="faq py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">06</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">Dúvidas</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-9">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Perguntas frequentes</h2>
                    <p className="fs-5 mb-0 text-opacity-70">Respostas para as dúvidas mais comuns de profissionais e empresas que querem ter presença online
                      de verdade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-8">
              <div className="accordion accordion-flush" id="accordionFlushExample" data-aos="fade-up" data-aos-delay="200"
                data-aos-duration="1000">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Para quem você cria sites?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Para profissionais e empresas que dependem de confiança para fechar clientes: psicólogos, médicos,
                      dentistas, advogados, clínicas, consultórios e negócios locais. Crio landing pages e sites
                      institucionais que apresentam o seu trabalho e facilitam o agendamento ou o contato.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Quanto tempo leva para o meu site ficar pronto?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Uma landing page fica pronta em 3 a 7 dias. Um site institucional completo, com páginas de
                      serviços, sobre e contato, leva um pouco mais, dependendo do número de páginas. Você acompanha
                      cada etapa.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Preciso ter textos e fotos prontos?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Não. Eu te ajudo a organizar o que dizer sobre os seus serviços e indico o que funciona melhor em
                      fotos. Se você já tiver material, ótimo, aproveitamos tudo.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      Quanto custa um site para consultório ou clínica?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Depende do tamanho do projeto: uma landing page para captar pacientes tem um valor, um site com
                      várias especialidades tem outro. Me chame no WhatsApp contando sobre o seu negócio e envio um
                      orçamento sem compromisso.</div>
                  </div>
                </div>
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      O site vai aparecer no Google e funcionar no celular?
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Sim. Todo site sai otimizado para celular, com carregamento rápido e a estrutura que o Google
                      espera. Depois da publicação, continuo disponível para ajustes e ofereço planos de manutenção
                      para quem precisa de atualizações frequentes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
