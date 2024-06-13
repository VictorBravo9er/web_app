function alterMe(){
    alert("hi")
}

document.querySelector("button").onclick = () => {
    console.log("button clicked");
    const content = "a random number created " + Math.floor(Math.random()*1000);
    let prevEl = document.querySelector("#txtEl") 
    if (prevEl){
        prevEl.textContent = content;
        return;
    }
    const newElem = document.createElement('p');
    newElem.textContent = content;
    newElem.id = "txtEl";
    document.body.appendChild(newElem)
}

// document.querySelector("button").onmouseover

// document.querySelector("button").addEventListener("click", (this, ev) => {});
document.querySelector("button")