function unfinished_alert(){
    alert("此頁面尚未完工，敬請期待!");
}

function jump_to_aboutAuthor(){
    location.href = "index.html";
}

function jump_to_library(){
    location.href = "library.html";
}

let home = document.getElementById("home");
home.addEventListener("click", jump_to_aboutAuthor, false);

let more_btn = document.getElementById("library");
more_btn.addEventListener("click", jump_to_library, false);