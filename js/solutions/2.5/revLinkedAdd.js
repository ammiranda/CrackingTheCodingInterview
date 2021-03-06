var ll = require('../../lib/linkedList');

function returnInt(elem) {
	return parseInt(elem, 10);
}

function stringifyList(listHead) {
	var temp = listHead;
	var str = "";

	while (temp !== null) {
		str += temp.data;
		temp = temp.next;
	}
	
	return str;
}

function addLinkedLists(linkedOne, linkedTwo){
	
	var temp1 = linkedOne.head;
	var temp2 = linkedTwo.head;
	var str1 = stringifyList(temp1);
	var str2 = stringifyList(temp2);

	var sum = parseInt(str1) + parseInt(str2);
	var answerStr = sum.toString().split('');

	console.log(answerStr);	

	var answerArr = answerStr.map(returnInt);

	console.log(answerArr);

	var answer = new ll();

	for (var i = answerArr.length - 1; i >= 0; i--) {
		answer.insert(answerArr[i]);
	}
	return answer;
}

var bb = new ll();
bb.insert(3);
bb.insert(4);

var cc = new ll();
cc.insert(2);
cc.insert(5);

console.log(addLinkedLists(bb, cc));
