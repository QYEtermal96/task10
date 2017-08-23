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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach((e) =>{
        if (e.length === 1) {
            result.push(e);
        } else  {
            let {key, count} = split(e);
            push(result, key, count);
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
