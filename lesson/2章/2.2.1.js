// var employeeName = "John";
// // or
// var employeeName = "John";
function calc(isSum) {
    var a = 100;
    if (isSum) {
        //aが定義された内側のブロックスコープ内の利用なのでエラーは起きない
        var b = a + 1;
        return b;
    }
    //varで定義した場合はエラーにはなりませんが、letで定義した場合はエラーになる。
    return b;
}
