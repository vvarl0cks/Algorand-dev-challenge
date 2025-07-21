
# Algorand Developer Challenge - Payment and Asset Opt-in

A JavaScript implementation demonstrating fundamental Algorand blockchain operations using the official Algorand SDK. This project completes a developer challenge by executing atomic transactions on the Algorand testnet.

## 🎯 Challenge Overview

This project demonstrates two core Algorand operations in a single atomic transaction group:
1. **Payment Transaction**: Sends 1 ALGO to a designated faucet address
2. **Asset Opt-in**: Opts into the USDC asset (Asset ID: 10458941) on testnet

## 🚀 Features

- **Atomic Transaction Groups**: Ensures both transactions succeed or fail together
- **Error Handling**: Comprehensive error mapping for common Algorand transaction failures
- **Challenge Validation**: Automatic verification through Algorand's challenge API
- **Testnet Ready**: Pre-configured for Algorand testnet operations

## 📋 Prerequisites

- Node.js (v14 or higher)
- An Algorand testnet account with sufficient ALGO balance
- Basic understanding of blockchain transactions

## 🛠️ Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/vvarl0cks/Algorand-dev-challenge.git
   cd Algorand-dev-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## ⚙️ Configuration

Before running the challenge, update your account credentials in `index.js`:

```javascript
const secretKey = "YOUR_BASE64_ENCODED_SECRET_KEY_HERE";
```

**Security Note**: Replace the placeholder with your actual Algorand account's secret key in base64 format. Never commit real secret keys to version control.

## 🎮 Usage

Execute the challenge:
```bash
node index.js
```

### Expected Output
```
Confirmed in round: [ROUND_NUMBER]
Verifying challenge work...
Challenge completed successfully!
```

## 📁 Project Structure

```
├── index.js          # Main challenge implementation
├── utils.js           # Utility functions and error handling
├── package.json       # Dependencies and project metadata
└── README.md         # Project documentation
```

## 🔧 Key Components

### Transaction Flow
1. **Account Setup**: Creates account object from base64 secret key
2. **Transaction Composer**: Uses `AtomicTransactionComposer` for grouping
3. **Payment Transaction**: Transfers 1 ALGO to faucet address
4. **Asset Opt-in**: Opts into USDC asset with zero-amount transfer
5. **Execution**: Submits atomic transaction group to network
6. **Validation**: Verifies challenge completion via API

### Error Handling
The project includes intelligent error mapping for common issues:
- **Overspend**: Insufficient ALGO balance
- **Asset Overspend**: Insufficient asset balance
- **Opt-in Required**: Asset not opted into by receiver
- **Wrong Signer**: Transaction signed by incorrect account

## 🌐 Network Configuration

- **Network**: Algorand Testnet
- **API Endpoint**: `https://testnet-api.algonode.cloud/`
- **Target Asset**: USDC (Asset ID: 10458941)
- **Faucet Address**: `GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A`

## 📦 Dependencies

- **algosdk**: Official Algorand JavaScript SDK
- **axios**: HTTP client for API requests and validation

## 🔒 Security Best Practices

- Never expose private keys in public repositories
- Use environment variables for sensitive configuration
- Validate all transaction parameters before signing
- Keep dependencies updated for security patches

## 🐛 Troubleshooting

### Common Issues

1. **"Overspend" Error**: Ensure your account has sufficient ALGO balance (minimum 0.1 ALGO + transaction fees)
2. **"Must optin" Error**: The challenge handles opt-in automatically, but verify asset ID is correct
3. **Network Errors**: Check internet connection and testnet status
4. **Invalid Secret Key**: Ensure the secret key is properly base64 encoded

### Getting Testnet ALGOs
Visit the [Algorand Testnet Faucet](https://testnet.algoexplorer.io/dispenser) to fund your testnet account.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [Algorand Developer Portal](https://developer.algorand.org/)
- [Algorand JavaScript SDK Documentation](https://algorand.github.io/js-algorand-sdk/)
- [Algorand Testnet Explorer](https://testnet.algoexplorer.io/)
- [Atomic Transactions Guide](https://developer.algorand.org/docs/get-details/atomic_transfers/)

## 👨‍💻 Author

**vvarl0cks**
- GitHub: [@vvarl0cks](https://github.com/vvarl0cks)

---

*Built with ❤️ for the Algorand developer community*
