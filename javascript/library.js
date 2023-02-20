function unfinished_alert(){
    alert("此頁面尚未完工，敬請期待!");
}

function jump_to_index(){
    location.href = "index.html";
}

function jump_to_aboutAuthor(){
    location.href = "about_author.html";
}

let home = document.getElementById("home");
home.addEventListener("click", jump_to_index, false);

let more_btn = document.getElementById("about_author");
more_btn.addEventListener("click", jump_to_aboutAuthor, false);