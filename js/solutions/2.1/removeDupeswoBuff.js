var ll = require('../../lib/LinkedList');

ll.prototype.removeDupesnoBuff = function() {
	if (this.head === null) {
		console.log("List is empty!");
	}
	var temp = this.head;

	while(temp.next !== null) {
		var dataVal = temp.data;
		var temp2 = temp;
		while(temp2.next !== null) {
			if (temp2.next.data === dataVal) {
				temp2.next = temp2.next.next;
			}
			temp2 = temp2.next;
		}
		temp = temp.next;
	}
};

var LL = new ll();

LL.insert(4);
LL.insert(4);
LL.insert(3);
LL.removeDupesnoBuff();
LL.print();
