function Node(value) {
  this.value = value;
  this.neighbors = [];
}

function deepSearch(node, target, searchedNode) {
  if (!node) {
    return false;
  }
  searchedNode = searchedNode || [];
  searchedNode.push(node);
  console.log(node.value)
  if(node.value === target) {
    return true;
  }
  for(var i = 0; i < node.neighbors.length; i++) {
    const curNode = node.neighbors[i];
    if (searchedNode.indexOf(curNode) === -1 && deepSearch(curNode, target, searchedNode)) {
      return true;
    }
  }
  return false;
}

function wideSearch(root, target) {
  if (!root) {
    return false;
  }

  var queue = [root];
  var searchedNode = [];
  while(queue.length) {
    var node = queue.shift();
    console.log(node.value)
    searchedNode.push(node);
    if(node.value === target) {
      return true;
    }
    for(var i = 0; i < node.neighbors.length; i ++) {
      var currNode = node.neighbors[i]
      if (currNode && searchedNode.indexOf(currNode) === -1 && queue.indexOf(currNode) === -1) {
        queue.push(currNode);
      }
    }
  }
  return false;
}

var NodeA = new Node('a');
var NodeB = new Node('b');
var NodeC = new Node('c');
var NodeD = new Node('d');
var NodeE = new Node('e');
var NodeF = new Node('f');

NodeA.neighbors = [NodeC, NodeB];
NodeB.neighbors = [NodeA, NodeD]
NodeC.neighbors = [NodeA, NodeD]
NodeD.neighbors = [NodeB, NodeC, NodeE]
NodeE.neighbors = [NodeD]


console.log(deepSearch(NodeA, 'o'))
console.log(wideSearch(NodeA, 'o '))