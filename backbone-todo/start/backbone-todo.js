(function () {
  "use strict";

  window.App = {};

  App.Todo = Backbone.Model.extend({

  });

  App.Todos = Backbone.Collection.extend({

  });

  App.TableView = Backbone.View.extend({

  });

  App.RowView = Backbone.View.extend({

  });

  App.FormView = Backbone.View.extend({

  });

  //Initialize
  App.todos = new App.Todos();
  App.formView = new App.FormView({el : "form"});
  App.tableView = new App.TableView({el : "tbody", collection: App.todos});

}());