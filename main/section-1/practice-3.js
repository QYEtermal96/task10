'use strict';


module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach((e) =>{
        if(objectB.value.includes(e)){
            result.push(e);
        }
    })
    return result;
}
