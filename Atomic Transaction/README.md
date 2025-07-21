
# Algorand Challenge - Payment and Asset Opt-in

This project demonstrates how to perform basic Algorand blockchain operations using the Algorand JavaScript SDK. It completes a challenge by sending a payment transaction and opting into a USDC asset on the Algorand testnet.

## Overview

The project performs two main operations in an atomic transaction group:
1. Sends 1 ALGO to a faucet address
2. Opts into the USDC asset (Asset ID: 10458941) on testnet

## Prerequisites

- Node.js installed on your system
- An Algorand account with sufficient ALGO balance for transactions
- Access to Algorand testnet

## Installation

1. Clone or fork this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Before running the code, you need to update the `secretKey` variable in `index.js`:

```javascript
const secretKey = "YOUR_BASE64_ENCODED_SECRET_KEY_HERE";
```

**Important**: Replace the placeholder secret key with your actual Algorand account's secret key encoded in base64 format.

## Usage

Run the challenge:
```bash
node index.js
```

The script will:
1. Create an account object from your secret key
2. Set up an AtomicTransactionComposer for grouping transactions
3. Add a payment transaction (1 ALGO to faucet)
4. Add an asset opt-in transaction for USDC
5. Execute the transaction group
6. Validate the challenge completion

## Project Structure

- `index.js` - Main application file containing the challenge logic
- `utils.js` - Utility functions for validation and error handling
- `package.json` - Node.js dependencies and project configuration

## Key Features

- **Atomic Transactions**: Uses AtomicTransactionComposer to ensure both transactions succeed or fail together
- **Error Handling**: Comprehensive error mapping for common Algorand transaction errors
- **Challenge Validation**: Automatic validation of completed challenge through API endpoint

## Dependencies

- `algosdk`: Official Algorand JavaScript SDK for blockchain interactions
- `axios`: HTTP client for API requests and challenge validation

## Network Configuration

The project is configured to use:
- **Network**: Algorand Testnet
- **API Endpoint**: https://testnet-api.algonode.cloud/
- **USDC Asset ID**: 10458941 (testnet)

## Security Notes

- Never commit your actual secret key to version control
- Use environment variables or secure key management in production
- The current secret key in the code is a placeholder and should be replaced

## Troubleshooting

Common errors and solutions are handled by the error mapper in `utils.js`:
- **Overspend**: Account doesn't have enough ALGOs
- **Asset Overspend**: Account doesn't have enough of an asset
- **Opt-in Required**: Receiver hasn't opted into the asset
- **Wrong Signer**: Transaction signed by incorrect account

## License

This project is provided as-is for educational purposes.
