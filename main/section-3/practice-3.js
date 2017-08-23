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

function summarize(collection) {
    let result = [];
    collection.forEach((e) =>{
        let obj =find(result, e);
        if(obj){
            obj.count++;
        }else{
            result.push({key: e, count: 1});
        }
    })

    return result;
}

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

function discount(collection, promotionItems) {
    let result = [];
    collection.forEach((e) =>{
        let key = e.key;
        let count = e.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key,count});
    })

    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
