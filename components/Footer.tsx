export default function Footer() {
  return (
    <footer className="footer bg-dark py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 mb-8 mb-xl-0">
            <div className="d-flex flex-column gap-8 pe-xl-5">
              <h2 className="mb-0 text-white">Build something together?</h2>
              <div className="d-flex flex-column gap-2">
                <a href="https://www.wrappixel.com/" target="_blank" rel="noreferrer" className="link-hover hstack gap-3 text-white fs-5">
                  <iconify-icon icon="lucide:arrow-up-right" className="fs-7 text-primary"></iconify-icon>
                  info@wrappixel.com
                </a>
                <a href="https://maps.app.goo.gl/hpDp81fqzGt5y4bC8" target="_blank" rel="noreferrer"
                  className="link-hover hstack gap-3 text-white fs-5">
                  <iconify-icon icon="lucide:map-pin" className="fs-7 text-primary"></iconify-icon>
                  info@wrappixel.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a className="link-hover fs-5 text-white" href="/">Home</a></li>
              <li><a className="link-hover fs-5 text-white" href="#about">About</a></li>
              <li><a className="link-hover fs-5 text-white" href="#services">Services</a></li>
              <li><a className="link-hover fs-5 text-white" href="#portfolio">Work</a></li>
              <li><a className="link-hover fs-5 text-white" href="#!">Terms</a></li>
              <li><a className="link-hover fs-5 text-white" href="#!">Privacy Policy</a></li>
              <li><a className="link-hover fs-5 text-white" href="#!">Error 404</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-xl-2 mb-8 mb-xl-0">
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-2">
              <li><a className="link-hover fs-5 text-white" href="https://www.facebook.com/">Facebook</a></li>
              <li><a className="link-hover fs-5 text-white" href="https://www.instagram.com/">Instagram</a></li>
              <li><a className="link-hover fs-5 text-white" href="https://x.com/">Twitter</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-xl-3 mb-8 mb-xl-0">
            <p className="mb-0 text-white text-opacity-70 text-md-end">© Studiova copyright 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
