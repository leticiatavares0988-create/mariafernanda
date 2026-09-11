export default function Footer() {
  return (
    <footer className="footer bg-dark py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 mb-8 mb-xl-0">
            <h2 className="mb-0 text-white pe-xl-5">Vamos criar <span className="text-gradient">algo juntos?</span></h2>
          </div>
          <div className="col-md-6 col-xl-3 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a className="link-hover footer-text text-white" href="/">Início</a></li>
              <li><a className="link-hover footer-text text-white" href="#about">Sobre</a></li>
              <li><a className="link-hover footer-text text-white" href="#services">Serviços</a></li>
              <li><a className="link-hover footer-text text-white" href="#portfolio">Projetos</a></li>
              <li><a className="link-hover footer-text text-white" href="#faq">Dúvidas</a></li>
              <li><a className="link-hover footer-text text-white" href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-4 mb-8 mb-xl-0">
            <p className="mb-3 footer-text fw-bold text-white">Contatos</p>
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li>
                <a className="link-hover hstack gap-3 footer-text text-white" href="https://www.instagram.com/maferrsantos/" target="_blank" rel="noreferrer">
                  <iconify-icon icon="lucide:instagram" className="fs-7 text-primary"></iconify-icon>
                  Instagram
                </a>
              </li>
              <li>
                <a className="link-hover hstack gap-3 footer-text text-white" href="mailto:mariafernanda2109@gmail.com">
                  <iconify-icon icon="lucide:mail" className="fs-7 text-primary"></iconify-icon>
                  mariafernanda2109@gmail.com
                </a>
              </li>
              <li>
                <a className="link-hover hstack gap-3 footer-text text-white" href="https://wa.me/5518997056598" target="_blank" rel="noreferrer">
                  <iconify-icon icon="lucide:phone" className="fs-7 text-primary"></iconify-icon>
                  (18) 99705-6598
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
