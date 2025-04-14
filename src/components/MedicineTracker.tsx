
import { useState } from 'react';
import { Search, ArrowRight, Factory, Truck, Hospital, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MedicineTracker = () => {
  const [searchId, setSearchId] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId) {
      setIsSearched(true);
    }
  };

  return (
    <section id="medicine-tracker" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pharma-dark mb-4">
            Blockchain Medicine Tracking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track any medication through its entire journey from manufacturer to patient with complete transparency.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text"
                placeholder="Enter medicine ID or batch number"
                className="pl-10"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-pharma-purple hover:bg-pharma-blue">
              Track Medicine
            </Button>
          </form>
        </div>
        
        {isSearched && (
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold">Amoxicillin 500mg</h3>
                <p className="text-gray-500">Batch: BT29384 • ID: {searchId || 'MED-10293'}</p>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Verified on Blockchain
              </div>
            </div>
            
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-6 top-8 bottom-8 w-1 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex items-start">
                  <div className="bg-pharma-blue text-white p-3 rounded-full z-10">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div className="ml-8">
                    <div className="flex items-center">
                      <h4 className="text-lg font-bold">Manufactured</h4>
                      <div className="h-1 w-16 bg-gray-200 mx-4"></div>
                      <span className="text-sm text-gray-500">May 15, 2025</span>
                    </div>
                    <p className="text-gray-600 mt-1">PharmaCorp Inc., San Francisco, CA</p>
                    <div className="mt-2 text-sm text-pharma-purple">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" /> Verified by 21 nodes on the blockchain
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="bg-pharma-purple text-white p-3 rounded-full z-10">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="ml-8">
                    <div className="flex items-center">
                      <h4 className="text-lg font-bold">Distribution Center</h4>
                      <div className="h-1 w-16 bg-gray-200 mx-4"></div>
                      <span className="text-sm text-gray-500">May 20, 2025</span>
                    </div>
                    <p className="text-gray-600 mt-1">MedLogistics, Chicago, IL</p>
                    <div className="mt-2 text-sm text-pharma-purple">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" /> Verified by 19 nodes on the blockchain
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="bg-pharma-magenta text-white p-3 rounded-full z-10">
                    <Hospital className="h-5 w-5" />
                  </div>
                  <div className="ml-8">
                    <div className="flex items-center">
                      <h4 className="text-lg font-bold">Pharmacy Received</h4>
                      <div className="h-1 w-16 bg-gray-200 mx-4"></div>
                      <span className="text-sm text-gray-500">May 22, 2025</span>
                    </div>
                    <p className="text-gray-600 mt-1">MediCare Pharmacy, New York, NY</p>
                    <div className="mt-2 text-sm text-pharma-purple">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" /> Verified by 17 nodes on the blockchain
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-bold mb-2">Product Details:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Manufacturing Date</p>
                  <p>May 10, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiry Date</p>
                  <p>May 10, 2027</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Storage Conditions</p>
                  <p>Store below 25°C</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Blockchain TX Hash</p>
                  <p className="font-mono text-xs">0x7f9e8d...3b2c1a</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!isSearched && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 gradient-bg rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Enter Medicine ID to Track</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Search by medicine ID or batch number to see its complete supply chain journey on the blockchain.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline"
                className="border-pharma-purple text-pharma-purple"
                onClick={() => {
                  setSearchId('MED-10293');
                  setIsSearched(true);
                }}
              >
                View Demo
              </Button>
              <Button 
                className="bg-pharma-purple hover:bg-pharma-blue text-white"
                onClick={() => document.querySelector('input')?.focus()}
              >
                Track Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MedicineTracker;
