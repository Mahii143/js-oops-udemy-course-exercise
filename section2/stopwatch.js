/**
 * constructor function for creating StopWatch object
 */
function StopWatch() {
    let startTime, endTime, running, duration = 0;

    /**
     * to start the stopwatch store the initial time
     */
    this.start = function() {
        if(running) {
            throw new Error('Stopwatch is already running...');
        }
        startTime = new Date();
        running = true;
    }

    /**
     * to stop the stopwatch store the end time
     * and add the stopwatch seconds to total duration
     */
    this.stop = function() {
        if(!running) {
            throw new Error('Stopwatch is not running...');
        }
        endTime = new Date();
        running = false;
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    /**
     * resets all variables
     */
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false; 
        duration = 0;
    }

    /**
     * adding a getter for the private variable duration
     */
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });

}