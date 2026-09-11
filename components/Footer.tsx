export default function Footer() {
  return (
    <footer className="footer bg-dark py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 mb-8 mb-xl-0">
            <div className="d-flex flex-column gap-8 pe-xl-5">
              <h2 className="mb-0 text-white">Vamos criar algo juntos?</h2>
            </div>
          </div>
          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a className="link-hover fs-5 text-white" href="/">Início</a></li>
              <li><a className="link-hover fs-5 text-white" href="#about">Sobre</a></li>
              <li><a className="link-hover fs-5 text-white" href="#services">Serviços</a></li>
              <li><a className="link-hover fs-5 text-white" href="#portfolio">Projetos</a></li>
              <li><a className="link-hover fs-5 text-white" href="#faq">Dúvidas</a></li>
              <li><a className="link-hover fs-5 text-white" href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-xl-3 mb-8 mb-xl-0">
            <p className="mb-3 fs-5 fw-bold text-white">Contatos</p>
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li>
                <a className="link-hover hstack gap-3 fs-5 text-white" href="https://www.instagram.com/maferrsantos/" target="_blank" rel="noreferrer">
                  <iconify-icon icon="lucide:instagram" className="fs-7 text-primary"></iconify-icon>
                  Instagram
                </a>
              </li>
              <li>
                <a className="link-hover hstack gap-3 fs-5 text-white" href="mailto:mariafernanda2109@gmail.com">
                  <iconify-icon icon="lucide:mail" className="fs-7 text-primary"></iconify-icon>
                  mariafernanda2109@gmail.com
                </a>
              </li>
              <li>
                <a className="link-hover hstack gap-3 fs-5 text-white" href="https://wa.me/5518997056598" target="_blank" rel="noreferrer">
                  <iconify-icon icon="lucide:phone" className="fs-7 text-primary"></iconify-icon>
                  (18) 99705-6598
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <p className="mb-0 text-white text-opacity-70 text-md-end">© Maria Fernanda 2026. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
