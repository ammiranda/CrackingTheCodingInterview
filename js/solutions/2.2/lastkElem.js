var ll = require('../../lib/LinkedList');

ll.prototype.length = function() {
	if (this.head === null) {
		return 0;
	}
	var length = 1;
	var temp = this.head;

	while (temp.next !== null) {
		length++;
		temp = temp.next;
	}
	return length;
}

ll.prototype.kLastElem = function(k) {
	var length = this.length();

	if ((k + 1) > length) {
		console.log("K is too large for this list");
		return;
	}

	var temp = this.head;

	if ((k + 1) === length) {
		return temp.data;		
	}

	var diff = length - k - 1;
	
	while (diff !== 1) {
		temp = temp.next;
		--diff;
	}	
	return temp.next.data;
}

var LL = new ll();

LL.insert(2);
LL.insert(5);
LL.insert(4);

console.log(LL.kLastElem(0));
console.log(LL.kLastElem(1));
console.log(LL.kLastElem(2));
