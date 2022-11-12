const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

// IV : Initialization Vector
const message = 'Hello world!';
const key = randomBytes(32);
const iv = randomBytes(16);

console.log(key);
console.log(iv);

const cipher = createCipheriv('aes256', key, iv);

console.log(cipher);

// Encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');

console.log('--- Encrypt ---');
console.log(encryptedMessage);

// Decrypt
// Use Same key
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log('--- Decrypt ---');
console.log(decryptedMessage.toString('utf-8'));
