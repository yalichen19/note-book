// 前提问题：有一万个数，需要实现一个方法，查找给定的数是否存在，要求性能要好
// 如果用传统的遍历比较的方式，需要比较的次数过多了

// 可以构建二叉搜索树（二叉排序树）
// 二叉搜索树：首先是一个二叉树，同时满足左边的节点都比当前节点小，右边的数都比当前节点大

var arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 1000)
}

function search(target) {
  for(var i =0; i < arr.length; i++) {
    if(arr[i] === target) {
      return true;
    }
  }
  return false;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
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

function treesSearch(root, target) {
  if(!root) {
    return false;
  }
  if(root.value === target) {
    return true;
  }
  if(root.value > target) {
    return treesSearch(root.left, target)
  }
  return treesSearch(root.right, target)
}

console.log('构建并使用二叉排序树-------')
console.log(build(arr))
console.log(treesSearch(build(arr), 12))
console.log(search(12))

/**
 * 平衡二叉树
 * 每个节点的左子树与右子树的高度差不能超过1 
 */ 

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

console.log('判断二叉树是否是二叉平衡树-------');
console.log(arr);
console.log(isBalance(build(arr)));