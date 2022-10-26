// Cluster practice
// The cluster manager is responsible for monitoring the health of individual 
// instances of our application
const cluster = require('cluster');

// Is the file being executed in master mode?
if(cluster.isMaster) {
  // Cuase index.js to be executed again
  // but in child mode
  cluster.fork();
} else {
  // I'm a child, Im going to act like a server
  // and do nothing else
  const express = require('express');
  const app = express();
  
  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) { }
  }
  
  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there');
  });
  
  app.listen(3000);
}