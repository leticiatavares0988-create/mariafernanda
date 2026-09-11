import Header from '@/components/Header';
import Banner from '@/components/Banner';
import StatsFacts from '@/components/StatsFacts';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonial from '@/components/Testimonial';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Banner />
        <StatsFacts />
        <FeaturedProjects />
        <Services />
        <WhyChooseUs />
        <Testimonial />
        <Pricing />
        <Faq />
        <GetInTouch />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
