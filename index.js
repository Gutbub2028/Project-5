let count1=0
let count2=0
function one(){
    count1=count1+1
    document.getElementById("Home").innerHTML=count1
}
function two(){
    count1=count1+2
    document.getElementById("Home").innerHTML=count1
}
function three(){
    count1=count1+3
    document.getElementById("Home").innerHTML=count1
}
function onee(){
    count2=count2+1
    document.getElementById("Guest").innerHTML=count2
}
function twoo(){
    count2=count2+2
    document.getElementById("Guest").innerHTML=count2
}
function threee(){
    count2=count2+3
    document.getElementById("Guest").innerHTML=count2
}
function save(){
    ave1= "Home"+"-"+count1
    ave2="Guest"+"-"+count2
    avet=ave1+","+ave2
    count1=0
    count2=0
    document.getElementById("lastResult").innerText=avet
    document.getElementById("Home").innerHTML=count1
    document.getElementById("Guest").innerHTML=count2
}