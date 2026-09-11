export default function RecentNews() {
  return (
    <section id="blog" className="Recent-news bg-light-gray py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100"
                data-aos-duration="1000">
                <span
                  className="round-36 flex-shrink-0 text-dark rounded-circle bg-primary hstack justify-content-center fw-medium">09</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">Resources</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                    data-aos-duration="1000">
                    <h2 className="mb-0">Recent news</h2>
                    <p className="fs-5 mb-0 text-opacity-70">Explore the latest trends, bold projects, and creative insights
                      from our agency—shaping the future of branding, digital experiences, and storytelling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mb-7 mb-xl-0">
              <div className="resources d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                <a href="#blog"
                  className="resources-img resources-img-first position-relative overflow-hidden d-block">
                  <img src="/assets/images/resources/resources-1.jpg" alt="resources" className="img-fluid" />
                </a>
                <div className="resources-details">
                  <p className="mb-0">Dec 24, 2025</p>
                  <h4 className="mb-0">A campaign that connects</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="resources d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="200"
                data-aos-duration="1000">
                <a href="#blog" className="resources-img position-relative overflow-hidden d-block">
                  <img src="/assets/images/resources/resources-2.jpg" alt="resources" className="img-fluid" />
                </a>
                <div className="resources-details">
                  <p className="mb-0">Dec 24, 2025</p>
                  <h4 className="mb-0">An breaking boundaries our latest brand redesign</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-7 mb-xl-0">
              <div className="resources d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="300"
                data-aos-duration="1000">
                <a href="#blog" className="resources-img position-relative overflow-hidden d-block">
                  <img src="/assets/images/resources/resources-3.jpg" alt="resources" className="img-fluid" />
                </a>
                <div className="resources-details">
                  <p className="mb-0">Dec 24, 2025</p>
                  <h4 className="mb-0">Recognized for design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
