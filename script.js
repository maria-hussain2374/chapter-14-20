//QUESTION 1 /////chap 12-14


// let num =prompt("Enter a number to select \n number \n character \n  uppercase letter \n lowercase letter "  );
// if(num >= 48 && num <= 57 ){
//     console.log("this is a number");
    
// }else if(num >=65 && num <= 90){
//     console.log("these are upper case")
// }else if(num >=97 && num <=122){
//     console.log("these are lower case")
// }else{
//     console.log("Enter the valid number")
// }

//Question 2

// let num1 =prompt("enter a number:");
// let num2=prompt("Enter a number: ");
// if(num1>num2){
//     console.log("its a larger num")
// }else if(num1<num2 ){
//     console.log("its a smaller num");

// }else if(num1===num2){
//     console.log("both num are equal")
// }


//Question 3//
// let input =prompt("enter a number:");
// if(input>0){
//     console.log("Its a positive number")
// }
// else if(input<0){
//     console.log("Its a negative number")
// }else{
//     console.log("its a zero")
// }

//question 4//
// let char =prompt("Enter a character:");
// if(char=="a"|| char=="A" ||char=="e"|| char=="E"|| char=="i"|| char=="I"|| char=="o" || char=="O"|| char=="u"|| char=="U"){
//     console.log("true");

// }else{
//     console.log("false")
// }


//Question 5//)
// let password='karachipakistan';
// let user=prompt("please enter the password:");
// if(user=== "" ){
//     console.log("please enter the password:");
// }else if(user==password){
//     console.log("correct!the password you entered match the original password")
// }else if(user!=password){
//     console.log("wrong password")
// }


//Question 6//

// let greeting;
// let hour=13;
// if(hour<18){
// console.log("Good day")

//     }else{
//         console.log("Good day")
     
//     }



///Question 7//
// let time=1900;
// if(time >= 0o00 && time < 1700 ){
//     console.log("good morning");
//     }
    
// else if(time >= 1200 && time < 1700 ){
// console.log("good afternoor");
// }else if(time >= 1700 && time < 2100 ){
//     console.log("good evening");
//     }else if(time >=2100 && time < 2359 ){
//         console.log("good night");
//         }
        
    ///// chap 14-16



    //question 1
// let emptyarr=[];
//question 2
// let emptyobj=newarrray();
// //question 3
// let str=["book","copy","pencil","marker"];
// //question4
// let num=[12,15,16,17,18];
// //question 5
// let boolean=[true,false,false,true];
// //question 6
// let mixedarr=[null,undefined,12,true,false,"maria"];
//question 7
// document.write("QUALIFICATION:","<br>","<br>","<br>");
// let qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.PHILL","PHD"]
// for(let i=0; i<qualifications.length;i++){
//     document.write(`${i+1})${qualifications[i]}`);
//     document.write("<br>")
// }

//question 8
// let student=["summaiya","huma","hira"];
// let score=[67,78,99];
// document.write(`score of summaiya is ${score[0]} and percentage is 64%`,"<br>");
// document.write(`score of summaiya is ${score[1]} and percentage is 73%`,"<br>");
// document.write(`score of summaiya is ${score[2]} and percentage is 90%`,"<br>");

//question 9
// let colorname=["red","green","blue","yellow","brown",'white'];
// let optiona=prompt("please enter which colour do you want to add at start?");
// colorname.unshift(optiona);
// console.log(colorname);

//add favourite color at the end
// let optionb=prompt("please enter which colour do you want to add at the end?");
// colorname.push(optionb);
// console.log(colorname);


//add 2 more array at start
// colorname.unshift("skyblue","aquamarine");
// console.log(colorname);

//delete the first array
// colorname.shift();
// console.log(colorname);

//delete the last color

// colorname.pop();
// console.log(colorname);

//add new color at index
// let user=prompt("at which index do you want to add color?");
// let newcolor=prompt("now tell me new color of your choice")

// colorname.splice(user,0,newcolor);
// console.log(colorname);


//delete the array
// let user1=prompt("at which index do you want to delete?");
// let deletecolor=prompt("which color you want to delete");

// colorname.splice(0,3);
// console.log(colorname);


//question 10
// let studentscore=[320,230,480,120];
// console.log("score of students",studentscore);
// let c=studentscore.sort();
// console.log("ordered score oF students",c);


// question 11
// let citieslist=["karachi","lahore","islamabad","quetta","peshawar"];
// console.log("cities list");
// let d=citieslist.slice(2,4);
// console.log("selected citieslist",d);


//question 12

// let arr=["This","is","a","cat"];
// let str=arr.join( "  ");
// console.log(str)


//question 13

//FIFO METHOD
// let array=["keyboard","mouse","printer","monitor"];
// console.log("DEVICES:\n",array);
// console.log("out:\n","keyboard");
// console.log("out:\n","mouse");
// console.log("out:\n","printer");
// console.log("out:\n","monitor");

//question 14
// //LIFO METHOD
// let array2=["keyboard","mouse","printer","monitor"];
// console.log("DEVICES:\n",array);
// console.log("out:\n","monitor");
// console.log("out:\n","printer");
// console.log("out:\n","mouse");
// console.log("out:\n","keyboard");

//question 15

// let phone=["APPLE","SAMSUNG","MOTOROLA","NOKIA","SONY","HAIER"];
// document.write('<select>');

// for(let i=0;i<phone.length;i++){
//     document.write("<option>"+ phone[i] +"</option>")
// }   
//     document.write("</select>");




/////chap 17-20
//question 1

// let emptyarr=[
//     [""],
//     [""],
//     [""],
    
// ]
// console.log(emptyarr);
// //question 2
// let multidimentionalarray=[
//     [0,1,2,3],
//     [1,0,1,2],
//    [2,1,0,1],
// ]
// console.log(multidimentionalarray);


//question 3

// for(let i=0;i<=10;i++){
//     console.log(i);
// }


//question 4
// console.log('MULTIPLICATION TABLE OF 8');


// let table=prompt('Enter a number to show its multiplication table');
// let length=prompt("Enter length multiplication table");
// console.log("The length OF table is:",length);
// for(let i=1;i<=length;i++){
    
//     console.log(table +"*"+i + "=" , table*i);
    
// }

//question 5
// let fruits=["apple","banana","mango","orange","strawberry"];
// for(let i=0;i<fruits.length;i++){
//     console.log("the element at  index" + i + " is "+fruits[i]);

   
    

// }

//question 6
// console.log("counting:\n",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)
// console.log("Reverse counting:\n",10,9,8,7,6,5,4,3,2,1,)
// console.log("Even:\n",0,2,4,6,8,10)
// console.log("odd\n",1,3,5,7,9,11,13,15,17,19)
// console.log("series:\n", "2K,4k,6k,8k,10k,12k,14k,16k,18k,20k");


//question 7
// let a=["cake","applepie","chips","cookies","patties"];
// let userchoice=prompt("welcome to our bakery what do you want to order sir/madam\n cake\napplepie\ncookies\npatties\nchips");
// for(let i=0;i<=a.length;i++){

//     if(a[i]==userchoice){
//     console.log("cookie is available at shop")
// } else{
//     console.log("we are sorry the thing you want is not avaialable")
// }
// }



//question 8

// let A=[25,53,78,91,12];
// console.log("Array items\n",A);

// let c=Math.max(25,53,78,91,12);
// console.log(c);


//question 9
// let num=[25,53,78,91,12];
// console.log("Array items\n",num);
// let d=Math.min(25,53,78,91,12);
// console.log(d);



//question 10

// for(let i=1;i<=20;i++){
// console.log(i*5)
// }
