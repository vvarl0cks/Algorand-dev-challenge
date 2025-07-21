
# Algorand Smart Contract Challenge

A JavaScript project that demonstrates deploying and interacting with an Algorand smart contract using the Algorand SDK. This project creates an application with an access code mechanism and a call counter.

## Overview

This project includes:
- A TEAL smart contract (`approval.teal`) that stores an access code and tracks calls
- A clear program (`clear.teal`) for application cleanup
- JavaScript code (`index.js`) that deploys the contract and makes a call to it
- Validation against Algorand's challenge system

## Prerequisites

- Node.js installed
- An Algorand account with a secret key
- Access to Algorand TestNet

## Installation

1. Clone or fork this project
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Before running the project, you need to add your Algorand account secret key:

1. Open `index.js`
2. Replace the `secretKey` variable with your base64-encoded secret key:
   ```javascript
   const secretKey = "YOUR_SECRET_KEY_HERE";
   ```

**Important**: Keep your secret key secure and never commit it to public repositories.

## Smart Contract Details

### Approval Program (`approval.teal`)
- **Setup**: Stores an access code in global state and initializes a counter
- **Call**: Verifies the provided access code matches the stored one and increments the call counter
- **Global State**: 
  - `access_code`: The access code required for calls
  - `counter`: Number of successful calls made

### Clear Program (`clear.teal`)
- Simple program that always returns 1 (allows clearing)

## Usage

Run the project:
```bash
node index.js
```

The script will:
1. Compile the TEAL programs
2. Deploy the smart contract application
3. Make a call to the application with the access code
4. Validate the challenge completion

## Project Structure

```
├── index.js          # Main application logic
├── approval.teal     # Smart contract approval program
├── clear.teal        # Smart contract clear program
├── utils.js          # Utility functions for validation and error handling
├── package.json      # Project dependencies
└── README.md         # This file
```

## Key Variables

- `challenge_id`: Unique identifier for the Algorand challenge
- `accessCode`: The secret code required to call the smart contract
- `secretKey`: Your Algorand account's private key (base64 encoded)

## Output

When successful, the script outputs:
- Confirmation round for application creation
- Application ID and address
- Confirmation round for the application call
- Challenge validation result

## License

This project is for educational purposes as part of the Algorand developer challenges.

## Security Notes

- Never share your secret key
- This is a TestNet example - do not use for MainNet without proper security review
- The access code "not-a-secret" is for demonstration purposes only
