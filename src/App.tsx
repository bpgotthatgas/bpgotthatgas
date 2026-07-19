import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Discography } from './components/Discography';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <Discography />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
