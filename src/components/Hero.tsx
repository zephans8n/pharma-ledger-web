
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pharma-light to-white py-16 md:py-24">
      {/* Background hexagons */}
      <div className="absolute top-1/4 right-0 h-64 w-64 opacity-10 bg-pharma-blue hexagon transform translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/4 h-48 w-48 opacity-10 bg-pharma-purple hexagon transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pharma-dark mb-6 leading-tight">
              Revolutionizing <span className="text-pharma-purple">Pharmaceutical</span> Supply Chain
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our blockchain-based platform brings unprecedented transparency, security, and efficiency to the pharmaceutical industry through smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pharma-purple hover:bg-pharma-blue text-white px-6 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-pharma-purple text-pharma-purple hover:bg-pharma-purple hover:text-white px-6 py-6 text-lg group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Pharmaceutical Supply Chain" 
                  className="w-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-6 w-12 h-12 rounded-full gradient-bg"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-pharma-magenta opacity-10"></div>
            <div className="absolute -bottom-6 left-1/3 w-16 h-16 rounded-full gradient-bg opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
