function unfinished_alert(){
    alert("此頁面尚未完工，敬請期待!");
}

function jump_to_aboutAuthor(){
    location.href = "index.html";
}

let home = document.getElementById("home");
home.addEventListener("click", jump_to_aboutAuthor, false);

let more_btn = document.getElementById("more_btn");
more_btn.addEventListener("click", unfinished_alert, false);