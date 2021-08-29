// 树形结构 —— 有向无环图
/**
 * 1. 树是图的一种
 * 2. 树有一个根节点
 * 3. 树形结构没有回路
 * 
 * - 叶子节点：没有子节点的节点
 * - 节点：非根节点和叶子节点的普通节点
 * - 树的度：树最多子节点的节点有多少个字节点
 * - 树的深度： 树最多有几层
 * 
 * - 满二叉树：叶子节点都在最后一层
 * - 完全二叉树：1）叶子节点都在最后一层或者倒数第二层 2）国内：叶子节点都向左聚拢 国际：如果有叶子节点，必须有两个
 * - 子树：二叉树中每个节点或者叶子节点都是一颗子树的根节点
 * - 左子树、右子树
 * 
 */

// 二叉树的遍历
/**
 * 传递二叉树要传根节点
 * 前序遍历（先根次序遍历）
 * 中序遍历（中根次序遍历）
 * 后续遍历（后根次序遍历）
 */

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var nodeA = new Node('A')
var nodeB = new Node('B')
var nodeC = new Node('C')
var nodeD = new Node('D')
var nodeE = new Node('E')
var nodeF = new Node('F')
var nodeG = new Node('G')

nodeA.left = nodeC;
nodeA.right = nodeB;
nodeC.left = nodeF;
nodeC.right = nodeG;
nodeB.left = nodeD;
nodeB.right = nodeE;
// 前序遍历
function FirstEach(root) {
  if (!root) {
    return;
  }
  console.log(root.value);
  FirstEach(root.left)
  FirstEach(root.right)
}
// 中序遍历
function MiddleEach(root) {
  if (!root) {
    return;
  }
  MiddleEach(root.left)
  console.log(root.value);
  MiddleEach(root.right)
}
// 后续遍历
function LastEach(root) {
  if (!root) {
    return;
  }
  LastEach(root.left)
  LastEach(root.right)
  console.log(root.value);
}
FirstEach(nodeA)
console.log('--------')
MiddleEach(nodeA)
console.log('--------')
LastEach(nodeA)

// 根据前序和中序还原二叉树
function getTree(fist, middle) {
  if(!fist || !middle) {
    return null;
  }
  if (fist === middle) {
    return new Node(fist);
  }
  var root = fist[0];
  var node = new Node(root);
  var middleRootIndex= middle.indexOf(root);
  var middleLeft = middle.slice(0, middleRootIndex);
  var middleRight = middle.slice(middleRootIndex + 1);
  // 不需要遍历，直接根据长度截取就可以了
  // var fistRightIndex = 1;
  // while(middleLeft.indexOf(fist[fistRightIndex]) > -1 && fistRightIndex < fist.length) {
  //   fistRightIndex ++
  // }
  node.left = getTree(fist.slice(1, middleRootIndex + 1), middleLeft);
  node.right = getTree(fist.slice(middleRootIndex + 1, fist.length), middleRight);
  return node;
}
console.log('根据前序和中序还原二叉树----------')
LastEach(getTree('ACFGBDE', 'FCGADBE'))


// 根据中序和后续还原二叉树
function getTree(middle, last) {
  if(!last || !middle) {
    return null;
  }
  if (last === middle) {
    return new Node(last);
  }
  var root = last[last.length - 1];
  var node = new Node(root);
  var middleRootIndex= middle.indexOf(root);
  var middleLeft = middle.slice(0, middleRootIndex);
  var middleRight = middle.slice(middleRootIndex + 1);
  // 不需要遍历，直接根据长度截取就可以了
  // var lastRightIndex = 0;
  // while(middleLeft.indexOf(last[lastRightIndex]) > -1 && lastRightIndex < last.length - 1) {
  //   lastRightIndex ++
  // }
  node.left = getTree(middleLeft, last.slice(0, middleRootIndex));
  node.right = getTree(middleRight, last.slice(middleRootIndex, -1));
  return node;
}
console.log('根据前序和中序还原二叉树----------')
FirstEach(getTree('FCGADBE', 'FGCDEBA'))


function deepSearch(root, target) {
  if(!root) {
    return false;
  }
  console.log(root.value)
  if(root.value === target) {
    return true;
  }
  return deepSearch(root.left, target) || deepSearch(root.right, target)
}
console.log('二叉树的深度优先遍历', deepSearch(nodeA, 'O'))


function wideSearch(root, target) {
  if(!root) {
    return false;
  }
  // 中心思想是通过一个数组来存放同一层的结点，依次遍历
  wideSearch.queue = [root];
  while(wideSearch.queue.length) {
    const curr = wideSearch.queue.shift();
    console.log(curr.value)
    if(curr.value === target) {
      return true;
    }
    curr.left && wideSearch.queue.push(curr.left)
    curr.right && wideSearch.queue.push(curr.right)
  }
  return false;
}

console.log('二叉树的广度优先遍历', wideSearch(nodeA, 'U'))


// 二叉树的比较
function compare(tree1, tree2) {
  if (tree1 === tree2) {
    return true;
  }
  if(!tree1 || !tree2 || tree1.value !== tree2.value) {
    return false;
  }
  // return compare(tree1.left, tree2.left) && compare(tree1.right, tree2.right) // 严格比较
  return compare(tree1.left, tree2.left) && compare(tree1.right, tree2.right) 
    || compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left); // 不严格比较，左右子树可以交换
}

var nodeA2 = new Node('A')
var nodeB2 = new Node('B')
var nodeC2 = new Node('C')
var nodeD2 = new Node('D')
var nodeE2 = new Node('E')
var nodeF2 = new Node('F')
var nodeG2 = new Node('G')

nodeA2.right = nodeC2;
nodeA2.left = nodeB2;
nodeC2.left = nodeF2;
nodeC2.right = nodeG2;
nodeB2.left = nodeD2;
nodeB2.right = nodeE2;

console.log('二叉树的比较', compare(nodeA, nodeA2))


// 二叉树diff的比较，重点是修改的情况要继续比较
function compare2(tree1, tree2) {
  if(!compare2.diffList) {
    compare2.diffList = [];
  }

  if (tree1 === tree2) {
    return compare2.diffList;
  }

  if(!tree1 || !tree2) {
    compare2.diffList.push({type: !tree2 ? '删除' : '新增', origin: tree1, now: tree2})
    return compare2.diffList;
  }
  if (tree1.value !== tree2.value) {
    compare2.diffList.push({type: '修改', origin: tree1, now: tree2})
  }
  return compare2(tree1.left, tree2.left) && compare2(tree1.right, tree2.right) // 严格比较
  // return compare(tree1.left, tree2.left) && compare(tree1.right, tree2.right) 
  //   || compare(tree1.left, tree2.right) && compare(tree1.right, tree2.left); // 不严格比较，左右子树可以交换
}

var nodeA3 = new Node('A')
var nodeB3 = new Node('B')
var nodeC3 = new Node('C')
var nodeD3 = new Node('D')
var nodeE3 = new Node('E')
var nodeF3 = new Node('F')
var nodeG3 = new Node('G')

nodeA3.right = nodeC3;
nodeA3.left = nodeB3;
nodeB3.left = nodeG3;
nodeB3.right = nodeF3;
nodeC3.left = nodeD3;
nodeC3.right = nodeE3;

console.log('二叉树的diff', compare2(nodeA, nodeA3))