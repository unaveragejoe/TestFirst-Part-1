function repeat(string, number){
  var fullString = '';
  for(var i = 0; i < number; i++){
    fullString += string;
  }
  return fullString;
}

function sum(array){
  var total = 0;
    for(var i = 0; i < array.length; i++){
      total += array[i];
    }
  return total;
}

function join(array, delimiter){
  var arrayJoined = '';
  for(var i = 0; i < array.length; i++){
    arrayJoined += array[i];
    if(delimiter && i < array.length-1){
      arrayJoined += delimiter;
    } 

  }

//   if(array.length === 0){
//     return array.toString();
//   }

//   arrayJoined += array[i];
  return arrayJoined;
}

function gridGenerator(gridSize){
  var grid = '';

  for(var i = 0; i < gridSize; i++){
    for(var j = 0; k< gridSize; j++){
      grid += "#";

      if(grid[i] === "#"){
        grid += " ";
      } else if(grid[i] === " " ){
        grid += "#";
      }
    }
    grid += "\n";
    


  }
  return grid;
}





//   if(gridSize === 0){
//     return '';
//   } else {
//     for(var i = 0; i < gridSize.length; i++){
//       if(i % 2 === 0){
//         rows.push('#');
//       } else if(i % 2 === 1){
//         rows.push(' ');
//       }
//     }

//   }
//   return grid + rows;
// }

function paramify(obj){
  var objArray = [];

  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      objArray.push(key + "=" + obj[key]);
    }
  }
  return objArray.sort().join("&");
}

// function paramifyObjectKeys(obj){
//   var objArray = [];
//   var keyArray = Object.keys(obj);

//   for(var i = 0; i < keyArray.length; i++){
//      objArray.push(keyArray[i] + '=' + obj[keyArray[i]]);
//   }
//   return join(objArray.sort(), '&');
// }


function paramifyObjectKeys(obj){
  return Object.keys(obj).sort().map(function(element){
    return element + '=' + obj[element];
  }).join("&");
}


function renameFiles(arrayOfFiles){
  var trackFile = {};

  var newFileArray = arrayOfFiles.map(function(file){
    var extension = trackFile[file] || 0;
    trackFile[file] = extension + 1;
 
    if(extension === 0){
      return file;
    }
    
    

 });

 

  return newFileArray;

}

























