// constructor class
function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Watch has started");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Watch ended");
    running = false;
    stopTime = new Date();

    const secondsSpent = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += secondsSpent;
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

let sw = new Stopwatch()
    this.start = start;
    this.stop = stop;
    this.duration = duration;


