const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

let users = [];

function signup(email, password) {
  const salt = randomBytes(16).toString('hex');
  const hashedPassword = scryptSync(password, salt, 64).toString('hex');

  const user = { email, password: `${salt}:${hashedPassword}` };

  console.log(user);

  return user;
}

function login(email, password) {
  const user = users.find(v => v.email === email);

  const [salt, key] = user.password.split(':');
  const hasedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, 'hex');
  // Safe Timing Attact
  // https://javascript.plainenglish.io/what-are-timing-attacks-and-how-to-prevent-them-using-nodejs-158cc7e2d70c
  // In cryptography, a timing attack is a side-channel attack in which the attacker attempts to compromise a cryptosystem by analyzing the time taken to execute cryptographic algorithms.
  const match = timingSafeEqual(hasedBuffer, keyBuffer);

  if( match ) {
    return 'login success!';
  } else {
    return 'login fail!';
  }
}

// Signup
users.push(signup('a@a.com', '1234'));

// Login
console.log(login('a@a.com', '1234'));