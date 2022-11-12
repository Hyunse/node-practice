const { createHmac } = require('crypto');

// HMAC
// Hash-based message authentication code

const key = 'secret-key';
const message = 'messages';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = 'other-key';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);