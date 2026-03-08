function saveUser(){

let name=document.getElementById("name").value;
let district=document.getElementById("district").value;

localStorage.setItem("name",name);
localStorage.setItem("district",district);

window.location.href="alerts.html";

}


function predict(){

let social=document.getElementById("social").value;
let rain=document.getElementById("rain").value;
let calls=document.getElementById("calls").value;

localStorage.setItem("social",social);
localStorage.setItem("rain",rain);
localStorage.setItem("calls",calls);

window.location.href="result.html";

}


if(document.getElementById("risk")){

let name=localStorage.getItem("name");
let district=localStorage.getItem("district");

let social=parseInt(localStorage.getItem("social"));
let rain=parseInt(localStorage.getItem("rain"));
let calls=parseInt(localStorage.getItem("calls"));

document.getElementById("user").innerHTML=
"User: "+name+" | District: "+district;

let score=(social*0.4)+(rain*0.3)+(calls*0.3);

let riskText="";

if(score<50){

riskText="🟢 Low Risk Area";

}

else if(score<100){

riskText="🟡 Medium Risk Area";

}

else{

riskText="🔴 High Risk Area";

}

document.getElementById("risk").innerHTML=
"Risk Level: "+riskText+" | Score: "+score;


createChart(social,rain,calls);

createMap();

}


function createChart(s,r,c){

let ctx=document.getElementById("chart");

new Chart(ctx,{

type:'bar',

data:{
labels:['Social Alerts','Rainfall','Emergency Calls'],
datasets:[{
label:'Disaster Indicators',
data:[s,r,c]
}]
}

});

}


function createMap(){

var map=L.map('map').setView([13.0827,80.2707],7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([13.0827,80.2707]).addTo(map)
.bindPopup("Risk Monitoring Location")
.openPopup();

}
