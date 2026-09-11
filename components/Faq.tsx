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
                    <p className="fs-5 mb-0 text-opacity-70">Saiba como funciona o processo de criação do seu site, do primeiro contato à entrega.</p>
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
                      Quais serviços você oferece?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Crio landing pages, sites institucionais e interfaces para negócios que querem vender mais pela
                      internet. Também faço otimização de sites que já existem.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Quanto tempo leva um projeto?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Uma landing page costuma ficar pronta em 7 a 15 dias. Sites institucionais levam em média de 3 a 5
                      semanas, dependendo do número de páginas.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Os sites são personalizados ou usam template?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Todo projeto é desenhado do zero a partir da sua marca e dos seus objetivos. Nada de layout
                      genérico.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      Quanto custa um site?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">O valor depende do tipo de projeto e do que ele precisa. Me chame no WhatsApp com uma descrição do
                      que você imagina e envio um orçamento sem compromisso.</div>
                  </div>
                </div>
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fs-8 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Você dá suporte depois da entrega?
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 fs-5 text-dark">Sim. Acompanho a publicação, ensino a fazer atualizações simples e ofereço planos de manutenção para
                      quem precisa de ajustes frequentes.</div>
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
