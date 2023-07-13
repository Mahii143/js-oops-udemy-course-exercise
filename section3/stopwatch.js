function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (value) {
      endTime = value;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (value) {
      running = value;
    },
  });

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch is already running...");
  }
  this.startTime = new Date();
  this.running = true;
};

StopWatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch is not running...");
  }
  this.endTime = new Date();
  this.running = false;
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

const sw = new StopWatch();
console.log(sw);
