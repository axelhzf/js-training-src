(function () {
  "use strict";

  window.App = {};

  App.Todo = Backbone.Model.extend({
    defaults: {
      completed: false
    }
  });

  App.Todos = Backbone.Collection.extend({
    model: App.Todo
  });

  App.TableView = Backbone.View.extend({
    initialize: function () {
      this.collection.on("add remove", this.render, this);
    },
    render: function () {
      console.log("render");
      this.$el.html("");
      this.collection.each(function (model) {
        var rowView = new App.RowView({model : model});
        rowView.render();
        this.$el.append(rowView.$el);
      }, this);
    }
  });

  App.RowView = Backbone.View.extend({
    tagName: "tr",
    template: Handlebars.compile($("#rowTemplate").html()),
    events: {
      "click .delete": "onDelete",
      "click input": "onClickCompleted"
    },
    initialize: function () {
      this.model.on("change:completed", this.render, this);
    },
    onDelete: function () {
      this.model.collection.remove(this.model);
    },
    onClickCompleted: function () {
      var completed = this.$("input").is(':checked');
      this.model.set({completed: completed });
    },
    render: function () {
      var context = {todo: this.model.toJSON()};
      this.$el.html(this.template(context));
      this.$el.toggleClass("completed", this.model.get("completed"));
    }
  });

  App.FormView = Backbone.View.extend({
    events: {
      "submit": "onSubmit"
    },
    onSubmit: function (e) {
      e.preventDefault();
      var $input = this.$("input");
      var task = $input.val();
      if (task.length) {
        var todo = new App.Todo({task: task});
        App.todos.push(todo);
        $input.val("");
      }
    }
  });

  //Initialize
  App.todos = new App.Todos();
  App.formView = new App.FormView({el : "form"});
  App.tableView = new App.TableView({el : "tbody", collection: App.todos});

}());