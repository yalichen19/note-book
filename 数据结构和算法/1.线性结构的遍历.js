function forEach(arr) {
  if (!arr) {
    return;
  }
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function forEachLink(root) {
  var currentNode = root;
  while(currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next
  }
}

function recursiveArray(arr, i = 0) {
  if(!arr || i >= arr.length) {
    return;
  }
  console.log(arr[i])
  recursiveArray(arr, i+1);
}

function recursiveLink(root) {
  if(!root) {
    return;
  }
  console.log(root.value)
  recursiveLink(root.next);
}

function test() {
  console.log('for each array...')
  forEach([1,2,4,5,7]);
  function Node(val) {
    this.value = val;
    this.next = null
  }
  var node1 = new Node(0);
  var currentNode = node1;
  for(var i = 0; i < 5; i++) {
    currentNode.next = new Node(i + 1);
    currentNode = currentNode.next;
  }
  console.log('for each link...')
  forEachLink(node1);
  console.log('recursive for each array...')
  recursiveArray([1,2,4,5,7])
  console.log('recursive for each link...')
  recursiveLink(node1)
}

test()