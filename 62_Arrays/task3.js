

let arr=[1,10,20,9,29,203,102,0,1,92];

let largestnum= arr[0];

for(let i of arr){
    if ( i> largestnum){
        largestnum =i;
    }
}

console.log(largestnum);