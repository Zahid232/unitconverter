let feet=3.28084
let kilometer=0.001
let centimeter=100
let milimeter=1000
let inPut=document.getElementById("enter")




function convert(){
    

    if (inPut.value===""){
        document.getElementById("foot").textContent=`1 metre is equal to 3.28084 feet`
        document.getElementById("milimeter").textContent=`1 metre is equal to 1000 milimeter`
        document.getElementById("centimeter").textContent=`1 metre is equal to 100 centimeter`
        document.getElementById("kilometer").textContent=`1 metre is equal to 0.001 KM`
    } else{
        document.getElementById("foot").textContent=`${inPut.value} metres are equal to ${inPut.value*feet} feet`
        document.getElementById("milimeter").textContent=`${inPut.value} metres are equal to ${inPut.value*milimeter} milimeters`
        document.getElementById("centimeter").textContent=`${inPut.value} metres are equal to ${inPut.value*centimeter} centimeters`
        document.getElementById("kilometer").textContent=`${inPut.value} metres are equal to ${inPut.value*kilometer} kilometers`
    }
}
