
$(document).ready(function(){
  $("#togglekeyword").click(function(){
    $("mark").toggleClass("main");
    $(this).text($(this).text() == 'Schlagwort ein' ? 'Schlagwort aus' : 'Schlagwort ein');
  });
});

$(document).ready(function(){
  $("#toggletext").click(function(){
    $("strong").toggleClass("main");
        $(this).text($(this).text() == 'Sprachtext ein' ? 'Sprachtext aus' : 'Sprachtext ein');
  });
});

$(document).ready(function(){
  $("#togglecomment").click(function(){
    $("em").toggleClass("main");
            $(this).text($(this).text() == 'Kommentar ein' ? 'Kommentar aus' : 'Kommentar ein');
  });
});
