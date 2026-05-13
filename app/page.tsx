import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solutions } from './components/Solutions';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solutions />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
