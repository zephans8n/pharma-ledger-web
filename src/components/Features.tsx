
import { Shield, Zap, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-pharma-blue" />,
      title: 'Enhanced Security',
      description: 'Smart contracts ensure tamper-proof records and secure transactions throughout the pharmaceutical supply chain.'
    },
    {
      icon: <Zap className="h-10 w-10 text-pharma-purple" />,
      title: 'Real-time Tracking',
      description: 'Monitor medications from manufacturing to patient delivery with immutable blockchain records.'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-pharma-magenta" />,
      title: 'Data Analytics',
      description: 'Leverage blockchain data for insights into supply chain efficiency, medication usage, and compliance.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      title: 'Compliance Assurance',
      description: 'Automated smart contracts ensure regulatory compliance and provide audit trails for all transactions.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pharma-dark mb-4">
            Blockchain-Powered Pharmaceutical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform leverages smart contracts and blockchain technology to transform pharmaceutical operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-sm text-pharma-purple">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pharma-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pharma-purple"></span>
            </span>
            <span>Blockchain-powered and secure by design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
