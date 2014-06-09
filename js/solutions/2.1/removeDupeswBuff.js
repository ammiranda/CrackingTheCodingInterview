var ll = require('../../lib/linkedList');

ll.prototype.removeDupes = function() {
	if (this.head === null) {
		console.log("List is empty! Therefore no dupes.");
	}
	
	var obj = {};
	var temp = this.head;

	obj[temp.data] = true;	

	while(temp.next !== null){
		if (obj[temp.next.data]){
			temp.next = temp.next.next;
		}
		obj[temp.next.data] = true;
		temp = temp.next;
	}
};

var LL = new ll();

LL.insert(4);
LL.insert(4);
LL.insert(3);
LL.removeDupes();
LL.print();
