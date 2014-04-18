(function () {
  "use strict";

  var $form = $("form");
  var $tbody = $(".todo-list tbody");
  var $input = $("input[type=text]");

  var taskApi = {
    fetch: function () {
      return $.ajax({
        method: "GET",
        dataType: "json",
        url: "/api/tasks"
      })
    },
    create: function (task) {
      return $.ajax({
        method: "POST",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        url: "/api/tasks",
        data: JSON.stringify(task)
      });
    },
    update: function (task) {
      return $.ajax({
        method: "PUT",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        url: "/api/tasks/" + task.id,
        data: JSON.stringify(task)});
    },
    delete: function (task) {
      return $.ajax({
        method: "DELETE",
        dataType: "json",
        url: "/api/tasks/" + task.id
      });
    }
  };

  function fetchTasks () {
    taskApi.fetch().then(function (tasks) {
      $tbody.html("");
      _.each(tasks, appendTaskHtml);
    });
  }

  function createTask (task) {
    taskApi.create(task).then(fetchTasks);
  }

  function updateTask (task) {
    taskApi.update(task).then(fetchTasks);
  }

  function deleteTask (task) {
    taskApi.delete(task).then(fetchTasks);
  }

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
      createTask({name: taskName, completed: false});
    }
    $input.val("");
  });

  $tbody.on("change", "input", function (e) {
    var $check = $(e.currentTarget);
    var $tr = $check.parents("tr");
    var task = $tr.data("task");
    task.completed = $check.is(':checked');
    updateTask(task);
  });

  $tbody.on("click", ".delete", function (e) {
    e.preventDefault();

    var $tr = $(e.currentTarget).parents("tr");
    var task = $tr.data("task");
    deleteTask(task);
  });

  fetchTasks();
}());