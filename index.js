a =[[1,2,3,4,5],[4,[5,7,8]]]
// a= a.flat(1)
// console.log(a);



function flatten(arr) {
    let flattenArr = [];
    arr.forEach(el => {
      if(Array.isArray(el)){
        const result = flatten(el);
        result.forEach(el => flattenArr.push(el));
      } else {
        flattenArr.push(el);
      }
    });
    return flattenArr;
  }

var res = flatten(a);
console.log(res);

arr = [5,7,8,4,3];
function sort(a) {
    let swap,i,j;
    for(let i = 0; i < a.length; i++){
        swap=0;
        for(let j = 0; j < a.length - i -1; j++){
                if(a[j]>a[j+1]){
                    [a[j],a[j+1]] = [a[j+1],a[j]];
                    swap=1;
                }
        }
        if(swap==0) break;
        
    }
}
sort(a)
console.log(a);


localStorage.setItem("Name","Anand")
localStorage.setItem("branch","IT")
var a = localStorage.getItem("branch")
var b = localStorage.getItem("Name")
console.log(a,b);
setTimeout(function() {
    localStorage.removeItem("branch");
    localStorage.removeItem("Name");
},2000)
//LocalStorage to set and get Object
var student = {name:"Prakash",Age:24}
localStorage.setItem("student",JSON.stringify(student))
var getValue=JSON.parse(localStorage.getItem("student"));
console.log(getValue.Age);
setTimeout(function() {
    localStorage.clear();
},2000)

sessionStorage.setItem("Name","Anand")
sessionStorage.setItem("branch","IT")
var a = sessionStorage.getItem("branch")
var b = sessionStorage.getItem("Name")
console.log(a,b);
setTimeout(function() {
    sessionStorage.removeItem("branch");
    sessionStorage.removeItem("Name");
},2000)

// SessionStorage to set and get Object
var student = {name:"Prakash",Age:24}
sessionStorage.setItem("student",JSON.stringify(student))
var getValue=JSON.parse(sessionStorage.getItem("student"));
console.log(getValue.name,getValue.Age);
setTimeout(function() {
    sessionStorage.clear();
},2000)