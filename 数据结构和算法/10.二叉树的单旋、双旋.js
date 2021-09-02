// 判断是否是平衡二叉树
function isBalance(root) {
  if(!root) {
    return true;
  }
  if(Math.abs(getDeep(root.left) - getDeep(root.right)) > 1) {
    return false;
  }
  return isBalance(root.left) && isBalance(root.right);
}

function getDeep(root) {
  if(!root) {
    return 0;
  }
  return Math.max(getDeep(root.left), getDeep(root.right)) + 1;
}

function rightSpin(root) {
  if(!root) {
    return root;
  }
  var left = root.left;
  root.left = left.right;
  left.right = root;
  return left;
}

function leftSpin(root) {
  if(!root) {
    return root;
  }
  var right = root.right;
  root.right = right.left;
  right.left = root;
  return right;
}

function changeToBalance(root) {
  if(isBalance(root)) {
    return root;
  }

  root.left = changeToBalance(root.left);
  root.right = changeToBalance(root.right);
  if(getDeep(root.left) > getDeep(root.right) + 1) {
    if (root.left && getDeep(root.left.left) < getDeep(root.left.right)) {
      //单旋无法满足，先对左子树左旋
      root.left = leftSpin(root.left);
    }
    // 左子树过长，右旋
    var newRoot = rightSpin(root);
    // 右旋后左子树可能不满足，需要右右双旋
    newRoot.right = changeToBalance(newRoot.right);
    return changeToBalance(newRoot)
  } else {
    if (root.right && getDeep(root.right.right) < getDeep(root.right.left)) {
      //单旋无法满足，先对右子树右旋
      root.right = rightSpin(root.right);
    }
    // 右子树过长，左旋
    var newRoot = leftSpin(root);
    // 左旋后右子树可能不满足，需要再次左左双旋
    newRoot.left = changeToBalance(newRoot.left);
    return changeToBalance(newRoot)
  }
}


function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// var NodeA = new Node('a');
// var NodeB = new Node('b');
// var NodeC = new Node('c');
// var NodeD = new Node('d');
// var NodeE = new Node('e');

// NodeA.left = NodeB;
// NodeB.left = NodeC;
// NodeC.left = NodeD;
// NodeD.left = NodeE
// // NodeB.right = NodeD;

// console.log('二叉树的旋转', changeToBalance(NodeA))


var arr = [];
for (var i = 0; i < 10000; i++) {
  arr[i] = Math.floor(Math.random() * 1000)
}

function addNode(root, value) {
  if (root.value === value) {
    return;
  }
  if (root.value > value) {
    root.left ? addNode(root.left, value) : root.left = new Node(value)
  } else {
    root.right ? addNode(root.right, value) : root.right = new Node(value)
  }
  return root;
}

function build(arr) {
  if(!arr || !arr.length) {
    return;
  }
  var root = new Node(arr[0])
  for(var i = 1; i < arr.length; i++) {
    addNode(root, arr[i])
  }
  return root;
}

var num = 0;
function treesSearch(root, target) {
  if(!root) {
    return false;
  }
  num++;
  if(root.value === target) {
    return true;
  }
  if(root.value > target) {
    return treesSearch(root.left, target)
  }
  return treesSearch(root.right, target)
}

console.log(treesSearch(build(arr), 12), num)
num = 0;
console.log(treesSearch(changeToBalance(build(arr)), 12), num)
console.log(isBalance(changeToBalance(build(arr))))