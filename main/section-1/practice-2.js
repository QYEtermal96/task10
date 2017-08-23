'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach((e) =>{
        if(collectionB[0].includes(e)){
            result.push(e);
        }
    })
    return result;
}
