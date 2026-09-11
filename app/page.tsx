import Header from '@/components/Header';
import Banner from '@/components/Banner';
import StatsFacts from '@/components/StatsFacts';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonial from '@/components/Testimonial';
import Team from '@/components/Team';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import RecentNews from '@/components/RecentNews';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';
import GetTemplate from '@/components/GetTemplate';

export default function Home() {
  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden">
        <Banner />
        <StatsFacts />
        <FeaturedProjects />
        <Services />
        <WhyChooseUs />
        <Testimonial />
        <Team />
        <Pricing />
        <Faq />
        <RecentNews />
        <GetInTouch />
      </div>
      <Footer />
      <GetTemplate />
    </>
  );
}
