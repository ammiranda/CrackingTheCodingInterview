var Stack = function() {
	this.stac = new Array();
	
	this.pop = function() {
		return this.stac.pop();
	}
	
	this.push = function(item) {
		this.stac.push(item);
	}
}

module.exports = Stack;
