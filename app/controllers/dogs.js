/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Dog = mongoose.model('Dog'),
    _ = require('underscore');


/**
 * Find dog by id
 */
exports.dog = function(req, res, next, id) {
    Dog.load(id, function(err, dog) {
        if (err) return next(err);
        if (!dog) return next(new Error('Failed to load dog ' + id));
        req.dog = dog;
        next();
    });
};

/**
 * Create a dog
 */
exports.create = function(req, res) {
    var dog = new Dog(req.body);
    dog.user = req.user;

    dog.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                dog: dog
            });
        } else {
            res.jsonp(dog);
        }
    });
};

/**
 * Update a dog
 */
exports.update = function(req, res) {
    var dog = req.dog;
    console.log(dog);

    dog = _.extend(dog, req.body);

    dog.save(function(err) {
        res.jsonp(dog);
    });
};

/**
 * Delete an dog
 */
exports.destroy = function(req, res) {
    var dog = req.dog;

    dog.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(dog);
        }
    });
};

/**
 * Show an dog
 */
exports.show = function(req, res) {
    res.jsonp(req.dog);
};

/**
 * List of Dogs
 */
exports.all = function(req, res) {
    Dog.find().sort('-created').populate('user', 'name username').exec(function(err, dogs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(dogs);
        }
    });
};
