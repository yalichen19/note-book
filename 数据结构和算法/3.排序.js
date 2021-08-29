function Buble(arr) { // 越有序越适合冒泡排序
  for (var j = 0; j < arr.length - 1; j++) {
    for(var i = 0; i < arr.length - j - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
      }
    }
  }
  return arr
}

function choose(arr) { // 选择一个最大的或最小的，找到之后再交换位置
  for(var i = 0; i < arr.length - 1; i++) {
    var index = i;
    for(var j = i + 1; j < arr.length; j++) {
      index = arr[index] > arr[j] ? j : index;
    }
    var temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr
}

// 快排的本质是每次找一个坐标，以此来比较划分两个阵营
function quick(arr) { // 简单版本
  var k = 0;
  var left = [];
  var right = [];
  for(var i = 0; i < arr.length; i++) {
    if(i !== k) {
      (arr[i] > arr[j] ? right : left).push(arr[i])
    }
  }
  return quick(left).concat(arr[k]).concat(right);
}

// 标准快排（自己写的）
function quick2(arr, start, end) {
  if (!arr.length) {
    return arr;
  }
  start = start || 0;
  end = end || arr.length - 1;
  var i = start;
  var j = end;
  var k = arr[i];
  while(i!== j) {
    while(arr[j] >= k && j > i) {
      j--;
    }
    arr[i] = arr[j];
    while(arr[i] <= k && i < j) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = k;
  if (i - 1 > start) {
    quick2(arr, start, i - 1);
  }
  if (i + 1 < end) {
    quick2(arr, i + 1, end);
  }
  return arr;
}

// 标准答案
function quick3(arr, start, end) {
  if(start >= end - 1) {
    return;
  }
  var left = start;
  var right = end;
  do {
    do left++; while(left < right && arr[left] < arr[start]);
    do right--; while(right > left && arr[right] > arr[start]);
    if(left < right) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  } while(left < right)
  var point = left == right ? right - 1 : right;
  var temp = arr[start];
  arr[start] = arr[point];
  arr[point] = temp;
  quick3(arr, start, point)
  quick3(arr, point + 1, end)
  return arr;
}

console.log(quick3([5,2,3,7,23,1,9,0], 0, 8))
console.log(quick3([4,1,6,9,3,2,8,7], 0, 8))