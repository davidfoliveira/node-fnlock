var
	fnlock = require('../lib/fnlock');

function run(arg){
	fnlock.lock(function(release){
		console.log("Enter "+arg);
		setTimeout(release,1000);
	});
}
function run2(arg){
	fnlock.lock(function(release){
		console.log("Enter2 "+arg);
		setTimeout(release,1000);
	});
}

run(1);
run(2);
run(3);
run(4);
run(5);
run2(1);
run2(2);
run2(3);