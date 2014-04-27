(function () {
    "use strict";

    var Game = window.Game = {};

    Game.main = function (options) {
        this.username = options.username;
        this.$el = $(options.el);

        this.board = new Backbone.Model();
        this.players = new Backbone.Collection();
        this.food = new Backbone.Collection();
        this.scores = new Backbone.Collection();

        this.boardCanvasCtx = this.$el.find('.boardCanvas')[0].getContext("2d");
        this.playersCanvasCtx = this.$el.find('.playersCanvas')[0].getContext("2d");
        this.foodCanvasCtx = this.$el.find('.foodCanvas')[0].getContext("2d");

        this.boardCanvasView = new Game.BoardView({ctx : this.boardCanvasCtx, board : this.board});
        this.playersView = new Game.PlayersView({ctx : this.playersCanvasCtx, players : this.players, board : this.board});
        this.foodView = new Game.FoodView({ctx : this.foodCanvasCtx, board : this.board, food : this.food});

        var scoresViewEl = this.$el.find('.scoresContainer tbody');
        this.scoresView = new Game.ScoresView({el : scoresViewEl, collection : this.scores});


        this.board.set({
            "x": 50,
            "y": 50,
            "cellWidth": 10,
            "cellHeight": 10
        });

        this.food.reset([
            { "id": "c1", "x": 10, "y": 10},
            { "id": "c2", "x": 20, "y": 20}
        ]);

        this.players.reset([
            {
                "id": "9k-EPXiTlUO5qk2gtzPN",
                "username": "axelhzf",
                "parts": [ { "x": 1, "y": 0 }, { "x": 2, "y": 0 } ],
                "direction": {"x": 1, "y": 0}
            }
        ]);

        this.scores.reset([
            { "username": "axelhzf", "score": 1, "maxScore": 10}
        ]);

        var socket = io.connect('/');
        socket.emit('addPlayer', this.username);

    };

}());



