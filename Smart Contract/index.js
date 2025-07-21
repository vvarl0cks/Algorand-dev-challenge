const algosdk = require("algosdk");
const { encodeAddress, getApplicationAddress } = require("algosdk");
const { validate, printError, algod } = require("./utils");
const fs = require("fs");

// DO NOT CHANGE
const challenge_id = "3475012173671627630"
const client = new algosdk.Algodv2(algod.token, algod.server, algod.port);
let txids = [];

// Read in the source TEAL programs
const approval = fs.readFileSync("approval.teal");
const clear = fs.readFileSync("clear.teal");

// You'll use this later
const accessCode = new Uint8Array(Buffer.from("not-a-secret"));

const secretKey = "7GaKn0PKX9ffiPO6VVO5/PiE+CGl8GwXB0u9U0qXKl4/pJjk+ePCfnSsqJnd4Bue4bKcN7EUFl4CgVQC1nfBzQ=="; // TODO: Add your secret key 

// Decode the secretKey into a Uint8Array from base 64
// This will produce an array of length 64
const secret = new Uint8Array(Buffer.from(secretKey, "base64"));
const acct = {
  // The public key is the secret[32:], or the last 32 bytes
  // We encode it to the address which is easier to read and includes a checksum
  addr: encodeAddress(secret.slice(32)),
  // We need not do anything with the secret
  sk: secret,
};


(async function() {
  try {
    const approvalRes = await client.compile(Buffer.from(approval).toString('utf-8')).do(); // TODO: use the client to compile `approval`, the teal source file contents 
    // Convert the result of compilation from base64 to bytes
    const approvalProgram = new Uint8Array(Buffer.from(approvalRes["result"], 'base64'));

    const clearRes = await client.compile(Buffer.from(clear).toString('utf-8')).do();  // TODO: use the client to compile `clear`, the teal source file contents 
    const clearProgram = new Uint8Array(Buffer.from(clearRes["result"], 'base64')); // TODO: similar to the above for approval program, convert the clear result base64 to bytes 

    // Get the suggested parameters from the Algod server. 
    // These include current fee levels and suggested first/last rounds.
    const createsp = await client.getTransactionParams().do();

    // TODO: Construct an application create transaction. 
    const txn = algosdk.makeApplicationCreateTxnFromObject({
      from: acct.addr, // TODO: set to your address
      approvalProgram: approvalProgram, // TODO: set to the approval program bytes decoded above
      clearProgram: clearProgram, // TODO: set to the clear program bytes decoded above
      numGlobalByteSlices: 1, // TODO: we need 1 global byte slice in our schema
      numGlobalInts: 1, // TODO: we need 1 global int in our schema
      numLocalByteSlices: 0,
      numLocalInts: 0,
      appArgs: [accessCode], // TODO: set to an array of 1 element containing `accessCode` above
      suggestedParams: createsp,
    });
    const signed = txn.signTxn(acct.sk);
    const createDetails = await client.sendRawTransaction(signed).do();
    txids.push(createDetails.txId);

    // Wait for the transaction to be confirmed.
    const result = await algosdk.waitForConfirmation(client, createDetails.txId, 2);
    console.log(result)

    // https://developer.algorand.org/docs/rest-apis/algod/v2/#pendingtransactionresponse
    const appId = result["application-index"] // TODO: Get the newly created `application-index` from the PendingTransactionResponse 

    // An application gets an account we can send assets to or issue transactions from, the address can be 
    // derived from the app id
    const appAddress = getApplicationAddress(appId)

    // Log out the confirmed round
    console.log("Confirmed round: " + result["confirmed-round"]);
    console.log("app id: " + appId);
    console.log("app address: " + appAddress);


    // Call the app
    const callsp = await client.getTransactionParams().do();
    const ac_txn = algosdk.makeApplicationCallTxnFromObject({
      from: acct.addr, // TODO: set to your address
      appIndex: appId, // TODO: set to the app id we got above
      appArgs: [accessCode], // TODO: set to an array containing the `accessCode` 
      suggestedParams: callsp,
    })
    const signedAc = ac_txn.signTxn(acct.sk)
    const callDetails = await client.sendRawTransaction(signedAc).do()
    txids.push(callDetails.txId)
    const callResult = await algosdk.waitForConfirmation(client, callDetails.txId, 2);
    console.log("Call confirmed in round: " + callResult["confirmed-round"])

  } catch (error) {
    printError(error);
    return;
  }

  console.log("Verifying challenge work...");
  if (await validate(challenge_id, txids)) {
    console.log("Challenge completed sucessfully!");
  } else {
    console.log("Something went wrong :(. Please review the error message and modify the code to try again")
  }

})();