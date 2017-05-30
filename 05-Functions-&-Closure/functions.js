function concatString(str1, middle, str3){
    var argumentsArray =  Array.prototype.slice.call(arguments);

    return argumentsArray.join('');
}

function yourFunctionRunner(){
    
    for(var i = 0; i < arguments.length; i++){
        return arguments[i]();
    }
}