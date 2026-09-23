let array=[2,4,6,8,10,12,30,40,70,80,90,100]


let left=0
let right=array.length-1
let toroll=0
function binarySearch(arr,target){

  while(left<=right){
    let middle=Math.floor((left+right)/2)

    if(array[middle]===target){
        console.log(`Total search time:${toroll+1} Times`)
      return middle
    }

    if(array[middle]<target){
      left=middle+1
    }else{
      right=middle-1
    }
    toroll++
  }
  
  return -1
}

const search=binarySearch(array,100)
console.log(search)