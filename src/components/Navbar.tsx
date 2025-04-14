
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-to-br from-pharma-blue to-pharma-purple rounded-md"></div>
          <span className="text-xl font-bold text-pharma-dark">PharmaLedger</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-pharma-purple transition-colors">Features</a>
          <a href="#smart-contract" className="text-gray-700 hover:text-pharma-purple transition-colors">Smart Contract</a>
          <a href="#medicine-tracker" className="text-gray-700 hover:text-pharma-purple transition-colors">Medicine Tracker</a>
          <a href="#contact" className="text-gray-700 hover:text-pharma-purple transition-colors">Contact</a>
          <Button className="bg-pharma-purple hover:bg-pharma-blue text-white">Get Started</Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-40">
          <div className="flex flex-col space-y-4 p-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-pharma-purple transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#smart-contract" 
              className="text-gray-700 hover:text-pharma-purple transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Smart Contract
            </a>
            <a 
              href="#medicine-tracker" 
              className="text-gray-700 hover:text-pharma-purple transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Medicine Tracker
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-pharma-purple transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-pharma-purple hover:bg-pharma-blue text-white">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
