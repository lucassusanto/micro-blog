// var db = require('./db')

exports.all = function(done) {
    done(null, 'Hello! From User.all');
}

/*
exports.getAll = function(done) {
    db.get().query('SELECT * FROM comments', function (err, rows) {
      if (err) return done(err)
      done(null, rows)
    })
  }
  */