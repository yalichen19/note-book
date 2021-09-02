function Node(value) {
  this.value = value;
  this.children = [];
}

function deepSearch(root, target) {
  if (!root) {
    return false;
  }
  console.log(root.value)

  if(root.value === target) {
    return true;
  }
  for(var i = 0; i < root.children.length; i++) {
    if (deepSearch(root.children[i], target)) {
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
  while(queue.length) {
    var node = queue.shift();
    console.log(node.value)
    if(node.value === target) {
      return true;
    }
    for(var i = 0; i < node.children.length; i ++) {
      if (node.children[i]) {
        queue.push(node.children[i]);
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

NodeA.children = [NodeC, NodeB, NodeF];
NodeB.children = [NodeD, NodeE];

console.log(deepSearch(NodeA, 'o'))
console.log(wideSearch(NodeA, 'o'))