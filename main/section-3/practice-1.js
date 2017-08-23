'use strict';

function includes(collection, ch) {
     var result = collection.find((e) =>{
        return e === ch
    })
    if(result === undefined){
         return false;
    }else{
        return true;
    }

}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach((e) =>{
        let key = e.key;
        let count = e.count;
        if (includes(objectB.value, key)){
            count --;
        }
        result.push({key,count});
    })
    return result;
}
