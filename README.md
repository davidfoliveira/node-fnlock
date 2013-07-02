# fnlock: Locking for function calls and queuing on lock

`fnlock` is a module that allows locking on asyncronous functions and queuing of function calls, to be called on release.

# Installing

	npm install fnlock

# Using

Simple use:

	var fnlock = require('fnlock');
	function run(arg){
	   fnlock.lock(function(release){
              console.log("Enter "+arg);
              setTimeout(release,1000);
           });
	}
	run(1);
	run(2);
	run(3);

It's supposed that the script takes 3 seconds to run.
