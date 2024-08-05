let Sec = document.getElementById("second");
let Min = document.getElementById("minute");
let Hr = document.getElementById("hour");


setInterval(()=>
{
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * 6;
    let s = day.getSeconds() * 6;

    Hr.style.transform = `rotateZ(${h+(m/12)}deg)`;
    Min.style.transform = `rotateZ(${m}deg)`;
    Sec.style.transform = `rotateZ(${s}deg)`;

})




let hours = document.getElementById("Hours");
let minutes = document.getElementById("Minutes");
let seconds = document.getElementById("Seconds");
let am_pm = document.getElementById("AM_PM");

setInterval(()=>
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    let ampm = (h<=12) ? "AM" : "PM";

    //Convert 24hr to 12hr Clock:
    if(h>12)
    {
        h=(h-12);
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    am_pm.innerHTML = ampm;
})
