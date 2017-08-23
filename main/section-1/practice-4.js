'use strict';



module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach((e) =>{
        if(objectB.value.includes(e.key)){
            result.push(e.key);
        }
    })
    return result;
}
