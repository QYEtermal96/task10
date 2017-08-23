'use strict';

function find(collection, ch) {
    var result = collection.find((e) =>{
        return e.name === ch
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
        let obj = find(result,e);
        if(obj){
            obj.summary++;
        }else{
            result.push({name: e, summary: 1});
        }
    })

    return result;
}

function split(item) {
    if (item.includes("-")) {
        let array = item.split("-");
        return {key: array[0], count: parseInt(array[1], 10)};
    }

    if (item.includes("[")) {
        let key = item.charAt(0);
        let count = parseInt(item.substr(2, item.length - 1));
        return {key, count};
    }

    if (item.includes(":")) {
        let array = item.split(":");
        return {key: array[0], count: parseInt(array[1], 10)};
    }
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach((e) =>{
        if(e.length === 1){
            result.push(e)
        }else{
            let {key, count} = split(e);
            push(result, key, count);
        }
    })

    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
