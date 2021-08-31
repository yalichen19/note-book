// 图的经典问题：求最小生成树问题
// 例：希望将所有村庄联通，怎么花费最少
// 可以用普里姆算法（加点法） 和 克鲁斯卡尔算法（加边法）解决

var points = ['a', 'b', 'c', 'd', 'e'];
var lines = [
  [Infinity, 4, 7, Infinity, Infinity],
  [4, Infinity, 8, 6, Infinity],
  [7, 8, Infinity, 5, Infinity],
  [Infinity, 6, 5, Infinity, 7],
  [Infinity, Infinity, Infinity, 7, Infinity],
]

function Node(value) {
  this.value = value;
  this.neighbors = [];
}

/**
 * 普里姆算法：
 * 1. 任选一个点作为起点
 * 2. 找到以选中点为起点的路径最短的边
 * 3. 如果边的另一端不在已添加的点中，则选择改边，并加入此点，否则继续查找
 * 4. 直到所有点都连通为止
 */
function prim (points, lines) {
  var startNodeIndex = 0
  var addedPointIndexs = [startNodeIndex];
  var addedPointNodes = [];
  var addedLines = [];
  for(var i = 0; i < lines.length; i++) {
    addedLines[i] = new Array(lines.length);
    addedPointNodes.push(new Node(points[i]));
  }
  while(addedPointIndexs.length < points.length) {
    // 搜索已添加点相关的边中最小的一条
    var minLine = lines[addedPointIndexs[0]][0];
    var indexA = 0;
    var indexB = 0;
    for(var i = 0; i < addedPointIndexs.length; i ++) {
      var index = addedPointIndexs[i];
      for(var j = 0; j < points.length; j++) {
        if (lines[index][j] < minLine && addedPointIndexs.indexOf(j) === -1) {
          minLine = lines[index][j];
          indexA = index;
          indexB = j;
        }
      }
    }
    addedLines[indexA][indexB] = minLine;
    addedLines[indexB][indexA] = minLine;
    addedPointIndexs.push(indexB);
    addedPointNodes[indexA].neighbors.push(addedPointNodes[indexB]);
    addedPointNodes[indexB].neighbors.push(addedPointNodes[indexA]);
  }
  return {
    addedPointNodes,
    addedLines,
  };
}
console.log(prim(points, lines).addedPointNodes)

/**
 * 克鲁斯卡尔算法：
 * 1. 先添加一条最小的边
 * 2. 继续选取最小的边，但要保证要么至少有一个点未加入，或者这条边可以连接两个村庄
 * 3. 直到所有点都连通为止
 */
function getGroupIndex(groups, item) {
  return groups.findIndex(group => {
    return group.indexOf(item) !== -1
  })
}

function kruskal(points, lines) {
  var addedPointGroups = [];
  var addedLines = [];
  var addedPointNodes = [];
  for(var i = 0; i < lines.length; i++) {
    addedLines[i] = new Array(lines.length);
    addedPointNodes.push(new Node(points[i]));
  }
  while(!addedPointGroups[0] || addedPointGroups[0].length !== points.length) {
    // 搜索已添加点相关的边中最小的一条
    var minLine = lines[0][0];
    var indexA = 0;
    var indexB = 0;
    for(var i = 0; i < points.length; i ++) {
      for(var j = 0; j < points.length; j++) {
        if (lines[i][j] < minLine 
          && (
            getGroupIndex(addedPointGroups, i) === -1 
            || getGroupIndex(addedPointGroups, j) === -1
            || getGroupIndex(addedPointGroups, i) !== getGroupIndex(addedPointGroups, j)
          )
        ) {
          minLine = lines[i][j];
          indexA = i;
          indexB = j;
        }
      }
    }
    addedLines[indexA][indexB] = minLine;
    addedLines[indexB][indexA] = minLine;
    addedPointNodes[indexA].neighbors.push(addedPointNodes[indexB]);
    addedPointNodes[indexB].neighbors.push(addedPointNodes[indexA]);
    const groupIndexA = getGroupIndex(addedPointGroups, indexA)
    const groupIndexB = getGroupIndex(addedPointGroups, indexB)
    if(groupIndexA === -1 && groupIndexB === -1) {
      addedPointGroups.push([indexA, indexB]);
    } else if (groupIndexA !== groupIndexB && groupIndexA !== -1 && groupIndexB !== -1 ) {
      addedPointGroups[groupIndexA] = addedPointGroups[groupIndexA].concat(addedPointGroups.splice(groupIndexB, 1)[0])
    } else if (groupIndexA !== -1) {
      addedPointGroups[groupIndexA].push(indexB);
    } else if (groupIndexB !== -1){
      addedPointGroups[groupIndexB].push(indexA);
    } 
  }
  return {
    addedPointNodes,
    addedLines,
  };
}
console.log(kruskal(points, lines).addedPointNodes)