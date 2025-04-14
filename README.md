
# Pharmaceutical Supply Chain Tracking DApp

A decentralized application for tracking pharmaceutical products through the supply chain using blockchain technology.

## Features

- Track medicines from manufacturer to patient
- Real-time blockchain verification
- MetaMask wallet integration
- Complete supply chain visibility
- Secure and transparent tracking

## Prerequisites

Before running this project, make sure you have:

1. [Node.js](https://nodejs.org/) (v16 or higher)
2. [MetaMask](https://metamask.io/) browser extension installed
3. [Git](https://git-scm.com/) for version control
4. A code editor (VS Code recommended)
5. [Hardhat](https://hardhat.org/) or [Remix IDE](https://remix.ethereum.org/) for smart contract deployment

## Smart Contract Setup

1. **Using Remix IDE (Easiest Method)**:
   - Visit [Remix IDE](https://remix.ethereum.org/)
   - Create a new file `PharmaceuticalSupplyChain.sol`
   - Copy the smart contract code from `contracts/PharmaceuticalSupplyChain.sol`
   - Compile the contract using Solidity Compiler (0.8.0 or higher)
   - Deploy using the "Injected Provider - MetaMask" environment
   - Save the deployed contract address

2. **Using Hardhat (Advanced Method)**:
   ```bash
   # Install Hardhat
   npm install --global hardhat
   
   # Create a new Hardhat project
   npx hardhat init
   
   # Install dependencies
   npm install @openzeppelin/contracts @nomicfoundation/hardhat-toolbox
   
   # Deploy contract
   npx hardhat run scripts/deploy.js --network <your-network>
   ```

## Frontend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pharmaceutical-supply-chain
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the contract:
   - Open `src/contexts/Web3Context.tsx`
   - Update `CONTRACT_ADDRESS` with your deployed contract address

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## Usage

1. Connect your MetaMask wallet using the "Connect Wallet" button
2. Ensure you're on the correct network where the contract is deployed
3. Use the tracking interface to:
   - Add new medicines to the blockchain
   - Track existing medicines
   - Update medicine locations
   - View complete supply chain history

## Project Structure

```
src/
├── components/          # React components
├── contexts/           # Context providers
├── types/              # TypeScript definitions
├── hooks/              # Custom React hooks
└── pages/              # Page components
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CONTRACT_ADDRESS=your_contract_address_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@yourdomain.com or join our Discord channel.

