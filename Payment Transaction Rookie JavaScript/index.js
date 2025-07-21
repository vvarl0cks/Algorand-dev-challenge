const algosdk = require("algosdk");
const { validate, printError, algod } = require("./utils");

// DO NOT CHANGE
const challenge_id = "3474867148855516251"
const client = new algosdk.Algodv2(algod.token, algod.server, algod.port);
let txids = [];

const sk = "7GaKn0PKX9ffiPO6VVO5/PiE+CGl8GwXB0u9U0qXKl4/pJjk+ePCfnSsqJnd4Bue4bKcN7EUFl4CgVQC1nfBzQ=="; // TODO: Paste your secret key here. You can find it underneath the code editor.

// Decode the secretKey into a Uint8Array from base 64
// This will produce an array of length 64
const secret = new Uint8Array(Buffer.from(sk, "base64"));
const acct = {
  // The public key is the secret[32:], or the last 32 bytes
  // We encode it to the address which is easier to read and includes a checksum
  addr: algosdk.encodeAddress(secret.slice(32)),
  // We need not do anything with the secret
  sk: secret,
};

(async function() {
  try {
    // Get the suggested parameters from the Algod server. These include current fee levels and suggested first/last rounds.
    const sp = await client.getTransactionParams().do(); // TODO: use the client initialized above to get the suggested parameters from the algod server

    // Create a payment transaction from you to you using the `acct` variable defined above
    const ptxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      // TODO: Fill out the transaction parameters to send yourself 1 Algo 
      from: acct.addr,    // The from (sender) should be set to your address
      to: acct.addr,      // The to (receiver) should be set to your address
      amount: 1000000,  // The amount should be set to 1 algo (Hint: 1 algo is 1 million micro algos)
      suggestedParams: sp // Use the suggested parameters you got from the client above
    });

    // Sign the transaction. This should return a Uint8Array representing the bytes to be sent to the network
    const signed = ptxn.signTxn(acct.sk); // TODO: Sign the transaction object using the accounts secret key

    // Send the transaction, returns the transaction id for the first transaction in the group
    const { txId } = await client.sendRawTransaction(signed).do();
    txids.push(txId);

    // Wait for the transaction to be confirmed.
    const result = await algosdk.waitForConfirmation(client, txId, 2);

    // Log out the confirmed round
    console.log("Confirmed round: " + result["confirmed-round"]);

  } catch (error) {
    printError(error);
  }

  if (await validate(challenge_id, txids)) {
    console.log("Success!");
  } else {
    console.error(
      "Something went wrong, please review the error and try again"
    );
  }

})();