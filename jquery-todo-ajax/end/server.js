var express = require('express');
var _ = require("underscore");

var app = express();

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

function id () {
  return (new Date().getTime() + Math.random()).toString();
}

var tasks = [
  {id: id(), name: "Study more JavaScript!", completed: false},
  {id: id(), name: "Ask something to the teacher", completed: true}
];

app.get("/api/tasks", function (req, res) {
  res.json(tasks);
});

app.post("/api/tasks", function (req, res) {
  var todo = req.body;
  todo.id = id();
  tasks.push(todo);
  res.json(todo);
});

app.put("/api/tasks/:id", function (req, res) {
  res.json(_.chain(tasks)
      .findWhere({id: req.param("id")})
      .extend(req.body)
      .value()
  );
});

app.del("/api/tasks/:id", function (req, res) {
  tasks = _.reject(tasks, function (task) {
    return task.id === req.param("id");
  });
  res.json({});
});

app.listen(3000, function () {
  console.log("Open http://localhost:3000/jquery-todo-ajax.html")
});