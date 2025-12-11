// function changebg(){
//     let r=Math.random()*255;
//     let g=Math.random()*255;
//     let b=Math.random()*255;

//     let body_bg = document.querySelector('body');1
//     body_bg.style.cssText='background-color=rgb(${r},${g},${b})';
//     let h2_bg=document.querySelector('h2');
//     h2_bg.innerHTML='RGB($(r),$(g),$b))';
// }
// let mode=document.querySelector('#mode');
// let body=document.querySelector('body');
// let premode='light';
// mode .addEventListener('click',()=>{
//     if(premode=='light'){
//         premode='dark';
//         body.classList.add('dark');
//         body.classList.remove("ligth");
//     }
//     else{
//         premode='light';
//         body.classList.add('dark');
//         body.classList.remove("ligth");
//     }
//     console.log(premode)
// })
















// let name="manju";
// const pi=2.14;
// console.log(name);
// let names=["A=2","B=3","c=5"];
// console.log(names);
// let result=5*3;
// console.log(result);
// let age=14;
// if(age>15){
//     console.log("adult");
// }
// else{
//     console.log("child");
// }
// for(let i=1;i<=5;i++){
// console.log(i);
// }
// function add(a,b){
//     console.log(a+b);
// }
// add(5,3)
// let fruits=["arvind","akash","dhanush"];
// fruits.push("pramodh");
// console.log(fruits);
// let arr=[];
// arr.push=({name:"manju",age:20});
// console.log(arr);
// let name1=prompt("enter your name:");
// console.log(name1);
// let student={
//     name2:"chethan",
//     age:20
// }
// console.log(student.name2);
// console.log(student.age);


// function DollerToRupee(doller){
//     let rate=88;
//     return doller*rate
// }
// console.log(DollerToRupee(10));
// //DOCUMENT OBJECT MODEL(DOM

// const p=document.getElementById("test");
// const div =document.getElementsByTagName('div');

// document.querySelector('#test');
// let b=document.querySelector(".msg");
// console.log(b);

// const p=document.getElementsByTagName('p');
// p.style.color='red';
// p.style.fontSize='20px';
// p.style.background='yellow';



function addstudent(){
    let input=document.querySelector('#input');
    let name = input.value.trim();

    let li=document.createElement('li');//creating the list elements for viewing the student list

    let span=document.createElement('span');
    span.innerText=name;
    let del=document.createElement('button');
    del.innerText='DEL';
    del.onclick=function(){
        li.remove();
    }

    li.appendChild(span);
    li.appendChild(del);
    document.querySelector('#list').appendChild(li);
    input.value='';

}