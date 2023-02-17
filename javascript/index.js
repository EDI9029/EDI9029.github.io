function unfinished_alert(){
    alert("此頁面尚未完工，敬請期待!");
}

function jump_to_aboutAuthor(){
    location.href = "about_author.html";
}

let more_btn = document.getElementById("more_btn");
more_btn.addEventListener("click", unfinished_alert, false);

let about_author = document.getElementById("about_author");
about_author.addEventListener("click", unfinished_alert, false);