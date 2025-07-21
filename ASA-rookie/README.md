
# Algorand Asset Creation Challenge

This project demonstrates how to create an Algorand Standard Asset (ASA) on the Algorand TestNet using the Algorand JavaScript SDK.

## Overview

This code creates a new asset called "Task Asset" with the following properties:
- Total supply: 100 units
- Decimals: 2 (allowing fractional units like 1.25)
- Manager, freeze, clawback, and reserve addresses all set to the creator's address

## Prerequisites

- Node.js installed
- An Algorand account with TestNet ALGO for transaction fees
- Your account's secret key (base64 encoded)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your secret key:**
   - Replace the `secretKey` variable in `index.js` with your actual secret key
   - Your secret key should be base64 encoded

3. **Fund your account:**
   - Ensure your account has sufficient TestNet ALGO for transaction fees
   - You can get TestNet ALGO from the [Algorand TestNet Dispenser](https://dispenser.testnet.aws.algodev.network/)

## Project Structure

```
├── index.js          # Main script for asset creation
├── utils.js          # Utility functions for validation and error handling
├── package.json      # Node.js dependencies
└── README.md         # This file
```

## How it Works

1. **Account Setup**: The script decodes your base64 secret key and creates an account object with your address and secret key

2. **Transaction Parameters**: Retrieves suggested transaction parameters from the Algorand TestNet

3. **Asset Creation**: Creates an asset with:
   - Name: "Task Asset"
   - Total units: 100
   - Decimals: 2
   - All management roles assigned to your address

4. **Transaction Signing**: Signs the transaction with your secret key

5. **Transaction Submission**: Sends the signed transaction to the network

6. **Confirmation**: Waits for transaction confirmation and displays the new asset ID

7. **Validation**: Validates the transaction against the challenge requirements

## Running the Code

```bash
node index.js
```

## Expected Output

```
Confirmed round: [round_number]
Created asset id: [asset_id]
Verifying challenge work...
Transactions validated! Please return to the developer portal to collect your badge. :)
```

## Key Concepts

- **Asset Standard Assets (ASA)**: Algorand's native token standard
- **Asset Creation**: Process of creating new tokens on Algorand
- **Transaction Signing**: Cryptographically signing transactions with your private key
- **TestNet**: Algorand's test network for development and testing

## Error Handling

The project includes comprehensive error handling for common issues:
- Insufficient balance (overspend errors)
- Asset transfer issues
- Opt-in requirements
- Authorization problems

## Security Notes

⚠️ **Important**: Never share your secret key or commit it to version control in production applications. This is for educational purposes only.

## Resources

- [Algorand Developer Portal](https://developer.algorand.org/)
- [Algorand JavaScript SDK Documentation](https://algorand.github.io/js-algorand-sdk/)
- [Asset Creation Guide](https://developer.algorand.org/docs/get-details/asa/)
- [TestNet Dispenser](https://dispenser.testnet.aws.algodev.network/)

## License

ISC
