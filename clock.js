let hr = document.getElementById("h1");
let min = document.getElementById("m1");
let sec = document.getElementById("s1");
let ap = document.getElementById("a1");
let select = document.getElementById("sel");
let interval24;
let interval12;

select.addEventListener("change", start);
hr.style.textAlign = "center";
min.style.textAlign = "center";
sec.style.textAlign = "center";
ap.style.textAlign = "center";

let date = new Date();
hr.textContent = (date.getHours());
min.textContent = (date.getMinutes());
sec.textContent = (date.getSeconds());
ap.textContent = (date.getHours()>=12)? "PM":"AM";

function start() {
    clearInterval(interval24);
    clearInterval(interval12);
    if (select.value === "1") {
        interval24 = setInterval(() => {
            let date = new Date();
            hr.textContent = date.getHours();
            min.textContent = date.getMinutes();
            sec.textContent = date.getSeconds();
            ap.textContent = date.getHours() >= 12 ? "PM" : "AM";
        }, 1000);
    } else if (select.value === "2") {
        interval12 = setInterval(() => {
            let date = new Date();
            let h1 = date.getHours() % 12 || 12;
            hr.textContent = h1;
            min.textContent = date.getMinutes();
            sec.textContent = date.getSeconds();
            ap.textContent = date.getHours() >= 12 ? "PM" : "AM";
        }, 1000);
    }
}
