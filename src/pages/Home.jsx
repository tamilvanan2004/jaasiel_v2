import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import ClientTrust from '../sections/ClientTrust';
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services/>
      <ClientTrust/>
      <Testimonials/>
    </>
  );
}