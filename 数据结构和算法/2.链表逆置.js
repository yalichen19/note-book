function forEachLink(root) {
  var currentNode = root;
  while(currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next
  }
}

function reverseLink(link, last = null) {
  var next = link.next;
  link.next = last;
  if (!next) {
    return link;
  }
  return reverseLink(next, link)
}

function reverseLink2(link) {
  var last = null;
  var curr = link;
  var next = curr.next;
  while(next) {
    curr.next = last;
    last = curr;
    curr = next;
    next = next.next;
  }
  curr.next = last;
  return curr;
}

function revseseLink3(root) {
  if(!root.next.next) {
    root.next.next = root;
    return root.next;
  }
  var result = revseseLink3(root.next);
  root.next.next = root;
  root.next = null;
  return result;
}

function test() {
  function Node(val) {
    this.value = val;
    this.next = null
  }
  var link = new Node(0);
  var currentNode = link;
  for(var i = 0; i < 5; i++) {
    currentNode.next = new Node(i + 1);
    currentNode = currentNode.next;
  }
  console.log('for each link...')
  forEachLink(link);
  console.log('for each reversed link...')
  link = reverseLink(link)
  forEachLink(link);
  console.log('for each reversed link...')
  forEachLink(revseseLink3(link));
}

test()