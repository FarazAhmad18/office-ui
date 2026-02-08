import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Community from '../components/Community';
import MakeYourOwn from '../components/MakeYourOwn';
import SuitYourNeeds from '../components/SuitYourNeeds';
import OfficeLease from '../components/OfficeLease';
import CallToAction from '../components/CallToAction';
import Location from '../components/Location';
import WorkingSpace from '../components/WorkingSpace';
import Memberships from '../components/Memberships';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Community />
        <MakeYourOwn />
        <SuitYourNeeds />
        <Marquee dark />
        <OfficeLease />
        <CallToAction />
        <Location />
        <WorkingSpace />
        <Memberships />
      </main>
      <Footer />
    </>
  );
}
