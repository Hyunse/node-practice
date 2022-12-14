// Event loop

// node myFile.js

const pendingTimers = [];
// async.js
const pendingOSTasks = [];
// threads.js
const pendingOperations = [];

// New timers, tasks, oeprations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate
  // Check two: Any pending OS tasks? ( Like serer listening to port )
  // Check three: Any pending long running operations? ( Like fs module )
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in on 'tick'
while(shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called
  // 2) Node lloks at pendingOSTasks and calls relevant callbacks
  // 3) Pause execution. Continue when...
  // - a new pendingOStask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4) Look at pendingTimers. Call any setImmediate

  // 5) Handle any 'close' events
}

// Exit back to terminal