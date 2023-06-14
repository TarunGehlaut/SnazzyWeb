import HeroBannerSwiper from "./HeroBannerSwiper";
import TechnologyUsed from "./TechnologyUsed";
import TrustedCompanies from "./TrustedCompanies";

import img from "../../assets/tech-used-bg.svg";
import AboutUS from "./AboutUS";
import Achievements from "./Achievements";
import Blogs from "./Blogs";
import CaseStudy from "./CaseStudy";
import Contact from "./Contact";
import KeyFeatures from "./KeyFeatures";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <main className="h">
      <article>
        {/* Hero Banner */}
        <section id="home" className="hero-banner pb-16  md:pb-20">
          <HeroBannerSwiper />
        </section>

        {/* Trusted Companies */}
        <section
          id="about"
          className="trusted-companies  scroll-m-[128px] pb-5 md:pb-8"
        >
          <TrustedCompanies />
        </section>

        {/* About us*/}
        <section className="About us  pb-10 md:pb-20">
          <AboutUS />
        </section>

        {/*  KeyFeatures */}
        <section
          id="services"
          className="Key Features   scroll-m-[80px] pb-20 md:pb-40"
        >
          <KeyFeatures />
        </section>

        {/*  Achievements */}
        <section className=" pb-5 md:pb-20">
          <Achievements />
        </section>

        {/* Technology Used */}
        <section
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={`technology-used   overflow-hidden bg-[#151a28]  bg-cover bg-left-bottom bg-no-repeat  py-12 md:bg-left `}
        >
          <TechnologyUsed />
        </section>

        {/* Case Studies*/}
        <section
          id="case study"
          className="Case Studies scroll-m-[64px] py-5 md:scroll-m-[-24px]  md:py-20"
        >
          <CaseStudy />
        </section>

        {/* Blogs*/}
        <section
          id="blog"
          className="Case Studies scroll-m-[80px] pb-5 md:pb-20"
        >
          <Blogs />
        </section>

        {/* Reviews*/}
        <section className="Reviews pb-28  md:pb-40">
          <Reviews />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="Contact scroll-m-[80px] pb-10  md:scroll-m-[160px] "
        >
          <Contact />
        </section>
      </article>
    </main>
  );
};

export default Home;
