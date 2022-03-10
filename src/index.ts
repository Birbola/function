console.log("_____________________________________________________________________________");
//Bu function a + b javobini c darajaga ko'taradi
function plus(a: number, b: number , c: number){
    console.log("Javobi:" + (a + b) ** c); 
}
plus(3 , 5 , 2)
console.log("_____________________________________________________________________________");

//ikkita sonni eng kattasini topuvchi function
function max(a: number , b: number) : number{
    if(a > b){
        return a
    }
    else{
        return b
    }
}
let a = max(4 , 5)
console.log(a);
console.log("_____________________________________________________________________________");

//bir sonni toq yoki juft ligini topuvchi function
function isOdd(a: number) : boolean{
    if(a % 2 == 1){
        return true
    }
    else{
        return false
    }
}
let d = isOdd(7)
console.log(d);
console.log("_____________________________________________________________________________");

//ism va familyani birlashtiruvchi function
function FullName(a: string , b: string):string{
    return a + b
}
let g = FullName('Javohir' , 'Otanazarov')
console.log(g);
console.log("_____________________________________________________________________________");

//so'zning boshiga welcome qo'yuvchi function
function welcome(a: string):string{
    return 'welcome to function ' + a
}
let i = welcome(g)
console.log(i);
console.log("_____________________________________________________________________________");
