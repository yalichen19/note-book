var Permission;
(function (Permission) {
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["Delete"] = 4] = "Delete";
    Permission[Permission["Create"] = 8] = "Create";
})(Permission || (Permission = {}));
function addPermission(originP, newP) {
    return originP | newP;
}
function hasPermission(originP, checkP) {
    return (originP & checkP) === checkP;
}
function deletePermission(originP, deleteP) {
    return originP ^ deleteP;
}
let p = addPermission(Permission.Write, Permission.Delete);
console.log(hasPermission(p, Permission.Write));
console.log(hasPermission(p, Permission.Delete));
console.log(hasPermission(p, Permission.Read));
p = addPermission(p, Permission.Read);
console.log(hasPermission(p, Permission.Read));
p = deletePermission(p, Permission.Read);
console.log(hasPermission(p, Permission.Read));
