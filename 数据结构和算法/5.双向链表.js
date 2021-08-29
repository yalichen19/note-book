// 双向链表的特点是，从任意一个节点都能遍历到所有节点
// 缺点是，每一个节点都有一个额外的指针开销

function Node(value) {
  this.value = value;
  this.next = null;
  this.pre = null;
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)

node1.next = node2
node2.next = node3
node2.pre = node1
node3.next = node4
node3.pre = node2
node4.pre = node3