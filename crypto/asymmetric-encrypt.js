const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'Hello world~';

// Encrypt
// Use public key for encryption
const encryptedData = publicEncrypt(
 publicKey,
 Buffer.from(message) 
);

console.log(encryptedData.toString('hex'));

// Decrypt
// Use private key for decryption
const decryptedData = privateDecrypt(
  privateKey,
  Buffer.from(encryptedData)
);

console.log(decryptedData.toString('utf-8'));