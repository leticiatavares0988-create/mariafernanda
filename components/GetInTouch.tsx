export default function GetInTouch() {
  return (
    <section id="contact" className="get-in-touch py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">07</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">Contato</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Vamos <span className="text-gradient">conversar</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between gap-7 gap-xl-0">
            <div className="col-xl-3">
              <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Quer um site ou uma
                landing page que realmente venda? Me conte sobre o seu projeto e eu retorno
                rapidinho.</p>
            </div>
            <div className="col-xl-8">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <a href="https://wa.me/5518997056598?text=Ol%C3%A1%2C%20Maria%20Fernanda%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20meu%20site%20ou%20landing%20page." target="_blank" rel="noreferrer" className="btn">
                  <span className="btn-text">Chamar no WhatsApp</span>
                  <iconify-icon icon="lucide:arrow-up-right"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                </a>
                <a href="mailto:mariafernanda2109@gmail.com" className="btn btn-ghost">
                  <span className="btn-text">Enviar e-mail</span>
                  <iconify-icon icon="lucide:mail"
                    className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
