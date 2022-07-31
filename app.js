// function l(a) {
//   console.log(a);
// }
//----------------------------------------------------------------------------------

// function power(b,p){
//     var answer=1
// for(var i=1;i<=p;i++){
//     answer*=b
// }
//     l(answer)
// }
// power(5,3)
// power(2,3)
// power(10,3)

//----------------------------------------------------------------------------------

// function leapYearCheck(givenYear){
// if(givenYear%4===0){
//     l(givenYear+" is leap year!")
// }else{
//     l(givenYear+" is not a leap year!")
// }
// }
// leapYearCheck(2012)
// leapYearCheck(2014)
// leapYearCheck(2020)

//----------------------------------------------------------------------------------

// function areaOfTriangle(a,b,c){
//     var S = ( a + b + c ) / 2;
//     var area = S*(S - a)*(S - b)*(S - c);
//     l("Area of Triangle is: "+area)
// }

// areaOfTriangle(2,2,2)
// areaOfTriangle(1,2,3)

//----------------------------------------------------------------------------------

// var avg;
// function average(sub1,sub2,sub3){
//     avg=(sub1+sub2+sub3)/3;
//     return avg;
// }
// function per(a,b,c){
//     var percent=((a+b+c)/300)*100
//     return percent
// }
// function main(a,b,c){
//         l("Average: "+average(a,b,c))
//         l("Percentile: "+per(a,b,c)+"%")
// }
// main(100,90,100)
// main(100,100,100)
// main(70,90,80)

//----------------------------------------------------------------------------------

// var s="Abdul Moiz"  //hum char dety hn indexof uska index return krta hai.
// l(s.indexOf("M"))
// l(s.replace("Abdul","Mohd."))
// var q=s.slice(6,10)
// var t=q.split("")
// l(t)
// l(t.join(""))


// var flag=false;
// function indexOff(word,char){
//     for(var i=0;i<word.length;i++){
//         if(word[i]===char){
//                 l(i)
//                 flag=true;
//         }
//     }
//     if(flag===false){
//         l(-1)
//      }
// }
// indexOff("Abdul Moiz","v")

//----------------------------------------------------------------------------------

// var arr = ["a", "e", "i", "o", "u"];
// var arr1=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

// function vowelDelete(sentence) {
//   var array=[];
//   var newSentence;
//   for (var i = 0; i < sentence.length; i++) {
//     for (var j = 0; j < sentence.length; j++) {
//           if (sentence[j] === arr[i]) {
//                 array.push(sentence[j])
//                 var j=array.join("")
//                 l(j)
               
//              }   
//         }
//     }
// }

// vowelDelete("Moiz");

