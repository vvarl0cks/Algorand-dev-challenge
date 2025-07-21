
# Algorand Payment Transaction Demo

A JavaScript implementation demonstrating how to create, sign, and send payment transactions on the Algorand blockchain using the Algorand JavaScript SDK.

## Overview

This project is part of the Algorand Developer Challenge and showcases the fundamentals of working with Algorand transactions. It creates a simple payment transaction where an account sends 1 ALGO to itself on the Algorand TestNet.

## Features

- Initialize Algorand client connection
- Create payment transactions
- Sign transactions with secret keys
- Send transactions to the network
- Wait for transaction confirmation
- Error handling and validation

## Prerequisites

- Node.js (version 12 or higher)
- npm package manager
- Algorand TestNet account with sufficient balance

## Installation

1. Install dependencies:
```bash
npm install
```

## Configuration

1. **Set up your secret key**: 
   - Update the `sk` variable in `index.js` with your Algorand account's secret key
   - Your secret key should be in base64 format

```javascript
const sk = "YOUR_SECRET_KEY_HERE";
```

## Usage

Run the payment transaction demo:

```bash
node index.js
```

The script will:
1. Connect to the Algorand TestNet
2. Get suggested transaction parameters
3. Create a payment transaction (1 ALGO to yourself)
4. Sign the transaction
5. Submit it to the network
6. Wait for confirmation
7. Display the confirmed round number

## Project Structure

```
├── index.js          # Main transaction logic
├── utils.js          # Utility functions for validation and error handling
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Key Components

### index.js
- Main application logic
- Transaction creation and signing
- Network communication

### utils.js
- Transaction validation functions
- Error mapping and handling
- Algorand client configuration

## Network Configuration

This project uses the Algorand TestNet:
- **Server**: `https://testnet-api.algonode.cloud/`
- **Port**: 0
- **Token**: "" (no token required for public endpoints)

## Transaction Details

- **Type**: Payment transaction
- **Amount**: 1 ALGO (1,000,000 microAlgos)
- **From**: Your account address
- **To**: Your account address (self-transaction)

## Error Handling

The project includes comprehensive error handling for common Algorand transaction errors:
- Overspend errors
- Asset transfer issues
- Opt-in requirements
- Authorization errors

## Validation

The project includes automatic validation against the Algorand Developer Challenge system to verify successful transaction completion.

## Dependencies

- `algosdk`: Algorand JavaScript SDK for blockchain interactions
- `axios`: HTTP client for API requests

## Contributing

This is a demo project for educational purposes. Feel free to fork and modify for your own learning.

## License

ISC License

## Resources

- [Algorand Developer Portal](https://developer.algorand.org/)
- [Algorand JavaScript SDK Documentation](https://algorand.github.io/js-algorand-sdk/)
- [Algorand TestNet Dispenser](https://testnet.algoexplorer.io/dispenser)
