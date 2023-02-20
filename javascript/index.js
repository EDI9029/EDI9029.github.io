function unfinished_alert(){
    alert("此頁面尚未完工，敬請期待!");
}

function jump_to_aboutAuthor(){
    location.href = "about_author.html";
}

function jump_to_library(){
    location.href = "library.html";
}

let about_author = document.getElementById("about_author");
about_author.addEventListener("click", jump_to_aboutAuthor, false);

let more_btn = document.getElementById("library");
more_btn.addEventListener("click", jump_to_library, false);