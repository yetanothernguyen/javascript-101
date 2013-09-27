$(document).ready(function() {

  retrieveTodos();

  $("#todo-input").on("keyup", function(event) {
    var keycode = event.keyCode;
    if (keycode == 13 && $(this).val().length > 0) {
      var todo = $(this).val();
      $("#todo-list").append("<li><input type='checkbox' checked='' class='done-checkbox'/><label>" + todo + "</label><button class='destroy'></button></li>");
      $(this).val("");

      storeTodos();
    }
  });

  $(document).on("click", ".done-checkbox", function(event) {
    $(this).parent().toggleClass("done");

    storeTodos();
  });

  $(document).on("click", ".destroy", function(event) {
    $(this).parent().remove();

    storeTodos();
  });

  function storeTodos() {
    localStorage["todos"] = $("#todo-list").html();
  }

  function retrieveTodos() {
    var todos = localStorage["todos"];
    if (todos != undefined && todos) {
      $("#todo-list").html(todos); 
    }
  }
});