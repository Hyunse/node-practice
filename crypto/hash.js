const { createHash } = require('crypto');

// create a string hash
function hash(input) {
  // SHA256 : Secure Hash Alogorithm 2
  // Returns 256 bit digest

  // digest
  // hex = 7ad584e61a22 ( 16 )
  // base64 = etWE/eWt= ( binary to text encoding )
  return createHash('sha256').update(input).digest('hex');
}

let password = 'Hello world!';
const hash1 = hash(password);

console.log(hash1);