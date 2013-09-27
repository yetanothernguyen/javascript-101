window.addEventListener('load', function() {
  var input = document.getElementById("todo-input");
  input.addEventListener('keyup', function(event) {
    var keycode = event.keyCode;
    if (keycode == 13) {
      var inputElement = event.target;
      var todo = inputElement.value;
      var todoContainer = document.getElementById("todo-list");
      todoContainer.innerHTML += "<li>" + todo + "</li>";
      inputElement.value = "";
    }
  });
});