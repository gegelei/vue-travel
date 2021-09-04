// 快速排序
let testArray = [9, 1, 5, 1, 10, 6, 8, 3]

// function qucSort(val) {
//     if(val.length <= 1) return val
//     let mod = val.splice(0,1)[0];
//     let leftArr = []
//     let rightArr = []
//     val.map(ele => {
//         if(ele <= mod) {
//             leftArr.push(ele)
//         }else {
//             rightArr.push(ele)
//         }
//     })
//     return qucSort(leftArr).concat(mod,qucSort(rightArr))
// }
// console.log(qucSort(testArray))

// 冒泡排序
function maoPaoSort(val) {
    let length = val.length
    if(length <= 1) return val

    for(let i = 0; i < length -1; i++) {
        for(let k = 0; k < length-i-1; k++) {
            if(val[k] > val[k+1]) {
                let mod = val[k+1]
                val[k+1] = val[k]
                val[k] = mod
            }
        }
    }
    return val
}
console.log(maoPaoSort(testArray))

