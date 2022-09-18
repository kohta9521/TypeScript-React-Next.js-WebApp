let employeeName = "John";

// or

let employeeName: string = "John";


function calc(isSum: boolean) {
    let a = 100
    if (isSum) {
        //aが定義された内側のブロックスコープ内の利用なのでエラーは起きない
        let b = a + 1
        return b
    }

    //varで定義した場合はエラーにはなりませんが、letで定義した場合はエラーになる。
    return b
}