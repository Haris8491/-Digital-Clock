function clock(){
	
let hours=document.getElementById('hours');
let minuts=document.getElementById('minuts');
let secound=document.getElementById('secound');
let period=document.getElementById('period');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let ampm= h >= 12 ? "PM" : "AN";

if( h > 12){
	 h = h - 12;
}

h = ( h < 10 ) ? "0" + h : h;
m = ( m < 10 ) ? "0" + m : m;
s = ( s < 10 ) ? "0" + s : s;


hours.innerHTML = h;
minuts.innerHTML = m;
secound.innerHTML = s;
period.innerHTML = ampm;

};
setInterval(clock ,1000);