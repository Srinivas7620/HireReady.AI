let button2 = document.querySelector("#button2");

button2.addEventListener("click", function() {
    alert("button2 clicked");
    console.log("button2 clicked");
});

let button3 = document.querySelector("#button3");

// button3.addEventListener("click", function() {
//     alert("button3 clicked");
//     console.log("button3 clicked");
// });


let currentmode = "dark";

changetheme =() => {
    if (currentmode === "dark"){
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }else{
        currentmode ="dark";
        document.querySelector("body").style.backgroundColor = "gray";
    }
}

button3.addEventListener("click",changetheme);