function compare(label) {
    return function(a, b) {
        if (a[label] < b[label]) {
            return -1;
        }
        if (a[label] > b[label]) {
            return 1;
        }
        return 0;
    }
}

function validateName(name){
    if(name === undefined || typeof name !== 'string' || name ===""){
            return false;
    }
    return true;
}

function validateAge(age) {
    if( age === undefined || typeof age !== "number" || age < 0) {
        return false;

    }
    return true;
}

module.exports = {compare, validateName, validateAge};