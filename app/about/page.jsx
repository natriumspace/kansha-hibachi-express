import Link from "next/link";
import BreadcrumbAbout from "../components/about/Breadcrumb";
import About from "../components/about/About";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Counter from "../components/home/Counter";
import Testimonial from "../components/home/Testimonial";
import ContactSection from "../components/home/ContactSection";
export const metadata = {
  title: 'About Kansha Hibachi Express',
  description: 'Discover the authentic flavors of hibachi cuisine at Kansha Hibachi Express. Indulge in sizzling hibachi grills, premium ingredients, and warm hospitality. Join us on a culinary journey and unleash your taste buds with every delightful dish. Our commitment to sustainability and community involvement makes us more than just a restaurant. Experience the joy of Kansha – gratitude in every flavorful bite.',
}
const AboutPage = () => {
  // new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <BreadcrumbAbout />
      <About />
      <WhyChooseUs />
      <ContactSection />
      {/* <Counter /> */}
      {/* <Testimonial /> */}
    </>
  );
}

export default AboutPage;