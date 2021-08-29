// 二维数组
var arr = new Array(4)
for(i = 0; i < arr.length; i++) {
  arr[i] = new Array(5);
}


// 二维拓扑结构（图）
function Node(value) {
  this.value = value;
  this.neighbors = [];
}

var nodeA = new Node('A')
var nodeB = new Node('B')
var nodeC = new Node('C')
var nodeD = new Node('D')
var nodeF = new Node('F')
var nodeE = new Node('E')

nodeA.neighbors.push(B)
nodeA.neighbors.push(C)
nodeA.neighbors.push(F)

nodeB.neighbors.push(A)
nodeB.neighbors.push(E)
nodeB.neighbors.push(D)

nodeC.neighbors.push(A)
nodeD.neighbors.push(B)
nodeE.neighbors.push(B)
nodeF.neighbors.push(A)