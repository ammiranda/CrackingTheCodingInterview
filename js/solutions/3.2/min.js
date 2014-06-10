var stack = require('../../lib/Stack');

stack.prototype.push2 = function(item) {
	if (!this.min) {
		this.min = item;
	}
	else {
		if (this.min > item) {
			this.min = item;
		}
	}
	
	this.stac.push(item);	
}

stack.prototype.minimum = function() {
	return this.min;
}

var s = new stack();

s.push2(4);
s.push2(5);
console.log(s.minimum());
