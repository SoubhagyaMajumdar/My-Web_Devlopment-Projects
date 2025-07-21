const endDate = "20 July 2025 11:43 PM"
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")
function clock()
{
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000; // convert 'millisec' to 'sec'

    if (diff<0)
        return;

    console.log(diff);
    inputs[0].value = Math.floor(diff/3600/24);  // convert into 'Days'
    inputs[1].value = Math.floor(diff/3600) % 24;
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff % 60);
}



/*
    1 day = 24 hr
    1 hr = 60 min
    60 min = 3600 sec
*/


// Initial Call
clock()

//Continuous Call
setInterval(

    ()=>{
        clock()
    },
    1000

)