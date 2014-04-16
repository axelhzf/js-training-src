(function () {
  "use strict";

  var $form = $("form");
  var $tbody = $(".todo-list");
  var $input = $("input[type=text]");

  function addTask (task) {
    $tbody.append("<tr><td><input type='checkbox'></td><td>" + task + "</td><td><a class='delete' href='#'><i class='fa fa-trash-o'></i></a></td></tr>");
  }

  $form.on("submit", function (e) {
    e.preventDefault();
    var task = $input.val();
    if (task.length) {
      addTask(task);
    }
    $input.val("");
  });

  $tbody.on("change", "input", function (e) {
    var $check = $(e.currentTarget);
    var $tr = $check.parents("tr");
    $tr.toggleClass("completed", $check.is(':checked'));
  });

  $tbody.on("click", ".delete", function (e) {
    e.preventDefault();
    var $tr = $(e.currentTarget).parents("tr");
    $tr.remove();
  });


}());