'use strict';

function find(collection, ch) {

    var result = collection.find((e) =>{
         return e.key === ch
    })
    if(result === undefined){
        return null;
    }else {
        return result;
    }
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach((e) =>{
        let obj = find(result,e);
        if(obj){
            obj.count++;
        }else{
            result.push({key: e, count: 1});
        }
    })

    return result;
}
