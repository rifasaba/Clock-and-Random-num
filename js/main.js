// let value;
// value = this;
// value = window.document;
// value = document;
// value = document.all
// value = document.all[10]
// value = document.head;
// value = document.body;
// value = document.doctype;
// value = document.domain;
// value = document.characterSet;
// value = document.URL;
// value = document.forms;
// value = document.forms[0].action;
// value = document.links;
// value = document.links[0].className;

// console.log(value);

// let arrayLink = Array.from(value)

// arrayLink.forEach(function(arrayLink){
//     console.log(arrayLink);
// })

// let valueX;
// valueX = document.getElementById("names").style

// valueX.background = "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(26,79,142,1) 100%";
// valueX.color = "#110a63";
// valueX.textAlign = "center";
// valueX.fontStyle = "italic"; 
// valueX.textContent = "This is Saba";  //--vs code e ja likbo shetai show krbe--//
// valueX.innerText = "This is Rifa..."  //--browser e jmn dekhabe shetai show krbe--//
// console.log(valueX);

// valueX = document.querySelector("ol li:nth-child(even)").style;
// valueX.color = "yellow"
// valueX.background = "#26c8c5"
// console.log(value);

// valueX = document.querySelectorAll("ol li:last-child");

// let arrayDom = Array.from(valueX)
// arrayDom.forEach(function(item){
//    item.style.background = "#304e98"
//    item.style.color = "#eeaeca"
// })

// let domTraversing;
// domTraversing = document.querySelector("ul")
// valueX = domTraversing.childNodes;
// valueX = domTraversing.children[2].style.background = "#c21660";
// valueX = domTraversing.children[3].style.background = "#8b984b";

// console.log(valueX);


// let ulList;
// ulList = document.createElement("li")
// ulLink = document.createElement("a")

// ulLink.setAttribute('href', 'https://www.pinterest.com')
// ulLink.appendChild(document.createTextNode("Find your faV Pictures"))


// console.log(ulLink);

// // ulList.appendChild(ulLink)
// // document.querySelector('.ul-list').appendChild(ulList)
// // ulList.classList = "link"
// // ulList.id = "pinterest"
// // ulList.setAttribute('title' , 'This is one of the best site')
// // console.log(ulList);



// let btn = document.getElementById("btnX");
// btn.addEventListener('click' ,clickMe);
// btn.addEventListener('click' ,alertX);
// btn.addEventListener('mouseout' ,mOut);
// btn.addEventListener('mouseover' ,mOver);
// btn.addEventListener('mouseup' ,mUp);
// btn.addEventListener('mousedown' ,mDown);
// btn.addEventListener('drag' ,mDrag);
// btn.addEventListener('drop' ,mDrop);
// btn.addEventListener('copy', cpText)
// btn.addEventListener('paste', psText)
// btn.addEventListener('drag' ,mDrag);
// btn.addEventListener('drop' ,mDrop);



// function clickMe(){
//   console.log("hellooo..");
// }

// function alertX(){
//     alert('This is alert')
// }

// function mOut(){
//    console.log("mouse is Out..");
// }

// function mOver(){
//     console.log("mouse is Over..");
// }
 
// function mUp(){
//     console.log("mouse is Up..");
// }
 
// function mDown(){
//     console.log("mouse is Down..");
// }

// function mDrag(){
//     console.log("mouse is Drag..");
// }


// function mDrop(){
//     console.log("mouse is Drop..");
// }

// function cpText(){
//     console.log("Text is copied");
// }

// function psText(){
//     console.log("Text is pasted");
// }


// function mDrag(){
//     console.log("mouse is Drag..");
// }


// function mDrop(){
//     console.log("mouse is Drop..");
// }

// let danger = document.getElementById("btn1")
// danger.addEventListener('click', display)

// function display(){
//   danger.classList = "classname";
//   danger.classList.toggle(classname);
// }



// document.getElementById("btnS").addEventListener('mouseover',alertmessage)
// document.getElementById("btnS").style.background = "#eeaeca"
// document.getElementById("colors").addEventListener('mouseover',alertmessage)
// document.getElementById("colors").style.background = "#1a4f8e";

// function alertmessage(event){
//     let value = event;
//     value = event.target;
//     value = event.target.id;
//     value = event.timeStamp;
//     value = event.type;
//     value = event.clientX;
//     value = event.clientY;
//     value = event.offsetX;
//     value = event.offsetY;

//     this.style.background = `#${event.clientX}`
//     console.log(value);
// }

// document.getElementById("content").addEventListener('focus', onfocus);
// document.getElementById("content").addEventListener('keyup', onfocus2);

// function onfocus(focusEvent){
//     this.style.background = "#2c78a2"
// }

// function onfocus2(focusEvent2){
//     document.querySelector("#text").innerText = this.value
// }


// console.log("before error");

// try{
//     errorTest()
// }catch(error){
//     console.log(error.message);
//     console.log(error.type);
//     console.log(error.name);
// }
// console.log("after error");

let time = document.querySelector(".time");

function setTime(){
    let todayTime = new Date()
    time.innerHTML = `${todayTime.getHours()} : ${todayTime.getMinutes()} : ${todayTime.getSeconds()}`
}
setInterval(setTime, 1000)


document.querySelector(".btn").addEventListener('click',clickMe);
let result =Math.ceil(Math.random()*100)

function clickMe(){
  alert(
    `${`You usually waste your time`}  ${result}%`
  );
}


















