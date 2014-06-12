var BST = function(arr) {
	this.size = 0;
	this.height = 0;
	arr.forEach(this.addNode.bind(this));
};

var Node = function(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
};

BST.prototype.addNode = function(data) {
	var node = new Node(data);
	var height = 1;
	if (this.root === undefined) {
		this.root = node;
		this.size++;
		this.height++;
		return;
	}
	var temp = this.root;
	while (temp)  {
		if (node.data === temp.data) {
			break;
		}
		else if (node.data > temp.data && temp.right == undefined) { 
			temp.right = node;
			this.size++;
			height++;
			break;
		}
		else if (node.data > temp.data && temp.right != undefined) {
			temp = temp.right;
		}
		else if (node.data < temp.data && temp.left == undefined) {
			temp.left = node;
			this.size++;
			height++;
			break;
		}
		else if (node.data < temp.data && temp.left != undefined) {
			temp = temp.left;
		}
		height++;
	}
	if (height > this.height) {           // Checks if height value matches up with height of tree object
		this.height = height;             // Sets height variable to value of this.height
		console.log(height);
		console.log(this.height);
	}
}

BST.prototype.get_size = function() {     // Method that returns the size attribute of the constructed BST
	return this.size;
}

BST.prototype.get_height = function() {	  // Method that returns the height attribute of the contructed BST
	return this.height;
}

BST.prototype.contains = function(data) { // Method that checks if BST contains a node with a certain data value
	var node = new Node(data);
	if (node.data == this.root.data) {
		return true;
	}
	var temp = this.root;
	while (node.data != temp.data) {
		if (node.data > temp.data && temp.right != undefined) {
			temp = temp.right;
		}
		else if (node.data > temp.data && temp.right == undefined) {
			return false;
		}
		else if (node.data < temp.data && temp.left !=undefined) {
			temp = temp.left;
		}
		else if (node.data < temp.data && temp.left == undefined) {
			return false;
		}
	}
	return true;
}

	}
};
