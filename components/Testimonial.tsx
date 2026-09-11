import HeroVideo from '@/components/HeroVideo';

export default function Testimonial() {
  return (
    <section className="testimonial py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">05</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">Depoimentos</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">O que dizem <span className="text-gradient">meus clientes</span></h2>
                    <p className="fs-5 mb-0 text-opacity-70">Experiências reais de quem já teve um site ou uma landing page criado por mim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gap-7 gap-lg-0">
            <div className="col-lg-4 col-xl-3 d-flex align-items-stretch">
              <div className="card bg-dark w-100" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="card-body d-flex flex-column gap-5 gap-xl-11 justify-content-between">
                  <div className="d-flex flex-column gap-4">
                    <p className="mb-0 text-white text-opacity-70">Depoimento</p>
                    <h4 className="mb-0 text-white">O redesign do meu site ficou impecável. Ela entendeu exatamente o que eu queria.</h4>
                  </div>
                  <div className="hstack gap-3">
                    <img src="/assets/images/testimonial/testimonial-1.jpg" alt=""
                      className="img-fluid rounded-circle overflow-hidden flex-shrink-0" width="60" height="60" />
                    <div>
                      <h5 className="mb-1 fw-normal text-white">Carlos Mendes</h5>
                      <p className="mb-0 text-white text-opacity-70">Studio Pilates Flow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-6 d-flex align-items-stretch">
              <div className="card bg-dark w-100 position-relative overflow-hidden video-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <HeroVideo speed={0.6} className="video-card-bg" />
                <div className="card-body d-flex flex-column gap-5 gap-xl-11 justify-content-between position-relative z-1">
                  <div className="d-flex flex-column gap-4">
                    <p className="mb-0 text-white text-opacity-70">Depoimento</p>
                    <h4 className="mb-0 text-white pe-xl-2">Do briefing à publicação, o processo foi tranquilo e o resultado superou as
                      expectativas. Recomendo muito!</h4>
                    <div className="hstack gap-2">
                      <ul className="list-unstyled mb-0 hstack gap-1">
                        <li><a className="hstack" href="#!"><iconify-icon icon="solar:star-bold"
                              className="fs-6 text-white"></iconify-icon></a></li>
                        <li><a className="hstack" href="#!"><iconify-icon icon="solar:star-bold"
                              className="fs-6 text-white"></iconify-icon></a></li>
                        <li><a className="hstack" href="#!"><iconify-icon icon="solar:star-bold"
                              className="fs-6 text-white"></iconify-icon></a></li>
                        <li><a className="hstack" href="#!"><iconify-icon icon="solar:star-bold"
                              className="fs-6 text-white"></iconify-icon></a></li>
                        <li><a className="hstack" href="#!"><iconify-icon icon="solar:star-line-duotone"
                              className="fs-6 text-white"></iconify-icon></a></li>
                      </ul>
                      <h6 className="mb-0 text-white fw-medium">4.0</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="hstack gap-3">
                      <img src="/assets/images/testimonial/testimonial-2.jpg" alt=""
                        className="img-fluid rounded-circle overflow-hidden flex-shrink-0" width="60" height="60" />
                      <div>
                        <h5 className="mb-1 fw-normal text-white">Roberta Alves</h5>
                        <p className="mb-0 text-white text-opacity-70">Loja Bem Casa</p>
                      </div>
                    </div>
                    <span><img src="/assets/images/testimonial/quete.svg" alt=""
                        className="img-fluid flex-shrink-0" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 d-flex align-items-stretch">
              <div className="card w-100" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <div className="card-body d-flex flex-column gap-5 gap-xl-11 justify-content-between">
                  <div className="d-flex flex-column gap-4">
                    <p className="mb-0">Depoimento</p>
                    <h4 className="mb-0">Processo leve e resultado incrível. Minha landing page começou a gerar contatos na primeira semana.</h4>
                  </div>
                  <div className="hstack gap-3">
                    <img src="/assets/images/testimonial/testimonial-3.jpg" alt=""
                      className="img-fluid rounded-circle overflow-hidden flex-shrink-0" width="60" height="60" />
                    <div>
                      <h5 className="mb-1 fw-normal">Fernanda Souza</h5>
                      <p className="mb-0">Clínica Vida Leve</p>
                    </div>
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
