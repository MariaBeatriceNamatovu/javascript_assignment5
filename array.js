//this program prints the value of an array using a loop

function printArrayValue(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

let arr = [50, 60, "Biology", "Physcology"];

printArrayValue(arr);