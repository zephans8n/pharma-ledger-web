
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SmartContractDemo from '@/components/SmartContractDemo';
import MedicineTracker from '@/components/MedicineTracker';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SmartContractDemo />
        <MedicineTracker />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
