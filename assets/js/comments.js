function hidecomments() {
document.querySelectorAll(".comment").forEach(a=>a.style.display = "none");
}
function showcomments() {
document.querySelectorAll(".comment").forEach(a=>a.style.display = "block");
}

$(document).ready(function(){
  $("#togglekeyword").click(function(){
    $("mark").toggleClass("main");
    $(this).text($(this).text() == 'Schlagwort ein' ? 'Schlagwort aus' : 'Schlagwort ein');
  });
});

$(document).ready(function(){
  $("#toggletext").click(function(){
    $("strong").toggleClass("main");
  });
});

$(document).ready(function(){
  $("#togglecomment").click(function(){
    $("em").toggleClass("main");
  });
});
