var
	locks = {},
	waits = {};

exports.lock = function(callback){

	var
		k = callback.toString();

	if ( locks[k] ) {
		if ( waits[k] == null )
			waits[k] = [callback];
		else
			waits[k].push(callback);
		return true;
	}
	locks[k] = true;

	// Release function

	var release = function(){
		if ( !waits[k] || waits[k].length == 0 ) {
			delete locks[k];
			return;
		}
		var cb = waits[k].shift();
		return cb(release);	
	};

	// Run and then.. release

	callback(release);
	return false;

};

exports.isLocked = function(callback) {

	var
		k = callback.toString();

	return(locks[k] ? true : false);

}
