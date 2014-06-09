var LinkedList = function(){
	this.head = null;
}

LinkedList.prototype.insert = function(value){
	if (this.head === null){
		this.head = {data: value, next: null};
	}
	else {
		var temp = this.head;
		while (temp.next !== null) {
			temp = temp.next;
		}
		temp.next = {data: value, next: null};
	}
};

LinkedList.prototype.remove = function(index){
	if (index === 0) {
		if (this.head.next === null){
			this.head = null;
		}
		else {
			this.head = this.head.next;
		}
	}
	
	var temp = this.head;
	
	for (var i = index; i > 1; i--){
		temp = temp.next;
	}
	
	temp.next = temp.next.next;
};

LinkedList.prototype.print = function(){
	if (this.head === null) {
		console.log('[]');
	}
	else {
		var temp = this.head;
		var string = '[';
		while (temp.next !== null) {
			string += '"' + temp.data + '", ';
			temp = temp.next;
		};
		string += '"' + temp.data + '"]';
		console.log(string);
		}
};

module.exports = LinkedList;
