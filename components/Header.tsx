export default function Header() {
  return (
    <header className="header border-4 border-primary border-top position-fixed start-0 top-0 w-100">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/" className="logo-white logo-text fw-bold text-white text-decoration-none">Maria Fernanda<span className="text-primary">.</span></a>
            <a href="/" className="logo-dark logo-text fw-bold text-dark text-decoration-none">Maria Fernanda<span className="text-primary">.</span></a>
          </div>
          <div className="d-flex align-items-center gap-4">

            <div className="btn-group">
              <button
                className="btn btn-secondary toggle-menu round-45 p-2 d-flex align-items-center justify-content-center bg-white rounded-circle"
                type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                <iconify-icon icon="solar:hamburger-menu-line-duotone" className="menu-icon fs-8 text-dark"></iconify-icon>
              </button>
              <ul className="dropdown-menu dropdown-menu-end p-4">
                <div className="d-flex flex-column gap-6">
                  <div className="hstack justify-content-between border-bottom pb-6">
                    <p className="mb-0 fs-5 text-dark">Menu</p>
                    <button type="button" className="btn-close opacity-75" aria-label="Fechar"></button>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <ul className="header-menu list-unstyled mb-0 d-flex flex-column gap-2">
                    <li className="header-item">
                      <a href="/" aria-current="page"
                        className="header-link active hstack gap-2 fs-7 fw-bold text-dark"><img
                          src="/assets/images/svgs/secondary-leaf.svg" alt="" width="20" height="20"
                          className="img-fluid animate-spin" />Início</a>
                    </li>
                    <li className="header-item">
                      <a href="#about"
                        className="header-link hstack gap-2 fs-7 fw-bold text-dark"><img
                          src="/assets/images/svgs/secondary-leaf.svg" alt="" width="20" height="20"
                          className="img-fluid animate-spin" />Sobre</a>
                    </li>
                    <li className="header-item">
                      <a href="#portfolio"
                        className="header-link hstack gap-2 fs-7 fw-bold text-dark"><img
                          src="/assets/images/svgs/secondary-leaf.svg" alt="" width="20" height="20"
                          className="img-fluid animate-spin" />Projetos</a>
                    </li>
                    <li className="header-item">
                      <a href="#services"
                        className="header-link hstack gap-2 fs-7 fw-bold text-dark"><img
                          src="/assets/images/svgs/secondary-leaf.svg" alt="" width="20" height="20"
                          className="img-fluid animate-spin" />Serviços</a>
                    </li>
                    <li className="header-item">
                      <a href="#contact"
                        className="header-link hstack gap-2 fs-7 fw-bold text-dark"><img
                          src="/assets/images/svgs/secondary-leaf.svg" alt="" width="20" height="20"
                          className="img-fluid animate-spin" />Contato</a>
                    </li>
                    </ul>
                    <a href="https://wa.me/5518997056598" target="_blank" rel="noreferrer"
                    className="btn btn-dark text-white fs-6 bg-dark px-3 py-2 w-100 hstack justify-content-center">Pedir orçamento</a>
                  </div>
                  <div>
                    <a className="text-dark" href="tel:+5518997056598">(18) 99705-6598</a>
                    <a className="fs-8 text-dark fw-bold" href="mailto:mariafernanda2109@gmail.com">mariafernanda2109@gmail.com</a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
