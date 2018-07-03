var db = require('../db.js');

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("To start using the API please use /movie and the appropiate HTTP verb");
    });

    app.get("/movie", function (req, res){    
        var data = [];
        for (var value of db.movies.values()) {            
            data.push(value);
        }

        res.status(200).send(data);
    });

    app.get("/movie/:id", function (req, res){        
        var id = req.params.id;
        if (isFinite(id) && id  > 0 ){
            var movie = db.movies.get(id);
            if(movie === undefined){
                res.status(404).send({ message: 'Id does not exist' });
            }else{
                res.status(200).send(movie);
            }
        }
        else{
            res.status(400).send({ message: 'Id does not exist' });
        }
    });

    app.post("/movie", function (req, res){
        var body = req.body.movie;        
        db.saveMovie(body);
        res.status(201).send("Created");
    });

    app.delete("/movie/:id", function (req, res){
        var id = req.params.id;
        var movie = db.movies.get(id);
        if(movie === undefined){
            res.status(404).send({ message: 'Id does not exist' });
        }else{
            db.movies.delete(id);
            res.status(204).send('Deleted successfully');
        }
    });
  }

  module.exports = appRouter;