enum Permission {
  Read = 1,
  Write = 2,
  Delete = 4,
  Create = 8,
}

/**
 * 添加权限、组合权限
 * @param p 原始权限值
 * 0000
 * 0001
 * 或 ——> 0001
 */
function addPermission(originP: Permission, newP: Permission) {
  return originP | newP;
}

/**
 * 判断权限
 * @param p 原始权限值
 * 0101
 * 0001
 * 且 ——> 0001
 * 
 */
function hasPermission(originP: Permission, checkP: Permission) {
  return (originP & checkP) === checkP;
}

/**
 * 删除权限
 * @param p 原始权限值
 * 0101
 * 0001
 * 异或 ——> 0100
 * 
 */
function deletePermission(originP: Permission, deleteP: Permission) {
  return originP ^ deleteP;
}

let p: Permission = addPermission(Permission.Write, Permission.Delete);
console.log(hasPermission(p, Permission.Write))
console.log(hasPermission(p, Permission.Delete))
console.log(hasPermission(p, Permission.Read))
p = addPermission(p, Permission.Read);
console.log(hasPermission(p, Permission.Read))
p = deletePermission(p, Permission.Read);
console.log(hasPermission(p, Permission.Read))
