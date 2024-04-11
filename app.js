let btn=document.querySelector("button");

btn.addEventListener("click",function() {

    let h3=document.querySelector("h3");
    let randomcolor=getrandomcolor();
    h3.innerText=randomcolor;
    h3.style.color=randomcolor;

    console.log("Color updated");

    let div=document.querySelector("div");
    div.style.background=randomcolor;
    div.innerText=randomcolor;
});

function getrandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
