
import { useState } from 'react';
import { Code, Lock, SquareCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SmartContractDemo = () => {
  const [activeTab, setActiveTab] = useState('contract');
  
  const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PharmaceuticalSupplyChain {
    struct Medicine {
        uint256 id;
        string name;
        string manufacturer;
        uint256 manufacturingDate;
        uint256 expiryDate;
        string batchNumber;
        string currentLocation;
        address currentHandler;
    }
    
    mapping(uint256 => Medicine) public medicines;
    mapping(uint256 => mapping(uint256 => string)) public medicineTrackingHistory;
    mapping(uint256 => uint256) public trackingCount;
    
    uint256 public medicineCount = 0;
    
    event MedicineCreated(uint256 id, string name, string manufacturer);
    event LocationUpdated(uint256 id, string location, address handler);
    
    function addMedicine(
        string memory _name,
        string memory _manufacturer,
        uint256 _manufacturingDate,
        uint256 _expiryDate,
        string memory _batchNumber,
        string memory _initialLocation
    ) public returns (uint256) {
        medicineCount++;
        
        medicines[medicineCount] = Medicine(
            medicineCount,
            _name,
            _manufacturer,
            _manufacturingDate,
            _expiryDate,
            _batchNumber,
            _initialLocation,
            msg.sender
        );
        
        trackingCount[medicineCount] = 1;
        medicineTrackingHistory[medicineCount][1] = _initialLocation;
        
        emit MedicineCreated(medicineCount, _name, _manufacturer);
        
        return medicineCount;
    }
    
    function updateLocation(uint256 _id, string memory _location) public {
        require(_id > 0 && _id <= medicineCount, "Medicine does not exist");
        
        Medicine storage medicine = medicines[_id];
        medicine.currentLocation = _location;
        medicine.currentHandler = msg.sender;
        
        trackingCount[_id]++;
        medicineTrackingHistory[_id][trackingCount[_id]] = _location;
        
        emit LocationUpdated(_id, _location, msg.sender);
    }
    
    function getMedicineDetails(uint256 _id) public view returns (
        string memory, 
        string memory, 
        uint256, 
        uint256, 
        string memory, 
        string memory,
        address
    ) {
        require(_id > 0 && _id <= medicineCount, "Medicine does not exist");
        Medicine storage medicine = medicines[_id];
        
        return (
            medicine.name,
            medicine.manufacturer,
            medicine.manufacturingDate,
            medicine.expiryDate,
            medicine.batchNumber,
            medicine.currentLocation,
            medicine.currentHandler
        );
    }
}`;

  return (
    <section id="smart-contract" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pharma-dark mb-4">
            Smart Contract Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our blockchain smart contracts enable transparent and secure pharmaceutical supply chain management.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-gradient-to-br from-pharma-blue to-pharma-purple p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Immutable Code</h4>
                    <p className="opacity-80 text-sm">Smart contracts contain self-executing code that cannot be altered once deployed.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Encrypted Security</h4>
                    <p className="opacity-80 text-sm">All transactions are cryptographically secured and distributed across the blockchain network.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <SquareCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Verification</h4>
                    <p className="opacity-80 text-sm">Network participants verify and validate transactions through consensus mechanisms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Real-time Processing</h4>
                    <p className="opacity-80 text-sm">Transactions are processed in near real-time, reducing delays in the supply chain.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-white text-pharma-purple hover:bg-pharma-light">
                  Learn More About Blockchain
                </Button>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <Tabs 
                defaultValue="contract" 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="w-full"
              >
                <div className="px-6 pt-6">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="contract">Smart Contract</TabsTrigger>
                    <TabsTrigger value="visualization">Visualization</TabsTrigger>
                    <TabsTrigger value="execution">Execution Flow</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="contract" className="p-6">
                  <div className="bg-gray-900 text-gray-300 p-4 rounded-md overflow-auto max-h-96">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {contractCode}
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="visualization" className="p-6 h-96">
                  <div className="h-full flex items-center justify-center bg-gray-50 rounded-md border border-gray-200">
                    <div className="text-center p-6">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center gradient-bg pulse-ring relative">
                          <Lock className="h-8 w-8 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="font-mono text-sm py-1 px-3 bg-gray-100 rounded-md inline-block mb-2">addMedicine()</div>
                          <div className="w-1 h-8 bg-gradient-to-b from-pharma-blue to-pharma-purple mx-auto"></div>
                          <div className="font-mono text-sm py-1 px-3 bg-gray-100 rounded-md inline-block mb-2">updateLocation()</div>
                          <div className="w-1 h-8 bg-gradient-to-b from-pharma-purple to-pharma-magenta mx-auto"></div>
                          <div className="font-mono text-sm py-1 px-3 bg-gray-100 rounded-md inline-block">getMedicineDetails()</div>
                        </div>
                      </div>
                      <p className="mt-6 text-gray-600">Interactive visualization available in the full platform demo.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="execution" className="p-6 h-96">
                  <div className="h-full bg-gray-50 rounded-md border border-gray-200 p-4 overflow-auto">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-pharma-purple text-white p-2 rounded-full">1</div>
                        <div className="flex-1 bg-white p-4 rounded-md shadow">
                          <h4 className="font-bold">Manufacturer Deploys Contract</h4>
                          <p className="text-sm text-gray-600">Smart contract is deployed to the blockchain network.</p>
                        </div>
                      </div>
                      
                      <div className="w-1 h-6 bg-gray-200 ml-6"></div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-pharma-blue text-white p-2 rounded-full">2</div>
                        <div className="flex-1 bg-white p-4 rounded-md shadow">
                          <h4 className="font-bold">Medicine Registration</h4>
                          <p className="text-sm text-gray-600">New medicine is registered using <code>addMedicine()</code> function.</p>
                        </div>
                      </div>
                      
                      <div className="w-1 h-6 bg-gray-200 ml-6"></div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-pharma-magenta text-white p-2 rounded-full">3</div>
                        <div className="flex-1 bg-white p-4 rounded-md shadow">
                          <h4 className="font-bold">Distributor Updates</h4>
                          <p className="text-sm text-gray-600">Distributor calls <code>updateLocation()</code> when medicine is received.</p>
                        </div>
                      </div>
                      
                      <div className="w-1 h-6 bg-gray-200 ml-6"></div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-500 text-white p-2 rounded-full">4</div>
                        <div className="flex-1 bg-white p-4 rounded-md shadow">
                          <h4 className="font-bold">Pharmacy Verification</h4>
                          <p className="text-sm text-gray-600">Pharmacy calls <code>getMedicineDetails()</code> to verify authenticity.</p>
                        </div>
                      </div>
                      
                      <div className="w-1 h-6 bg-gray-200 ml-6"></div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-gray-700 text-white p-2 rounded-full">5</div>
                        <div className="flex-1 bg-white p-4 rounded-md shadow">
                          <h4 className="font-bold">Patient Access</h4>
                          <p className="text-sm text-gray-600">Patients can verify medication history through a secure interface.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartContractDemo;
