function changeName(element){
    document.querySelector("#name").innerText = "Skeletor";
}

function accept1(){
    document.querySelector("#topPeople > h1").innerText++;
    document.querySelector("#request1").remove();
    document.querySelector("#topRequest h1").innerText--;
}

function close1(){
    document.querySelector("#request1").remove();
    document.querySelector("#topRequest h1").innerText--;
}

function accept2(){
    document.querySelector("#topPeople > h1").innerText++;
    document.querySelector("#request2").remove();
    document.querySelector("#topRequest h1").innerText--;
}

function close2(){
    document.querySelector("#request2").remove();
    document.querySelector("#topRequest h1").innerText--;
}