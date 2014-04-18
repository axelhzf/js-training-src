(function () {
  "use strict";

  var $form = $("form");
  var $tbody = $(".todo-list tbody");
  var $input = $("input[type=text]");


  function appendTaskHtml (task) {
    var $row = $("<tr><td><input type='checkbox'></td><td>" + task.name + "</td><td><a class='delete' href='#'><i class='fa fa-trash-o'></i></a></td></tr>");
    $row.data("task", task);
    $row.find("input").prop('checked', task.completed);
    $row.toggleClass("completed", task.completed);
    $tbody.append($row);
  }

  $form.on("submit", function (e) {
    e.preventDefault();
    var taskName = $input.val();
    if (taskName.length) {

    }
    $input.val("");
  });

  $tbody.on("change", "input", function (e) {
    var $check = $(e.currentTarget);
    var $tr = $check.parents("tr");
    var task = $tr.data("task");
    task.completed = $check.is(':checked');


  });

  $tbody.on("click", ".delete", function (e) {
    e.preventDefault();

    var $tr = $(e.currentTarget).parents("tr");
    var task = $tr.data("task");

  });


}());