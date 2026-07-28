import { LandingIntro } from '../../components/LandingIntro';
import { Hero } from '../../components/Hero';
import { FeaturedWork } from '../../components/FeaturedWork';
import { Discography } from '../../components/Discography';
import { BookingSection } from '../../components/BookingSection';

export function Home() {
  return (
    <>
      <LandingIntro />
      <Hero />
      <FeaturedWork />
      <Discography />
      <BookingSection />
    </>
  );
}
